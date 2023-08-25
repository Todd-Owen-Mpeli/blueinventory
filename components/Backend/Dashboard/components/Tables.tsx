// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn, initial, stagger, initialTwo} from "@/animations/animations";

// Components;
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const Tables: FC = () => {
	const initialNumber: number = 1;
	const maxCount: number = 20;
	const totalResults: number = 157;

	const collection: {
		Value: number;
		ItemName: string;
		Quantity: number;
		Description: string;
		Category: string;
		Image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				height: number;
				width: number;
			};
		};
	}[] = [
		{
			ItemName: "Cozy Sofa",
			Quantity: 1,
			Description:
				"A plush sofa upholstered in soft fabric, perfect for lounging and relaxation.",
			Value: 800,
			Category: "Living Room Furniture",
			Image: {
				altText: "",
				sourceUrl:
					"https://cmsblueinventory.com/wp-content/uploads/2023/04/pexels-linkedin-sales-navigator-2182970-scaled.jpg",
				mediaDetails: {
					height: 500,
					width: 500,
				},
			},
		},
		{
			ItemName: "Sleek Dining Table",
			Quantity: 1,
			Description:
				"A modern dining table with a glass top and metal legs, suitable for both casual meals and formal gatherings.",
			Value: 450,
			Category: "Dining Room Furniture",
			Image: {
				altText: "",
				sourceUrl:
					"https://cmsblueinventory.com/wp-content/uploads/2023/04/pexels-linkedin-sales-navigator-2182970-scaled.jpg",
				mediaDetails: {
					height: 500,
					width: 500,
				},
			},
		},
		{
			ItemName: "Comfy Bed",
			Quantity: 1,
			Description:
				"A queen-sized bed with a memory foam mattress for a restful night's sleep.",
			Value: 700,
			Category: "Bedroom Furniture",
			Image: {
				altText: "",
				sourceUrl:
					"https://cmsblueinventory.com/wp-content/uploads/2023/04/pexels-linkedin-sales-navigator-2182970-scaled.jpg",
				mediaDetails: {
					height: 500,
					width: 500,
				},
			},
		},
		{
			ItemName: "Bookworm Bookshelf",
			Quantity: 2,
			Description:
				"A tall bookshelf with adjustable shelves, perfect for storing and displaying your favorite reads.",
			Value: 150,
			Category: "Study Room Furniture",
			Image: {
				altText: "",
				sourceUrl:
					"https://cmsblueinventory.com/wp-content/uploads/2023/04/pexels-linkedin-sales-navigator-2182970-scaled.jpg",
				mediaDetails: {
					height: 500,
					width: 500,
				},
			},
		},
		{
			ItemName: "Compact Writing Desk",
			Quantity: 1,
			Description:
				"A small writing desk with drawers, ideal for a cozy corner where you can work or study.",
			Value: 250,
			Category: "Home Office Furniture",
			Image: {
				altText: "",
				sourceUrl:
					"https://cmsblueinventory.com/wp-content/uploads/2023/02/pexels-polina-zimmerman-3747446-min-scaled.jpg",
				mediaDetails: {
					height: 500,
					width: 500,
				},
			},
		},
		{
			ItemName: "Vintage Dresser",
			Quantity: 1,
			Description:
				"An antique dresser with intricate woodwork and multiple drawers for organizing your belongings.",
			Value: 550,
			Category: "Bedroom Furniture",
			Image: {
				altText: "",
				sourceUrl:
					"https://cmsblueinventory.com/wp-content/uploads/2023/05/6Y8A4504-scaled.jpg",
				mediaDetails: {
					height: 500,
					width: 500,
				},
			},
		},
		{
			ItemName: "Rustic Coffee Table",
			Quantity: 1,
			Description:
				"A wooden coffee table with a distressed finish, adding a touch of rustic charm to your living space.",
			Value: 300,
			Category: "Living Room Furniture",
			Image: {
				altText: "",
				sourceUrl:
					"https://cmsblueinventory.com/wp-content/uploads/2023/05/pexels-shazard-r-14197704-min-scaled-e1683834127519.jpg",
				mediaDetails: {
					height: 500,
					width: 500,
				},
			},
		},
		{
			ItemName: "Stylish Bar Stools",
			Quantity: 4,
			Description:
				"Modern bar stools with cushioned seats and adjustable height, perfect for your kitchen counter or bar area.",
			Value: 120,
			Category: "Kitchen Furniture",
			Image: {
				altText: "",
				sourceUrl:
					"https://cmsblueinventory.com/wp-content/uploads/2023/04/pexels-edmond-dantes-4347368-min-scaled.jpg",
				mediaDetails: {
					height: 500,
					width: 500,
				},
			},
		},
		{
			ItemName: "Multi-Functional Futon",
			Quantity: 1,
			Description:
				"A futon that can be transformed into a sofa, lounger, or bed, making it versatile for various needs.",
			Value: 350,
			Category: "Living Room Furniture",
			Image: {
				altText: "Multi-Functional Futon",
				sourceUrl:
					"https://cmsblueinventory.com/wp-content/uploads/2023/05/pexels-kampus-production-8353841-scaled-e1683833484486.jpg",
				mediaDetails: {
					height: 500,
					width: 500,
				},
			},
		},
		{
			ItemName: "Contemporary TV Stand",
			Quantity: 1,
			Description:
				"A sleek TV stand with shelves and cabinets for media storage, designed to complement modern electronics.",
			Value: 280,
			Category: "Entertainment Room Furniture",
			Image: {
				altText: "Contemporary TV Stand",
				sourceUrl:
					"https://cmsblueinventory.com/wp-content/uploads/2023/04/pexels-rodnae-productions-9064378-scaled.jpg",
				mediaDetails: {
					height: 500,
					width: 500,
				},
			},
		},
	];

	return (
		<>
			<section className="w-full h-full p-6 overflow-hidden bg-white rounded-2xl">
				<motion.h3
					initial={initialTwo}
					viewport={{once: true}}
					whileInView={fadeIn}
					className="pb-8 text-lg font-semibold text-darkBlue"
				>
					Transaction History
				</motion.h3>
				<div className="w-full mb-5 overflow-x-auto">
					<table className="w-full min-w-max">
						<thead>
							<tr className="text-left text-black">
								<th className="pb-5 border-b border-black">
									<div className="inline-flex items-center">
										<span className="mr-1.5 text-base font-semibold capitalize">
											Id
										</span>
									</div>
								</th>
								<th className="pb-5 border-b border-black">
									<div className="inline-flex items-center">
										<span className="mr-1.5 text-base font-semibold capitalize">
											Name
										</span>
									</div>
								</th>
								<th className="pb-5 border-b border-black">
									<div className="inline-flex items-center">
										<span className="mr-1.5 text-base font-semibold capitalize">
											Description
										</span>
									</div>
								</th>
								<th className="pb-5 border-b border-black">
									<div className="inline-flex items-center">
										<span className="mr-1.5 text-base font-semibold capitalize">
											Quantity
										</span>
									</div>
								</th>
								<th className="pb-5 border-b border-black">
									<div className="inline-flex items-center">
										<span className="mr-1.5 text-base font-semibold capitalize">
											Category
										</span>
									</div>
								</th>
								<th className="pb-5 border-b border-black">
									<div className="inline-flex items-center">
										<span className="mr-1.5 text-base font-semibold capitalize">
											Value
										</span>
									</div>
								</th>
								<th className="pb-5 border-b border-black">
									<span className="mr-1.5 text-base font-semibold capitalize">
										Edit
									</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{collection?.length > 0 ? (
								collection.map((item, keys) => (
									<tr key={keys}>
										<td className="pt-6 py-2.5 pr-4">
											<span className="font-semibold">{keys}</span>
										</td>
										<td className="py-2.5 pr-4">
											<div className="flex flex-wrap items-center">
												<Image
													className="object-cover object-center mr-3 rounded-full w-9 h-9"
													src={item.Image.sourceUrl}
													alt={item.Image.altText}
													width={item.Image.mediaDetails.width}
													height={item.Image.mediaDetails.height}
												/>
												<span className="font-semibold">{item.ItemName}</span>
											</div>
										</td>
										<td className="py-2.5 pr-4 max-w-xs">
											<div className="font-normal">{item.Description}</div>
										</td>
										<td className="py-2.5 pr-4">
											<div className="font-semibold">{item.Quantity}</div>
										</td>
										<td className="py-2.5 pr-4 max-w-xs">
											<div className="font-semibold text-black">
												{item.Category}
											</div>
										</td>
										<td className="py-2.5 pr-4">
											<div className="px-2.5 py-1 text-sm font-normal text-white bg-darkBlue w-fit rounded-full">
												£{item.Value}
											</div>
										</td>
										<td className="py-2.5">
											<Link className="inline-flex py-2.5 pr-0" href={``}>
												<span className="w-1 h-1 bg-black rounded-full"></span>
												<span className="mx-0.5 w-1 h-1 bg-black rounded-full"></span>
												<span className="w-1 h-1 bg-black rounded-full"></span>
											</Link>
										</td>
									</tr>
								))
							) : (
								<></>
							)}
						</tbody>
					</table>
				</div>
				<div className="flex flex-wrap items-center justify-between -m-2">
					<div className="w-auto p-2">
						<div className="flex flex-wrap -m-0.5">
							<div className="w-auto p-0.5">
								<Link
									className="flex items-center justify-center border rounded-sm w-9 h-9 hover:border-darkGrey"
									href={``}
								>
									<svg
										width="7"
										height="12"
										viewBox="0 0 7 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6 10.6666L1.33333 5.99998L6 1.33331"
											stroke="#71717A"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</Link>
							</div>
							<div className="w-auto p-0.5">
								<Link
									className="flex items-center justify-center border rounded-sm w-9 h-9 hover:border-darkGrey"
									href={``}
								>
									<span className="text-sm font-semibold">1</span>
								</Link>
							</div>
							<div className="w-auto p-0.5">
								<Link
									className="flex items-center justify-center border rounded-sm w-9 h-9 border-darkGrey"
									href={``}
								>
									<span className="text-sm font-semibold">2</span>
								</Link>
							</div>
							<div className="w-auto p-0.5">
								<Link
									className="flex items-center justify-center border rounded-sm w-9 h-9 hover:border-darkGrey"
									href={``}
								>
									<span className="text-sm font-semibold">3</span>
								</Link>
							</div>
							<div className="w-auto p-0.5">
								<Link
									className="flex items-center justify-center border rounded-sm w-9 h-9 hover:border-darkGrey"
									href={``}
								>
									<span className="text-sm font-semibold">4</span>
								</Link>
							</div>
							<div className="w-auto p-0.5">
								<Link
									className="flex items-center justify-center border rounded-sm w-9 h-9 hover:border-darkGrey"
									href={``}
								>
									<svg
										width="7"
										height="12"
										viewBox="0 0 7 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 1.33335L5.66667 6.00002L1 10.6667"
											stroke="#71717A"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</Link>
							</div>
							<div className="w-auto p-0.5">
								<Link
									className="flex items-center justify-center border rounded-sm w-9 h-9 hover:border-darkGrey"
									href={``}
								>
									<svg
										width="7"
										height="12"
										viewBox="0 0 7 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 1.33335L5.66667 6.00002L1 10.6667"
											stroke="#71717A"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<svg
										width="7"
										height="12"
										viewBox="0 0 7 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 1.33335L5.66667 6.00002L1 10.6667"
											stroke="#71717A"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-auto p-2">
						<Paragraph
							content={`Showing ${initialNumber} of ${maxCount} out of ${totalResults} results`}
							tailwindStyling="text-sm text-black"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Tables;
