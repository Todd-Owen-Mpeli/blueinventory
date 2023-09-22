// Imports
import Link from "next/link";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import {Field, Form, Formik, useFormik} from "formik";
import {initial, stagger, fadeInUp} from "@/animations/animations";

const SignUpForm: FC = () => {
	// Loading, Send & Error Message States
	const [errorMessage, setErrorMessage] = useState(false);

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};
		if (!values?.firstName) {
			errors.firstName = "Required*";
		} else if (values?.firstName.length >= 16) {
			errors.firstName = "Must be 15 characters or less";
		}

		if (!values.lastName) {
			errors.lastName = "Required*";
		} else if (values.lastName.length >= 21) {
			errors.lastName = "Must be 20 characters or less";
		}

		if (!values?.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values?.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!values.password) {
			errors.password = "Required*";
		} else if (values.password.length <= 7) {
			errors.password = "Must be 8 characters or more";
		}

		return errors;
	};

	// Google ReCaptcha Validation
	const [reCaptchaResult, setReCaptchaResult] = useState(null);
	const googleReCaptchaValidate = (value: any) => {
		return value;
	};

	const handleReCaptchaChange = (response: any) => {
		const result = googleReCaptchaValidate(response);
		setReCaptchaResult(result);
	};

	/* Contact Form Fields
	And Initial Values */
	const formik: any = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		validate,
		onSubmit: async (values: any) => {
			if (reCaptchaResult) {
				try {
					console.log(values);
				} catch (error) {
					setErrorMessage(true);
					throw new Error(
						"Error Message: Something went wrong with Sending your Message. Please try again."
					);
				}
			} else {
				throw new Error(
					"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
				);
			}
		},
	});
	// Form Submission
	const onFormSubmit = (event: any) => {
		event.preventDefault();
		setErrorMessage(false);
		if (reCaptchaResult) {
			try {
				/* Send Form Content */
				formik.handleSubmit();
			} catch (error) {
				setErrorMessage(true);
				throw new Error(
					"Error Message: Something went wrong with Sending your Message. Please try again."
				);
			}
		} else {
			throw new Error(
				"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
			);
		}
	};

	return (
		<>
			<Formik onSubmit={formik?.onSubmit} initialValues={formik?.initialValues}>
				<Form className="space-y-8">
					<motion.div
						initial={initial}
						viewport={{once: true}}
						whileInView={stagger}
						className="space-y-4"
					>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="space-y-2"
						>
							<div className="flex items-center justify-start gap-2">
								<label
									htmlFor="First Name"
									className="block text-tiny text-darkBlue"
								>
									First Name
								</label>
								{formik?.touched?.firstName && formik?.errors?.firstName ? (
									<span className="py-0 text-sm font-semibold text-left text-pinkRed">
										{formik?.errors?.firstName}
									</span>
								) : null}
							</div>
							<Field
								type="text"
								id="firstName"
								name="firstName"
								placeholder="Leroy"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.firstName}
								className="w-full px-3 py-2 border-[1px] rounded-md border-grey text-darkBlue focus:border-darkBlue"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="space-y-2"
						>
							<div className="flex items-center justify-start gap-2">
								<label
									htmlFor="Last Name"
									className="block text-tiny text-darkBlue"
								>
									Last Name
								</label>
								{formik?.touched?.lastName && formik?.errors?.lastName ? (
									<span className="py-0 text-sm font-semibold text-left text-pinkRed">
										{formik?.errors?.lastName}
									</span>
								) : null}
							</div>
							<Field
								type="text"
								id="lastName"
								name="lastName"
								placeholder="Jenkins"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.lastName}
								className="w-full px-3 py-2 border-[1px] rounded-md border-grey text-darkBlue focus:border-darkBlue"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="space-y-2"
						>
							<div className="flex items-center justify-start gap-2">
								<label
									htmlFor="email"
									className="block text-tiny text-darkBlue"
								>
									Email address
								</label>
								{formik?.touched?.email && formik?.errors?.email ? (
									<span className="py-0 text-sm font-semibold text-left text-pinkRed">
										{formik?.errors?.email}
									</span>
								) : null}
							</div>
							<Field
								id="email"
								type="email"
								name="email"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.email}
								placeholder="leroyjenkins@gmail.com"
								className="w-full px-3 py-2 border-[1px] rounded-md border-grey text-darkBlue focus:border-darkBlue"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="space-y-2"
						>
							<div className="flex items-center justify-between">
								<span className="flex items-center justify-start gap-2">
									<label
										htmlFor="Last Name"
										className="block text-tiny text-darkBlue"
									>
										Last Name
									</label>
									{formik?.touched?.password && formik?.errors?.password ? (
										<span className="py-0 text-sm font-semibold text-left text-pinkRed">
											{formik?.errors?.password}
										</span>
									) : null}
								</span>
								<Link
									rel="noopener noreferrer"
									href="#"
									className="text-xs focus:underline text-darkBlue hover:text-blue hover:underline"
								>
									Forgot password?
								</Link>
							</div>
							<Field
								id="password"
								type="password"
								name="password"
								placeholder="**********"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.password}
								className="w-full px-3 py-2 border-[1px] rounded-md border-grey text-darkBlue focus:border-darkBlue"
							/>
						</motion.div>
						<ReCAPTCHA
							sitekey={`6LeJJqwlAAAAAByEDQJTbNFkPL9DSjMBwnE7smkU`}
							onChange={handleReCaptchaChange}
						/>
					</motion.div>
					<motion.button
						role="button"
						type="button"
						initial={initial}
						viewport={{once: true}}
						whileInView={fadeInUp}
						onClick={onFormSubmit}
						aria-label="Sign Up with Form"
						disabled={
							!formik?.values?.firstName ||
							!formik?.values?.lastName ||
							!formik?.values?.email ||
							!formik?.values?.password ||
							reCaptchaResult === null ||
							reCaptchaResult === undefined
						}
						className="relative flex items-center justify-center w-full px-4 py-2 space-x-4 overflow-hidden text-white transition duration-200 bg-center bg-no-repeat bg-cover rounded-md disabled:bg-opacity-20 disabled:cursor-not-allowed border-darkBlue group focus:ring-2 focus:ring-offset-1 hover:text-white hover:border-white focus:ring-white"
						style={{
							backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-darkblue.svg")`,
						}}
					>
						<div
							className="absolute top-0 w-full h-full transition duration-200 transform bg-center bg-no-repeat bg-cover bg-darkBlue right-full group-hover:translate-x-full group-hover:scale-102"
							style={{
								backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-orange-yellow.svg")`,
							}}
						/>
						<span className="relative text-base">Sign up</span>
					</motion.button>
				</Form>
			</Formik>
		</>
	);
};

export default SignUpForm;
