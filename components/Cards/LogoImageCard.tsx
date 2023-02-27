import Image from "next/image";
import {FunctionComponent} from "react";

interface IProps {
	image: {
		altText: string;
		sourceUrl: string;
	};
}

const LogoImage: FunctionComponent<IProps> = ({image}) => {
	return (
		<div className="w-full mx-auto md:w-1/2 lg:w-1/6 lg:mx-0">
			<Image
				width={550}
				height={550}
				src={`${image?.sourceUrl}`}
				alt={`${image?.altText} image`}
				className="w-full h-[75px] sm:h-[200px] object-contain object center"
			/>
		</div>
	);
};

export default LogoImage;
