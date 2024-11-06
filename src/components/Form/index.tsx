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
	} = useForm<IDataProps>();

	const onSubmit = (data: IDataProps) => doSubmit(data, setSubmitted, reset);

	return (
		<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
			<div
				className={`flex items-center border-2 border-copper rounded-lg px-5 py-[14px] md:py-5 ${
					errors.name ? "input-error relative" : ""
				}`}
			>
				<label className="flex flex-row items-center w-full" htmlFor="name">
					<span className="pb-0 pr-4 mb-0 mr-4 text-base font-semibold uppercase border-r-2 border-copper">
						Name
					</span>
					<input
						id="name"
						placeholder="Enter your name"
						type="text"
						{...register("name", { required: true })}
						className="w-full font-secondary text-eyebrow font-regular focus:outline-none"
					/>
				</label>
				{errors.name && (
					<small className="text-red-500 text-sm absolute bottom-[-1.5rem] left-0">
						This field is required
					</small>
				)}
			</div>

			<div
				className={`flex items-center border-2 border-copper rounded-lg px-5 py-[14px] md:py-5 mt-10 ${
					errors.email ? "input-error relative" : ""
				}`}
			>
				<label
					className="flex flex-row items-center w-full md:flex-row"
					htmlFor="email"
				>
					<span className="pb-0 pr-4 mb-0 mr-4 text-base font-semibold uppercase border-r-2 border-copper">
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
						className="w-full font-secondary text-eyebrow font-regular focus:outline-none"
					/>
				</label>
				{errors.email && (
					<small className="text-red-500 text-sm absolute bottom-[-1.5rem] left-0">
						This field is required
					</small>
				)}
			</div>

			<div className="flex items-center px-5 py-[14px] md:py-5 mt-10 border-2 rounded-lg border-copper">
				<label
					className="flex flex-row items-center w-full md:flex-row"
					htmlFor="subject"
				>
					<span className="pb-0 pr-4 mb-0 mr-4 text-base font-semibold uppercase border-r-2 border-copper">
						Subject
					</span>
					<input
						id="subject"
						placeholder="Enter a subject"
						type="text"
						{...register("subject", { required: true })}
						className="w-full font-secondary text-eyebrow font-regular focus:outline-none"
					/>
				</label>
			</div>

			<div
				className={`flex flex-col border-2 border-copper rounded-lg px-5 py-[14px] md:py-5 mt-10 ${
					errors.message ? "input-error relative" : ""
				}`}
			>
				<label className="flex flex-col w-full" htmlFor="message">
					<span className="pb-4 mb-4 text-base font-semibold uppercase border-b-2 border-copper">
						Message
					</span>
					<textarea
						id="message"
						placeholder="What would you like to discuss with us?"
						rows={10}
						{...register("message", { required: true })}
						className="w-full resize-none font-secondary text-eyebrow font-regular focus:outline-none"
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
