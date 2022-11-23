import "../styles/globals.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {ApolloProvider} from "@apollo/client/react";
import {client} from "../lib/apollo";

function MyApp({Component, pageProps}) {
	// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	} else {
		return (
			<ApolloProvider client={client}>
				{/* <!--===== NAVIGATION =====--> */}
				<Navbar />

				<Component {...pageProps} />

				{/* <!--===== FOOTER =====--> */}
				<Footer />
			</ApolloProvider>
		);
	}
}

export default MyApp;
