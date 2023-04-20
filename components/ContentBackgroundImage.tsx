import {FC} from "react";
import ContentImageCard from "./Cards/ContentImageCard";

interface IProps {
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				paragraph: string;
				contentLocation: string;
				backgroundImage: {
					sourceUrl: string;
				};
			};
		}
	];
}

const ContentBackgroundImage: FC<IProps> = ({gridContent}) => {
	return (
		<section className="px-4 py-10 overflow-hidden bg-white">
			<div className="container flex flex-col gap-4 px-0 mx-auto">
				{gridContent?.map((keys) => (
					<ContentImageCard
						title={keys?.card?.title}
						paragraph={keys?.card?.paragraph}
						contentLocation={keys?.card?.contentLocation}
						key={keys?.card?.id || keys?.card?.title}
						backgroundImage={keys?.card?.backgroundImage?.sourceUrl}
					/>
				))}
			</div>
		</section>
	);
};

export default ContentBackgroundImage;
