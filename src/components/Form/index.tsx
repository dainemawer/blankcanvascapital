/*
 * Form
 *
 * Contact Form
 *
 * @returns {JSX.Element}
 */

import { FC, useState } from "react";

import { Button } from "@components/Button";
import { useForm } from "react-hook-form";
import { doSubmit } from "@lib/submit";
import {
	StyledErrorMessage,
	StyledInputGroup,
	StyledInput,
	StyledLabel,
	StyledTextarea,
} from "./Form.styled";
export interface IDataProps {
	email: string;
	honeypot: string;
	message: string;
	name: string;
	subject: string;
}

interface FormProps {}

const Form: FC<FormProps> = (): JSX.Element => {
	const [submitted, setSubmitted] = useState("Submit");

	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		register,
		reset,
	} = useForm();

	const onSubmit = (data: IDataProps) => doSubmit(data, setSubmitted, reset);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<StyledInputGroup className={errors.name && "input-error"}>
				<StyledLabel htmlFor="name">
					<span>Name</span>
					<StyledInput
						id="name"
						placeholder="Enter your name"
						type="text"
						{...register("name", { required: true })}
					/>
				</StyledLabel>
				<StyledErrorMessage>
					{errors.name && <>This field is required</>}
				</StyledErrorMessage>
			</StyledInputGroup>
			<StyledInputGroup className={errors.email && "input-error"}>
				<StyledLabel htmlFor="email">
					<span>Email</span>
					<StyledInput
						id="email"
						placeholder="Enter your email address"
						type="email"
						{...register("email", {
							required: true,
							validate: (value) =>
								/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
						})}
					/>
				</StyledLabel>
				<StyledErrorMessage>
					{errors.email && <>This field is required</>}
				</StyledErrorMessage>
			</StyledInputGroup>
			<StyledInputGroup>
				<StyledLabel htmlFor="subject">
					<span>Subject</span>
					<StyledInput
						id="subject"
						placeholder="Enter a subject"
						type="text"
						{...register("subject", { required: true })}
					/>
				</StyledLabel>
			</StyledInputGroup>
			<StyledInputGroup className={errors.message && "input-error"}>
				<StyledLabel htmlFor="message" vertical>
					<span>Message</span>
					<StyledTextarea
						id="message"
						placeholder="What would you like to discuss with us?"
						rows={10}
						{...register("message", { required: true })}
					></StyledTextarea>
					<StyledErrorMessage>
						{errors.message && <>This field is required</>}
					</StyledErrorMessage>
				</StyledLabel>
			</StyledInputGroup>
			<input type="text" {...register("honeypot")} hidden />
			<Button type="submit">
				{isSubmitting ? "Submitting..." : submitted}
			</Button>
		</form>
	);
};

export default Form;
