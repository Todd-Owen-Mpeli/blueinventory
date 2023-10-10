export type ICard = {
	text: string;
	paragraph: string;
	value: number | undefined;
	backgroundImageOption: string;
	displayBackgroundImage: boolean;
};

export type ILatestItemsCard = {
	value: number;
	category: string;
	itemName: string;
	sourceUrl: string;
};
