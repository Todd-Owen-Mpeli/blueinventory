import Link from "next/link";
import Image from "next/image";

const TrustedBrands = () => {
	return (
		<section className="pt-36 pb-28 bg-white overflow-hidden">
			<div className="container px-4 mx-auto">
				<h2 className="mb-6 text-4xl md:text-6xl text-center font-bold font-heading tracking-px-n leading-none md:max-w-2xl mx-auto">
					Trusted by brands
				</h2>
				<p className="text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">
					Making the process so simple providing unique features, solutions and
					an effective inventory management application.
				</p>
				<div className="flex flex-wrap justify-center mt-16 -mx-4">
					<div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0 text-center">
						<Image
							className="mx-auto"
							src="/svg/Trusted Brands/jiggle-logo.svg"
							alt=""
							width="150px"
							height="150px"
						/>
					</div>
					<div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0 text-center">
						<Image
							className="mx-auto"
							src="/svg/Trusted Brands/symtric-logo.svg"
							alt=""
							width="150px"
							height="150px"
						/>
					</div>
					<div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0 text-center">
						<Image
							className="mx-auto"
							src="/svg/Trusted Brands/wishelp-logo.svg"
							alt=""
							width="150px"
							height="150px"
						/>
					</div>
					<div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0 text-center">
						<Image
							className="mx-auto"
							src="/svg/Trusted Brands/resecurb-logo.svg"
							alt=""
							width="150px"
							height="150px"
						/>
					</div>
					<div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 text-center">
						<Image
							className="mx-auto"
							src="/svg/Trusted Brands/welytics-logo.svg"
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
