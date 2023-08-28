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
				from: data.email,
				name: data.name,
				message: data.message,
				subject: data.subject,
			};

			fetch('/api/send', {
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
