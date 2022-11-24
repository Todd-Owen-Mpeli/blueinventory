/* eslint-disable @next/next/no-img-element */
const ThreeContentGridCard = (props) => {
	return (
		<div className="w-full md:w-1/2 lg:w-1/3 p-8">
			<span className="mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center  rounded-full text-2xl">
				<img
					src={props?.icon?.sourceUrl}
					className="object-contain"
					alt=""
					width="150px"
					height="150px"
				/>
			</span>
			<h5 className="mb-4 text-base uppercase font-bold text-center lg:text-left font-heading text-lightBlue">
				{props?.subtitle}
			</h5>
			<h3 className="mb-4 text-3xl font-bold font-heading text-center lg:text-left text-black">
				{props?.title}
			</h3>
			<p className="text-black text-base text-center lg:text-left leading-relaxed">
				{props?.paragraph}
			</p>
		</div>
	);
};

export default ThreeContentGridCard;
