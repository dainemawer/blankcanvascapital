import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { from, message, name, subject } = req.body
  try {
    const data = await resend.emails.send({
      from: 'Blank Canvas Capital <mail@blankcanvascapital.co.za>',
      to: ['info@blankcanvascapital.co.za'],
      subject: 'New Submission from Blank Canvas Capital',
      react: EmailTemplate({ from, message, subject, name }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
