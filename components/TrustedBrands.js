import Image from "next/image";

const TrustedBrands = (props) => {
	return (
		<section className="p-4 md:pt-36 md:pb-28 bg-white overflow-hidden">
			<div className="container px-4 mx-auto">
				<h2 className="mb-6 text-4xl md:text-6xl text-center font-bold font-heading tracking-px-n leading-none md:max-w-2xl mx-auto">
					{props.title.title}
				</h2>
				<p className="text-black text-center text-base leading-normal md:max-w-lg mx-auto">
					{props.title.subtitle}
				</p>
				<div className="flex flex-wrap justify-center mt-16 -mx-4">
					<div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0 text-center">
						<Image
							src={props.data.imageOne}
							className="mx-auto object-contain"
							alt=""
							width="150px"
							height="150px"
						/>
					</div>
					<div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0 text-center">
						<Image
							src={props.data.imageTwo}
							className="mx-auto object-contain"
							alt=""
							width="150px"
							height="150px"
						/>
					</div>
					<div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0 text-center">
						<Image
							src={props.data.imageThree}
							className="mx-auto object-contain"
							alt=""
							width="150px"
							height="150px"
						/>
					</div>
					<div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0 text-center">
						<Image
							src={props.data.imageFour}
							className="mx-auto object-contain"
							alt=""
							width="150px"
							height="150px"
						/>
					</div>
					<div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 text-center">
						<Image
							src={props.data.imageFive}
							className="mx-auto object-contain"
							alt=""
							width="150px"
							height="150px"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrustedBrands;
