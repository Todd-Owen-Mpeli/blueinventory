/* eslint-disable @next/next/no-img-element */
const LogoImage = (props) => {
	return (
		<div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0 text-center">
			<img
				src={props.image?.sourceUrl}
				className="mx-auto object-contain"
				alt=""
				width="150px"
				height="150px"
			/>
		</div>
	);
};

export default LogoImage;
