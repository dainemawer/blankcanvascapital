import { NextResponse } from 'next/server';
const Mailjet = require('node-mailjet');

// Initialize Mailjet with API keys
const mailjet = new Mailjet({
	apiKey: process.env.MAILJET_API_KEY,
	apiSecret: process.env.MAILJET_SECRET_KEY,
});

// Handle POST requests
export async function POST(req: Request) {
	try {
		// Extract data from the request body
		const { from, html_body, message, name, text_body, to } = await req.json();

		// Send the email using Mailjet
		const request = mailjet
			.post('send', { version: 'v3.1' })
			.request({
				Messages: [
					{
						From: {
							Email: from,
							Name: name,
						},
						To: [
							{
								Email: 'info@blankcanvascapital.co.za',
								Name: 'Blank Canvas Capital (Site Form)',
							},
						],
						Subject: 'New Submission on blankcanvascapital.co.za',
						TextPart:
							'You have a new submission on Blank Canvas Capital. ' +
							'Here are the details: ' +
							'Name: ' +
							name +
							' Email: ' +
							from +
							' Message: ' +
							message,
						HTMLPart:
							'<h3>Hey! You have a new submission on Blank Canvas Capital.</h3>' +
							'<p>Here are the details:</p><p>' +
							'Name: ' +
							name +
							'</p><p>Email: ' +
							from +
							'</p><p>Message: ' +
							message +
							'</p>',
					},
				],
			});

		// Handle the result of the email request
		const result = await request;
		return NextResponse.json({ message: 'success' }, { status: 200 });
	} catch (err: any) {
		console.error(err);
		return NextResponse.json({ error: err.statusCode || 'Internal Server Error' }, { status: 500 });
	}
}
