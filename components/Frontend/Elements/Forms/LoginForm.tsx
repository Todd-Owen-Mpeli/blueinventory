// Imports
import Link from "next/link";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import {Field, Form, Formik, useFormik} from "formik";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Firebase
import {getAuth} from "firebase/auth";
import {signInUserWithEmailAndPassword} from "@/functions/Backend/firebase/signInWithEmailAndPassword";
import {createNewUserWithEmailAndPassword} from "@/functions/Backend/firebase/createNewUserWithEmailAndPassword";

const LoginForm: FC = () => {
	const auth = getAuth();
	const router = useRouter();

	// Loading, Send & Error Message States
	const [errorMessage, setErrorMessage] = useState(false);
	const [errorEmailMessage, setErrorEmailMessage] = useState(false);
	const [errorPasswordMessage, setErrorPasswordMessage] = useState(false);
	const [errorEmailExistsMessage, setErrorEmailExistsMessage] = useState(false);

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};

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
			email: "",
			password: "",
		},
		validate,
		onSubmit: async (values: any) => {
			if (reCaptchaResult) {
				try {
					const signInStatus = await signInUserWithEmailAndPassword(
						auth,
						values
					);

					if (signInStatus) {
						if (signInStatus.wrongEmail) {
							setErrorEmailMessage(true);
						} else if (signInStatus.wrongPassword) {
							setErrorPasswordMessage(true);
							setErrorEmailExistsMessage(true);
						} else if (signInStatus.userNotFound) {
							console.log(`Created new user ${values?.fullName}`);
							createNewUserWithEmailAndPassword(auth, values);
							setTimeout(() => {
								router.push(`/payment`).catch(console.error);
							}, 1000);
						} else if (signInStatus.userDisabled) {
							setErrorMessage(true);
						} else {
							// Send user to the dashboard
							router.push(`/dashboard`).catch(console.error);
						}
					}
				} catch (error) {
					setErrorMessage(true);
					throw new Error(
						`Error Message: Something went wrong signing you in. Please try again.`
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
									htmlFor="email"
									className="block text-tiny text-darkBlue"
								>
									Email address
								</label>
								<div className="flex items-center">
									{formik?.touched?.email && formik?.errors?.email ? (
										<span className="py-0 text-sm font-semibold text-left text-pinkRed">
											{formik?.errors?.email}
										</span>
									) : null}
									<span
										className={
											errorEmailMessage
												? "py-0 text-sm font-semibold text-left text-pinkRed"
												: "hidden"
										}
									>
										Invalid email address
									</span>
									<span
										className={
											errorEmailExistsMessage
												? "py-0 text-sm font-semibold text-left text-brightGreen"
												: "hidden"
										}
									>
										Valid email address
									</span>
								</div>
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
										htmlFor="Password"
										className="block text-tiny text-darkBlue"
									>
										Password
									</label>
									<div className="flex items-center">
										{formik?.touched?.password && formik?.errors?.password ? (
											<span className="py-0 text-sm font-semibold text-left text-pinkRed">
												{formik?.errors?.password}
											</span>
										) : null}
										<span
											className={
												errorPasswordMessage
													? "py-0 text-sm font-semibold text-left text-pinkRed"
													: "hidden"
											}
										>
											Invalid Password
										</span>
									</div>
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
						aria-label="Login with Form"
						disabled={
							!formik?.values?.email ||
							!formik?.values?.password ||
							reCaptchaResult === null ||
							reCaptchaResult === undefined
						}
						className="relative flex items-center justify-center w-full px-4 py-2 space-x-4 overflow-hidden text-white transition duration-200 bg-top bg-no-repeat bg-cover rounded-md border-darkBlue group focus:ring-2 focus:ring-offset-1 hover:text-white hover:border-white focus:ring-white"
						style={{
							backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue.svg")`,
						}}
					>
						<div
							className="absolute top-0 w-full h-full transition duration-200 transform bg-center bg-no-repeat bg-cover bg-darkBlue right-full group-hover:translate-x-full group-hover:scale-102"
							style={{
								backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-pink-red-yellow.svg")`,
							}}
						/>
						<span className="relative text-base">Sign in</span>
					</motion.button>
				</Form>
			</Formik>
		</>
	);
};

export default LoginForm;
