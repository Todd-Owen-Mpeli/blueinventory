import "../styles/globals.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({Component, pageProps}) {
	return (
		<>
			{/* <!--===== NAVIGATION =====--> */}
			<Navbar />

			<Component {...pageProps} />

			{/* <!--===== FOOTER =====--> */}
			<Footer />
		</>
	);
}

export default MyApp;
