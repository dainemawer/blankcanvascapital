import { IDataProps } from '@components/Form';

export const doSubmit = (
	data: IDataProps, setSubmitted: (label: string) => void, reset: () => void
): Promise<string> => {
	return new Promise<string>(resolve => {
		setTimeout(() => {
			resolve('Resolved!');

			if (data.honeypot.length > 0) {
				return false;
			}

			const body = {
				to: 'hello@dainemawer.com',
				from: data.email,
				name: data.name,
				message: data.message,
				subject: `⚡️ thelazyload | Form submission`,
				text_body:
					`Hey Daine, you have a new submission from thelazyload.com.
							\n\n${data.message}`,
				html_body:
					`<p>Hey Daine, you have a new submission from thelazyload.com.</p>
							\n\n<p>From: ${data.name} - ${data.email}</p>\n\n
							<p>Message: ${data.message}</p>`,
			};

			fetch('/api/mail', {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(res => res.json())
				.then(response => {
					response.message === 'success' ?
						setSubmitted('Success') : setSubmitted('Error');
					setTimeout(() => {
						reset();
						setSubmitted('Submit');
					}, 2500)
				})
				.catch(error => console.log('Error', error));
		}, 2000);
	});
}
