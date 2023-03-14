import Image from "next/image";
import {FunctionComponent} from "react";

interface IProps {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
}

const LogoImage: FunctionComponent<IProps> = ({image}) => {
	return (
		<div className="w-full mx-auto md:w-1/2 lg:w-1/6 lg:mx-0">
			<Image
				src={`${image?.sourceUrl}`}
				alt={`${image?.altText} image`}
				width={image?.mediaDetails?.width}
				height={image?.mediaDetails?.height}
				className="w-full h-[75px] sm:h-[200px] object-contain object center"
			/>
		</div>
	);
};

export default LogoImage;
