import * as React from "react";

interface EmailTemplateProps {
  from: string;
	message: string;
	name: string;
	subject: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  from, message, name, subject
}) => (
  <div>
    <h1>Hello Darren.</h1>
		<h2>You have new contact form enquiry from Blank Canvas Capital.</h2>
		<p>See the details below:</p>
		<ul>
			<li>Name: {name}</li>
			<li>Email: {from}</li>
			<li>Subject: {subject}</li>
			<li>Message: {message}</li>
		</ul>
  </div>
);
