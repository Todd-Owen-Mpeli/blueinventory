/* eslint-disable @next/next/no-img-element */
const TextImage = (props) => {
	/* Calculates How many iterations and sets the 
    Icons Background Color a different color per iteration */
	let iconsBackgroundColor;

	switch (props?.iterationCount) {
		case 0:
			iconsBackgroundColor = "flatPinkRed";
			break;
		case 1:
			iconsBackgroundColor = "lightBlue";
			break;
		case 2:
			iconsBackgroundColor = "limeGreen";
			break;
		case 3:
			iconsBackgroundColor = "orange";
			break;
	}

	const iconStyling = `mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center bg-${iconsBackgroundColor} rounded-full text-white text-2xl`;

	/* Displays left or Right Image depending on 
    what the user selected in the dashboard */
	let rightImageDisplay;
	let leftImageDisplay;

	if (props.displayImageLocation === "Right") {
		leftImageDisplay = "none;";
		rightImageDisplay = "block;";
	} else if (props.displayImageLocation === "Left") {
		leftImageDisplay = "block;";
		rightImageDisplay = "none;";
	}

	return (
		<div>
			<div className="flex flex-col md:flex-row justify-between items-center gap-20">
				<div className="w-full lg:w-1/2" style={{display: leftImageDisplay}}>
					<img
						src={props?.image?.sourceUrl}
						className="w-full h-full object-cover rounded-[15px]"
						alt="Image One"
						width="100"
						height="100"
						layout="responsive"
					/>
				</div>
				<div className="w-full lg:w-1/2 mb-5 lg:mb-0">
					<span className={iconStyling}>
						<img
							src={props?.icon?.sourceUrl}
							className="object-contain"
							alt=""
							width="75px"
							height="75px"
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
				<div className="w-full lg:w-1/2" style={{display: rightImageDisplay}}>
					<img
						src={props?.image?.sourceUrl}
						className="w-full h-full object-cover rounded-[15px]"
						alt="Image One"
						width="100"
						height="100"
						layout="responsive"
					/>
				</div>
			</div>
		</div>
	);
};

export default TextImage;
