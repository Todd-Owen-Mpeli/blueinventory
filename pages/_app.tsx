import "../styles/globals.scss";
import {client} from "../lib/apollo";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {ApolloProvider} from "@apollo/client/react";

function MyApp({Component, pageProps}) {
	function Loading() {
		const router: any = useRouter();

		const [loading, setLoading]: any = useState(false);

		useEffect(() => {
			const handleStart = (url) => url !== router.asPath && setLoading(true);
			const handleComplete = (url) =>
				url === router.asPath &&
				setTimeout(() => {
					setLoading(false);
				}, 20000);

			router.events.on("routeChangeStart", handleStart);
			router.events.on("routeChangeComplete", handleComplete);
			router.events.on("routeChangeError", handleComplete);

			return () => {
				router.events.off("routeChangeStart", handleStart);
				router.events.off("routeChangeComplete", handleComplete);
				router.events.off("routeChangeError", handleComplete);
			};
		});

		return (
			loading && (
				<div className="spinner-wrapper">
					{/* LEGO SPINNER */}
					<div className="loader">
						<div className="box box0">
							<div></div>
						</div>
						<div className="box box1">
							<div></div>
						</div>
						<div className="box box2">
							<div></div>
						</div>
						<div className="box box3">
							<div></div>
						</div>
						<div className="box box4">
							<div></div>
						</div>
						<div className="box box5">
							<div></div>
						</div>
						<div className="box box6">
							<div></div>
						</div>
						<div className="box box7">
							<div></div>
						</div>
						<div className="ground">
							<div></div>
						</div>
					</div>
				</div>
			)
		);
	}

	// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
	if (Component.getLayout) {
		return Component.getLayout(
			<ApolloProvider client={client}>
				<Loading />
				<Component {...pageProps} />
			</ApolloProvider>
		);
	}
	return (
		<ApolloProvider client={client}>
			<Loading />
			{/* <!--===== NAVIGATION =====--> */}
			{/* <Navbar /> */}
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
