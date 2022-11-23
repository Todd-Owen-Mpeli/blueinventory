import LogoImage from "./logoImage";

const TrustedBrands = (props) => {
	return (
		<section className="p-4 md:pt-36 md:pb-28 bg-white overflow-hidden">
			<div className="container px-4 mx-auto">
				<h2 className="mb-6 text-4xl md:text-6xl text-center font-bold font-heading tracking-px-n leading-none md:max-w-2xl mx-auto">
					{props.title}
				</h2>
				<p className="text-black text-center text-base leading-normal md:max-w-lg mx-auto">
					{props.paragraph}
				</p>
				<div className="flex flex-wrap justify-center mt-16 -mx-4">
					{props.logos.map((keys) => (
						<LogoImage key={keys.id} image={keys.image} />
					))}
				</div>
			</div>
		</section>
	);
};

export default TrustedBrands;
