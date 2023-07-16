"use client";

// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
} from "../animations/animations";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {Formik, useFormik} from "formik";
import {loginForm} from "@/functions/api";
import {getPreviewRedirectUrl} from "@/functions/redirects/redirects";

// Components
import ReCAPTCHA from "react-google-recaptcha";

// Styling
import styles from "@/styles/components/ContactForm.module.scss";

const Login: FC = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);
	const [loginSuccessful, setLoginSuccessful] = useState(false);

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};
		if (!values?.username) {
			errors.username = "Required*";
		} else if (values?.username.length >= 21) {
			errors.username = "Must be 20 characters or less";
		}

		if (!values.password) {
			errors.password = "Required*";
		} else if (values.password.length >= 31) {
			errors.password = "Must be 30 characters or less";
		}
		return errors;
	};

	/* Login Form Fields
	And Initial Values */
	const formik: any = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validate,
		onSubmit: async (values: any) => {
			await loginForm(values);
		},
	});

	// Form Submission
	const onFormSubmit = (event: any) => {
		event.preventDefault();
		if (
			reCaptchaResult
			// formik?.values?.username === process.env.WORDPRESS_CMS_USERNAME &&
			// formik?.values?.password === process.env.WORDPRESS_CMS_PASSWORD
		) {
			const {postType, previewPostId} = router?.query ?? {};

			try {
				console.log(
					`postType: ${postType}`,
					`previewPostId: ${previewPostId}`,
					`Username: ${formik?.values?.username}`,
					`Password: ${formik?.values?.password}`
				);
				setLoading(true);
				/* Send Login Form Content */
				formik.handleSubmit();
				setLoading(false);
				setLoginSuccessful(true);

				if (postType && previewPostId) {
					// Redirects User after logging in
					const previewUrl = getPreviewRedirectUrl(postType, previewPostId);
					router.push(previewUrl);
				} else {
					router.push(`/`);
				}
				setLoading(false);
			} catch (error) {
				setErrorMessage(true);
			}
		} else {
			throw new Error(
				"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
			);
		}
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

	return (
		<section className="flex flex-col items-center justify-center h-screen px-4">
			<div className="w-full p-16 m-auto bg-white rounded-lg lg:w-5/12">
				{loading ? (
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex items-center justify-center my-4 mb-8 gap-x-2"
					>
						<h4 className="text-xl font-semibold text-center uppercase text-blue">
							Logging In...
						</h4>
					</motion.div>
				) : loginSuccessful ? (
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex items-center justify-center my-4 mb-8 gap-x-2"
					>
						<h4 className="text-xl font-semibold text-center uppercase text-goldPrime">
							Log In Successful!
						</h4>
					</motion.div>
				) : errorMessage ? (
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex items-center justify-center my-4 mb-8 gap-x-2"
					>
						<h4 className="font-semibold text-center text-medium text-pinkRed">
							Error Message: Something went wrong. Please try again.
						</h4>
					</motion.div>
				) : (
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex items-center justify-center my-4 mb-8 gap-x-2"
					>
						<h4 className="mb-5 text-center">
							<strong className="text-xl font-[900] uppercase text-darkBlue">
								Login
							</strong>
						</h4>
					</motion.div>
				)}
				<Formik
					onSubmit={formik?.onSubmit}
					initialValues={formik?.initialValues}
				>
					<motion.form
						className="mb-4"
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						onSubmit={onFormSubmit}
					>
						<motion.label
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-4 text-sm leading-7 text-black"
						>
							{formik?.touched?.password && formik?.errors?.password ? (
								<div>
									<p className="py-1 text-left text-tiny text-darkBlue font-[400]">
										{formik?.errors?.password}
									</p>
								</div>
							) : (
								`Username:`
							)}
							<input
								type="text"
								id="username"
								name="username"
								placeholder="username"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.username}
								className="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-white border rounded outline-none text-grey border-darkRed focus:border-darkRed focus:ring-2 focus:ring-darkRed"
							/>
						</motion.label>
						<br />
						<motion.label
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-4 text-sm leading-7 text-black"
						>
							{formik?.touched?.password && formik?.errors?.password ? (
								<div>
									<p className="py-1 text-left text-tiny text-darkBlue font-[400]">
										{formik?.errors?.password}
									</p>
								</div>
							) : (
								`Password:`
							)}
							<input
								id="password"
								type="password"
								name="password"
								placeholder="password"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.password}
								className="w-full px-3 py-1 mb-8 text-base leading-8 transition-colors duration-200 ease-in-out bg-white border rounded outline-none text-grey border-darkRed focus:border-darkRed focus:ring-2 focus:ring-darkRed"
							/>
						</motion.label>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
						>
							<ReCAPTCHA
								sitekey={`6LeJJqwlAAAAAByEDQJTbNFkPL9DSjMBwnE7smkU`}
								onChange={handleReCaptchaChange}
							/>
						</motion.div>
						<motion.button
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							disabled={
								!formik?.values?.username ||
								!formik?.values?.password ||
								reCaptchaResult === null ||
								reCaptchaResult === undefined
							}
							className="w-full mt-4 text-white disabled:bg-opacity-20 disabled:cursor-not-allowed"
							type="submit"
						>
							<span
								className={
									loginSuccessful
										? `${styles.loginSuccessfulButton}`
										: errorMessage
										? `${styles.loginErrorButton}`
										: `${styles.loginSubmitButton}`
								}
							>
								<span className={styles.span}>
									<svg
										width="45px"
										height="15px"
										viewBox="0 0 66 43"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g
											id="arrow"
											fill="none"
											stroke="none"
											strokeWidth="1"
											fillRule="evenodd"
										>
											<path
												className={styles.one}
												d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
												fill="#FFFFFF"
											></path>
											<path
												className={styles.two}
												d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
												fill="#FFFFFF"
											></path>
											<path
												className={styles.three}
												d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
												fill="#FFFFFF"
											></path>
										</g>
									</svg>
								</span>
								<h3 className="text-base tracking-widest text-white uppercase sm:tracking-wider sm:text-medium">
									{loading
										? "Logging In..."
										: loginSuccessful
										? "Log In Successful!"
										: errorMessage
										? "Login Error!"
										: "Login"}
								</h3>
							</span>
						</motion.button>
					</motion.form>
				</Formik>
			</div>
		</section>
	);
};

export default Login;
