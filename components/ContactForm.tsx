// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {motion} from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import React, {useState, FC, useEffect} from "react";
import {useFormik, Formik, Field, Form} from "formik";
import {sendContactForm} from "@/pages/api/contactForm";
import {IContactForm, ILoadingState} from "@/components/types";

// Styling
import styles from "@/styles/components/ContactForm.module.scss";

// Components
import Spinner from "@/components/Elements/Spinner";

const ContactForm: FC<IContactForm> = ({title, backgroundImage}) => {
	const initState: ILoadingState = {
		error: false,
		isLoading: false,
	};
	const [state, setState]: any = useState(initState);
	const {error, isLoading}: ILoadingState = state;

	useEffect(() => {
		if (isLoading === false) {
			!isLoading;
		}
	}, [isLoading]);

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {};

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
			subject: "",
			message: "",
		},
		validate,
		onSubmit: async (values: any) => {
			setState((prev: any) => ({
				...prev,
				error: false,
				isLoading: true,
			}));

			if (reCaptchaResult !== null || reCaptchaResult !== undefined) {
				try {
					await sendContactForm(values);
					setState(initState);
				} catch (error) {
					setState((prev: any) => ({
						...prev,
						error: true,
						isLoading: false,
					}));
					console.log(error);
					throw new Error(
						"* Something went wrong sending your request. Please refresh the page and try again."
					);
				}
			} else {
				console.log(
					"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
				);
			}
		},
	});

	return (
		<section
			id="contactForm"
			className="px-4 py-20 mx-auto overflow-hidden bg-center bg-no-repeat bg-cover bg-darkBlue"
			style={{
				backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue.svg")`,
			}}
		>
			<div className="container flex flex-col-reverse items-center justify-center mx-auto bg-white gap-y-20 lg:gap-4 lg:flex-row">
				<div
					className="w-full h-full min-h-[250px] sm:min-h-[450px] lg:min-h-[800px] lg:w-1/2 bg-center bg-no-repeat bg-cover"
					style={{
						backgroundImage: `url("${backgroundImage}")`,
					}}
				/>
				<div className="w-full px-8 py-8 bg-white lg:w-1/2 lg:px-12">
					<Formik
						onSubmit={formik?.onSubmit}
						initialValues={formik?.initialValues}
					>
						<Form className="container mx-auto transition-all ease-in-out duration-[0.5s] md:max-w-xl shadow-12xl">
							{isLoading ? (
								<>
									<motion.h3
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="mx-auto mb-16 text-xl font-semibold text-center uppercase text-darkBlue sm:text-2xl"
									>
										Sending Message
									</motion.h3>
									<Spinner />
								</>
							) : error ? (
								<motion.h3
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="mx-auto mb-16 text-base font-semibold text-center text-pinkRed sm:text-medium"
								>
									* Something went wrong sending your request. Please refresh
									the page and try again.
								</motion.h3>
							) : (
								<motion.h3
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="mx-auto mb-16 text-xl font-semibold text-center uppercase sm:text-2xl"
								>
									{title}
								</motion.h3>
							)}
							<motion.div
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="flex flex-col gap-4"
							>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
								>
									{formik?.touched?.firstName && formik?.errors?.firstName ? (
										<div>
											<p className="py-1 text-left text-tiny text-darkBlue font-[400]">
												{formik?.errors?.firstName}
											</p>
										</div>
									) : null}
									<Field
										id="firstName"
										name="firstName"
										placeholder="First Name"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.firstName}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-darkBlue focus:border-darkBlue focus:ring-[1px] focus:ring-darkBlue"
									/>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
								>
									{formik?.touched?.lastName && formik?.errors?.lastName ? (
										<div>
											<p className="py-1 text-left text-tiny text-darkBlue font-[400]">
												{formik?.errors?.lastName}
											</p>
										</div>
									) : null}
									<Field
										id="lastName"
										name="lastName"
										placeholder="Last Name"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.lastName}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-darkBlue focus:border-darkBlue focus:ring-[1px] focus:ring-darkBlue"
									/>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
								>
									{formik?.errors?.email ? (
										<div>
											<p className="py-1 text-left text-tiny text-darkBlue font-[400]">
												{formik?.errors?.email}
											</p>
										</div>
									) : null}
									<Field
										id="email"
										name="email"
										type="email"
										placeholder="Email Address"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.email}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-darkBlue focus:border-darkBlue focus:ring-[1px] focus:ring-darkBlue"
									/>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
								>
									{formik?.touched?.subject && formik?.errors?.subject ? (
										<div>
											<p className="py-1 text-left text-tiny text-darkBlue font-[400]">
												{formik?.errors?.subject}
											</p>
										</div>
									) : null}
									<Field
										id="subject"
										name="subject"
										type="text"
										placeholder="Subject"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.subject}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-darkBlue focus:border-darkBlue focus:ring-[1px] focus:ring-darkBlue"
									/>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
								>
									{formik?.touched?.message && formik?.errors?.message ? (
										<div>
											<p className="py-1 text-left text-tiny text-darkBlue font-[400]">
												{formik?.errors?.message}
											</p>
										</div>
									) : null}
									<textarea
										rows={5}
										id="message"
										name="message"
										placeholder="Your message"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.message}
										className="p-4 w-full h-48 font-[400] text-darkGrey placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-darkBlue focus:border-darkBlue resize-none focus:ring-[1px] focus:ring-darkBlue"
									/>
								</motion.div>
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
									onClick={formik.handleSubmit}
									disabled={
										!formik?.values?.firstName ||
										!formik?.values?.lastName ||
										!formik?.values?.email ||
										!formik?.values?.subject ||
										!formik?.values?.message ||
										reCaptchaResult === null ||
										reCaptchaResult === undefined
									}
									className="w-full text-white disabled:bg-opacity-20 disabled:cursor-not-allowed"
									type="submit"
								>
									<span
										className={
											isLoading
												? `${styles.sendingMessage}`
												: `${styles.submitButton}`
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
													stroke="none"
													strokeWidth="1"
													fill="none"
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
										{isLoading ? (
											<>
												<h3 className="text-white uppercase text-medium">
													Sending
												</h3>
												<Spinner />
											</>
										) : (
											<h3 className="text-white uppercase text-medium">
												Send Message
											</h3>
										)}
									</span>
								</motion.button>
							</motion.div>
						</Form>
					</Formik>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
