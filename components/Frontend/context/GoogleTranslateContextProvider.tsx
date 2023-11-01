import {FC, useEffect} from "react";
import {useRouter} from "next/router";
import {IGoogleTranslateContextProvider} from "@/types/context/public";

// Declare the 'google' object in the global scope
declare global {
	interface Window {
		google: any;
		googleTranslateElementInit: any;
	}
}

const GoogleTranslateContextProvider: FC<IGoogleTranslateContextProvider> = ({
	children,
}) => {
	//
	const {isFallback, events} = useRouter();

	const googleTranslateElementInit = () => {
		if (window.google) {
			new (window as any).google.translate.TranslateElement(
				{pageLanguage: "en"},
				"google_translate_element"
			);
		}
	};

	useEffect(() => {
		const id: string = "google-translate-script";

		// Add Google Translate Script
		const addScript = () => {
			const script: HTMLScriptElement = document.createElement("script");
			script.setAttribute(
				"src",
				"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
			);
			script.setAttribute("id", id);
			const scriptElement: HTMLElement | null = document.getElementById(id);
			if (!scriptElement) {
				document.body.appendChild(script);
				window.googleTranslateElementInit = googleTranslateElementInit;
			}
		};

		// Removed Google Translate Script
		const removeScript = () => {
			const scriptElement: HTMLElement | null = document.getElementById(id);
			if (scriptElement) scriptElement.remove();
			const windowElement = document.getElementById("google_translate_element");
			if (windowElement) {
				windowElement.innerHTML = "";
			}
		};

		isFallback || addScript();

		events.on("routeChangeStart", removeScript);
		events.on("routeChangeComplete", addScript);

		return () => {
			events.off("routeChangeStart", removeScript);
			events.off("routeChangeComplete", addScript);
		};
	}, []);

	return <>{children}</>;
};

export default GoogleTranslateContextProvider;
