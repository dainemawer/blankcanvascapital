import type { NextApiRequest, NextApiResponse } from 'next'
import { resolve } from 'path';
const Mailjet = require('node-mailjet')

const mailjet = new Mailjet({
	apiKey: process.env.MAILJET_API_KEY,
	apiSecret: process.env.MAILJET_SECRET_KEY,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { to, from, name, message, text_body, html_body } = req.body
	const request = mailjet
		.post("send", { 'version': 'v3.1' })
		.request({
			"Messages": [
				{
					"From": {
						"Email": "info@blankcanvascapital.co.za",
						"Name": "Blank Canvas Capital Contact"
					},
					"To": [
						{
							"Email": "hello@dainemawer.com",
							"Name": "Daine Mawer"
						}
					],
					"Subject": "New Submission on dainemawer.com",
					"TextPart": "Hey! You have a new submission on dainemawer.com. Here are the details: Name: " + name + " Email: " + from + " Message: " + message,
					"HTMLPart": "<h3>Hey! You have a new submission on dainemawer.com.</h3><p>Here are the details:</p><p>Name: " + name + "</p><p>Email: " + from + "</p><p>Message: " + message + "</p>",
					"CustomID": "AppGettingStartedTest"
				}
			]
		})
	request
		.then((result: any) => {
			res.status(200).json({ message: 'success' })
			resolve();
		})
		.catch((err: any) => {
			console.log(err);
			res.status(500).json({ error: err.statusCode })
			resolve();
		})
}

export default handler
