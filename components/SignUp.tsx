// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	OAuthProvider,
} from "firebase/auth";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

interface IProps {
	title: string;
	paragraph: string;
}

const SignUp: FC<IProps> = ({title, paragraph}) => {
	const auth = getAuth();
	const providerGoogle = new GoogleAuthProvider();
	const providerApple = new OAuthProvider("apple.com");

	// Sign Up with Google
	const handleSignUpWithGoogle = async () => {
		signInWithPopup(auth, providerGoogle)
			.then((result) => {
				// The signed-in user info.
				const user = result.user;

				/* Collect Users inserted google Details 
				and send it ot the Database */
				console.log(user);
				// IdP data available using getAdditionalUserInfo(result)
				// ...
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// Sign Up with Apple
	const handleSignUpWithApple = async () => {
		signInWithPopup(auth, providerApple)
			.then((result) => {
				// The signed-up user info.
				const user = result.user;

				/* Collect Users inserted google Details 
				and send it ot the Database */
				console.log(user);
				// IdP data available using getAdditionalUserInfo(result)
				// ...
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<section className="container relative px-0 mx-auto">
			<motion.div
				variants={stagger}
				className="max-w-md px-10 mx-auto bg-white py-14 rounded-xl"
			>
				<motion.div variants={stagger}>
					<motion.h3
						variants={fadeInUp}
						className="mb-4 text-lg font-semibold text-darkBlue"
					>
						{title}
					</motion.h3>
					<Paragraph
						content={paragraph}
						tailwindStyling="mb-4 text-base text-black"
					/>
				</motion.div>
				<motion.div
					variants={stagger}
					className="flex items-center gap-4 my-6 -mx-2"
				>
					<motion.button variants={fadeInUp} onClick={handleSignUpWithGoogle}>
						<span className="flex items-center justify-center w-12 h-12">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="96px"
								height="96px"
								className="relative fill-current w-7 h-7"
							>
								<path
									fill="#FFC107"
									d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
								/>
								<path
									fill="#FF3D00"
									d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
								/>
								<path
									fill="#4CAF50"
									d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
								/>
								<path
									fill="#1976D2"
									d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
								/>
							</svg>
						</span>
					</motion.button>
					<motion.button variants={fadeInUp}>
						<Link
							className="flex items-center justify-center w-12 h-12"
							href={`/pricing/#Pricing`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="96px"
								height="96px"
								className="relative w-8 h-8 fill-current"
							>
								<path
									fill="#2563eb"
									d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
								/>
								<path
									fill="#fff"
									d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
								/>
							</svg>
						</Link>
					</motion.button>
					<motion.button variants={fadeInUp} onClick={handleSignUpWithApple}>
						<span className="flex items-center justify-center w-12 h-12">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 72 72"
								width="128px"
								height="128px"
								fill="#000"
								className="relative mt-1 fill-current w-9 h-9"
							>
								<path
									d="M46.955 1.353c.246 3.559-.915 6.425-2.628 8.527-2.519 3.092-6.232 4.533-8.422 4.105-.412-2.47.61-5.623 2.686-8.164C40.549 3.428 43.441 1.578 46.955 1.353zM36.378 17.159c2.498 0 5.203-2.532 9.658-2.532 2.007 0 7.762.607 10.934 5.486-1.26.913-5.917 3.843-5.917 10.514 0 7.859 6.366 10.579 7.33 11.077-.348 1.299-2.026 5.802-4.856 9.329-.876 1.091-3.507 5.281-7.436 5.281-3.568 0-4.926-2.208-9.043-2.208-4.69 0-4.914 2.248-9.476 2.248-.958 0-2.363-.433-3.477-1.413-3.955-3.482-10.478-12.483-10.478-23.71 0-11.093 7.357-16.418 13.809-16.418C31.482 14.812 33.796 17.159 36.378 17.159z"
									fill="#000"
								/>
							</svg>
						</span>
					</motion.button>
				</motion.div>
				<motion.div variants={fadeInUp} className="flex items-center mb-6">
					<div className="w-full h-px bg-darkGrey" />
					<span className="mx-4 text-sm text-black">Or</span>
					<div className="w-full h-px bg-darkGrey" />
				</motion.div>
				<motion.div variants={fadeInUp}>
					<form
						action=""
						className="space-y-8 ng-untouched ng-pristine ng-valid"
					>
						<motion.div variants={stagger} className="space-y-4">
							<motion.div variants={fadeInUp} className="space-y-2">
								<label htmlFor="email" className="block text-sm text-darkBlue">
									First Name
								</label>
								<input
									type="text"
									name="firstName"
									id="firstName"
									placeholder="Leroy"
									className="w-full px-3 py-2 border-[1px] rounded-lg border-grey text-darkBlue focus:border-darkBlue"
								/>
							</motion.div>
							<motion.div variants={fadeInUp} className="space-y-2">
								<label htmlFor="email" className="block text-sm text-darkBlue">
									Last Name
								</label>
								<input
									type="text"
									name="lastName"
									id="lastName"
									placeholder="Jenkins"
									className="w-full px-3 py-2 border-[1px] rounded-lg border-grey text-darkBlue focus:border-darkBlue"
								/>
							</motion.div>
							<motion.div variants={fadeInUp} className="space-y-2">
								<label htmlFor="email" className="block text-sm text-darkBlue">
									Email address
								</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="leroyjenkins@gmail.com"
									className="w-full px-3 py-2 border-[1px] rounded-lg border-grey text-darkBlue focus:border-darkBlue"
								/>
							</motion.div>
							<motion.div variants={fadeInUp} className="space-y-2">
								<div className="flex justify-between">
									<label htmlFor="password" className="text-sm text-darkBlue">
										Password
									</label>
									<Link
										rel="noopener noreferrer"
										href="#"
										className="text-xs focus:underline text-darkBlue hover:text-blue hover:underline"
									>
										Forgot password?
									</Link>
								</div>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="*****"
									className="w-full px-3 py-2 border-[1px] rounded-lg border-grey text-darkBlue focus:border-darkBlue"
								/>
							</motion.div>
						</motion.div>
						<motion.button
							variants={fadeInUp}
							aria-label="Login with Facebook"
							role="button"
							type="button"
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
							<p className="relative">Sign up</p>
						</motion.button>
					</form>
				</motion.div>
				<motion.div variants={fadeInUp} className="mt-4">
					<p className="text-sm text-center dark:text-grey">
						Already have an account?
						<Link
							href={`/sign-in`}
							rel="noopener noreferrer"
							className="ml-1 focus:underline text-darkBlue hover:text-blue hover:underline"
						>
							Sign In here
						</Link>
					</p>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default SignUp;
