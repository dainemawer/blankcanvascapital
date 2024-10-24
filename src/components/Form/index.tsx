"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@components/Button";
import { doSubmit } from "@lib/submit";

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
		<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
			<div
				className={`flex items-center border-2 border-copper rounded-lg px-5 py-3 ${
					errors.name ? "input-error relative" : ""
				}`}
			>
				<label
					className="flex flex-col md:flex-row items-start md:items-center w-full"
					htmlFor="name"
				>
					<span className="text-base font-semibold uppercase border-b-2 md:border-r-2 border-copper pb-4 md:pb-0 md:pr-4 mb-4 md:mb-0">
						Name
					</span>
					<input
						id="name"
						placeholder="Enter your name"
						type="text"
						{...register("name", { required: true })}
						className="w-full font-secondary text-base font-medium focus:outline-none"
					/>
				</label>
				{errors.name && (
					<small className="text-red-500 text-sm absolute bottom-[-1.5rem] left-0">
						This field is required
					</small>
				)}
			</div>

			<div
				className={`flex items-center border-2 border-copper rounded-lg px-5 py-3 mt-10 ${
					errors.email ? "input-error relative" : ""
				}`}
			>
				<label
					className="flex flex-col md:flex-row items-start md:items-center w-full"
					htmlFor="email"
				>
					<span className="text-base font-semibold uppercase border-b-2 md:border-r-2 border-copper pb-4 md:pb-0 md:pr-4 mb-4 md:mb-0">
						Email
					</span>
					<input
						id="email"
						placeholder="Enter your email address"
						type="email"
						{...register("email", {
							required: true,
							validate: (value) =>
								/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
						})}
						className="w-full font-secondary text-base font-medium focus:outline-none"
					/>
				</label>
				{errors.email && (
					<small className="text-red-500 text-sm absolute bottom-[-1.5rem] left-0">
						This field is required
					</small>
				)}
			</div>

			<div className="flex items-center border-2 border-copper rounded-lg px-5 py-3 mt-10">
				<label
					className="flex flex-col md:flex-row items-start md:items-center w-full"
					htmlFor="subject"
				>
					<span className="text-base font-semibold uppercase border-b-2 md:border-r-2 border-copper pb-4 md:pb-0 md:pr-4 mb-4 md:mb-0">
						Subject
					</span>
					<input
						id="subject"
						placeholder="Enter a subject"
						type="text"
						{...register("subject", { required: true })}
						className="w-full font-secondary text-base font-medium focus:outline-none"
					/>
				</label>
			</div>

			<div
				className={`flex flex-col border-2 border-copper rounded-lg px-5 py-3 mt-10 ${
					errors.message ? "input-error relative" : ""
				}`}
			>
				<label className="flex flex-col w-full" htmlFor="message">
					<span className="text-base font-semibold uppercase border-b-2 border-copper pb-4 mb-4">
						Message
					</span>
					<textarea
						id="message"
						placeholder="What would you like to discuss with us?"
						rows={10}
						{...register("message", { required: true })}
						className="w-full font-secondary text-base font-medium focus:outline-none resize-none"
					></textarea>
					{errors.message && (
						<small className="text-red-500 text-sm absolute bottom-[-1.5rem] left-0">
							This field is required
						</small>
					)}
				</label>
			</div>

			<input type="text" {...register("honeypot")} hidden />
			<Button className="mt-10" type="submit">
				{isSubmitting ? "Submitting..." : submitted}
			</Button>
		</form>
	);
};

export default Form;
