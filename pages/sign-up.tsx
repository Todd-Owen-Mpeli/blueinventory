import {SignUp} from "@clerk/nextjs";

const SignUpPage = () => (
	<SignUp path="/sign-up" routing="path" signInUrl="/sign-in" redirectUrl="/" />
);

export default SignUpPage;
