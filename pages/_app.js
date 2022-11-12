import "../styles/globals.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({Component, pageProps}) {
	// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	} else {
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
}

export default MyApp;
