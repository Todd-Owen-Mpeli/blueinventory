// Imports
import {IMenuLinks} from "@/types/Dashboard/content/menuLinks";

export const dashboardMainMenuLinks: IMenuLinks[] = [
	{
		id: 1,
		name: "Documents",
		path: "/documents",
		icon: {
			alt: " ",
			src: "../svg/dashboard/icons/file-manager.svg",
			width: 500,
			height: 500,
		},
	},
	{
		id: 2,
		name: "Items",
		path: "/items",
		icon: {
			alt: " ",
			src: "../svg/dashboard/icons/data-list.svg",
			width: 500,
			height: 500,
		},
	},
	{
		id: 3,
		name: "Categories",
		path: "/categories",
		icon: {
			alt: " ",
			src: "../svg/dashboard/icons/documents.svg",
			width: 500,
			height: 500,
		},
	},
];
