import { IDataProps } from '@components/Form';

export const doSubmit = async (
	data: IDataProps, setSubmitted: (label: string) => void, reset: () => void
): Promise<void> => {
	const body = {
		from: data.email,
		name: data.name,
		message: data.message,
		subject: data.subject,
		honeypot: data.honeypot,
	};

	let ok = false;
	try {
		const res = await fetch('/api/send', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const response = await res.json();
		ok = res.ok && response.message === 'success';
	} catch (error) {
		console.error('Error', error);
	}

	setSubmitted(ok ? 'Success' : 'Error');
	setTimeout(() => {
		if (ok) reset();
		setSubmitted('Submit');
	}, 2500);
};
