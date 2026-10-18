import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = { name: 200, from: 320, subject: 300, message: 5000 };

// Best-effort, per-instance rate limit (serverless instances don't share memory)
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const hits = new Map<string, number[]>();

const isRateLimited = (key: string): boolean => {
	const now = Date.now();
	const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
	recent.push(now);
	hits.set(key, recent);
	return recent.length > RATE_LIMIT.max;
};

const escapeHtml = (value: string): string =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');

const renderEmailHtml = (name: string, from: string, subject: string, message: string): string => `<div>
<h1>Hello Darren.</h1>
<h2>You have new contact form enquiry from Blank Canvas Capital.</h2>
<p>See the details below:</p>
<ul>
<li>Name: ${escapeHtml(name)}</li>
<li>Email: ${escapeHtml(from)}</li>
<li>Subject: ${escapeHtml(subject)}</li>
<li>Message: ${escapeHtml(message).replace(/\n/g, '<br>')}</li>
</ul>
</div>`;

const isValidString = (value: unknown, max: number): value is string =>
	typeof value === 'string' && value.trim().length > 0 && value.length <= max;

// Handle POST requests
export async function POST(req: Request) {
	const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
	if (isRateLimited(ip)) {
		return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
	}

	let body: Record<string, unknown>;
	try {
		body = await req.json();
	} catch {
		return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
	}

	// Honeypot: bots fill the hidden field. Pretend success and send nothing.
	if (typeof body.honeypot === 'string' && body.honeypot.length > 0) {
		return NextResponse.json({ message: 'success' }, { status: 200 });
	}

	const { from, message, name, subject } = body;
	if (
		!isValidString(name, MAX_LENGTHS.name) ||
		!isValidString(from, MAX_LENGTHS.from) ||
		!EMAIL_PATTERN.test(from) ||
		!isValidString(subject, MAX_LENGTHS.subject) ||
		!isValidString(message, MAX_LENGTHS.message)
	) {
		return NextResponse.json({ error: 'Invalid or missing fields' }, { status: 400 });
	}

	try {
		// Initialize Resend lazily so the build doesn't require the API key
		const resend = new Resend(process.env.RESEND_API_KEY);

		// Send the email using Resend
		const { error } = await resend.emails.send({
			from: 'Blank Canvas Capital <mail@blankcanvascapital.co.za>',
			to: ['info@blankcanvascapital.co.za'],
			replyTo: from,
			subject: 'New Submission from Blank Canvas Capital',
			text: `From: ${name} <${from}>\n\nSubject: ${subject}\n\nMessage: ${message}`,
			// Plain HTML: Resend's `react` option needs @react-email/render, which isn't installed
			html: renderEmailHtml(name, from, subject, message),
		});

		if (error) {
			console.error('Resend error', error);
			return NextResponse.json({ error: 'Failed to send message' }, { status: 502 });
		}

		return NextResponse.json({ message: 'success' }, { status: 200 });
	} catch (error) {
		console.error('Contact form error', error);
		return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
	}
}
