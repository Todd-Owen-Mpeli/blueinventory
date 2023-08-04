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
							<motion.tr
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="text-left"
							>
								<th className="pb-3.5 border-b border-black">
									<div className="inline-flex items-center text-sm font-medium uppercase text-darkGrey">
										<span className="mr-1.5 capitalize">Id</span>
									</div>
								</th>
								<th className="pb-3.5 border-b border-black">
									<div className="inline-flex items-center text-sm font-medium text-darkGrey">
										<span className="mr-1.5 capitalize">Name</span>
									</div>
								</th>
								<th className="pb-3.5 border-b border-black">
									<div className="inline-flex items-center text-sm font-medium text-darkGrey">
										<span className="mr-1.5 capitalize">Quantity</span>
									</div>
								</th>
								<th className="pb-3.5 border-b border-black">
									<div className="inline-flex items-center text-sm font-medium text-darkGrey">
										<span className="mr-1.5 capitalize">Description</span>
									</div>
								</th>
								<th className="pb-3.5 border-b border-black">
									<div className="inline-flex items-center text-sm font-medium text-darkGrey">
										<span className="mr-1.5 capitalize">Date Created</span>
									</div>
								</th>
								<th className="pb-3.5 border-b border-black">
									<span className="inline-flex items-center text-sm font-medium text-darkGrey">
										<span className="mr-1.5 capitalize">Status</span>
									</span>
								</th>
								<th className="pb-3.5 border-b border-black"></th>
							</motion.tr>
						</thead>
						<tbody>
							<tr>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">29506</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<div className="flex flex-wrap items-center">
										<Image
											className="object-cover object-center mr-3 rounded-full w-9 h-9"
											src="https://cmsblueinventory.com/wp-content/uploads/2023/04/pexels-linkedin-sales-navigator-2182970-scaled.jpg"
											alt=""
											width={500}
											height={500}
										/>
										<span className="font-semibold">Darrell Steward</span>
									</div>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">$17.84</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">
										Playstation 4 Limited Edition
									</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium text-black">
										15 May 2020 9:00 pm
									</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full">
										Confirmed
									</span>
								</td>
								<td className="py-2.5 border-b border-black">
									<Link className="inline-flex py-2.5 pr-0" href={``}>
										<span className="w-1 h-1 bg-black rounded-full"></span>
										<span className="mx-0.5 w-1 h-1 bg-black rounded-full"></span>
										<span className="w-1 h-1 bg-black rounded-full"></span>
									</Link>
								</td>
							</tr>
							<tr>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">29506</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<div className="flex flex-wrap items-center">
										<Image
											className="object-cover object-center mr-3 rounded-full w-9 h-9"
											src="https://cmsblueinventory.com/wp-content/uploads/2023/02/pexels-polina-zimmerman-3747446-min-scaled.jpg"
											alt=""
											width={500}
											height={500}
										/>
										<span className="font-semibold">Bessie Cooper</span>
									</div>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">$17.84</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">Gopro Hero 7</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium text-black">
										15 May 2020 8:00 pm
									</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="px-2.5 py-1 text-sm font-medium text-red-500 bg-red-500 bg-opacity-10 rounded-full">
										Canceled
									</span>
								</td>
								<td className="py-2.5 border-b border-black">
									<Link className="inline-flex py-2.5 pr-0" href={``}>
										<span className="w-1 h-1 bg-black rounded-full"></span>
										<span className="mx-0.5 w-1 h-1 bg-black rounded-full"></span>
										<span className="w-1 h-1 bg-black rounded-full"></span>
									</Link>
								</td>
							</tr>
							<tr>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">29506</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<div className="flex flex-wrap items-center">
										<Image
											className="object-cover object-center mr-3 rounded-full w-9 h-9"
											src="https://cmsblueinventory.com/wp-content/uploads/2023/05/6Y8A4504-scaled.jpg"
											alt=""
											width={500}
											height={500}
										/>
										<span className="font-semibold">Annette Black</span>
									</div>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">$6.48</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">DJI Mavic Pro 2</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium text-black">
										15 May 2020 7:00 pm
									</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full">
										Confirmed
									</span>
								</td>
								<td className="py-2.5 border-b border-black">
									<Link className="inline-flex py-2.5 pr-0" href={``}>
										<span className="w-1 h-1 bg-black rounded-full"></span>
										<span className="mx-0.5 w-1 h-1 bg-black rounded-full"></span>
										<span className="w-1 h-1 bg-black rounded-full"></span>
									</Link>
								</td>
							</tr>
							<tr>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">29506</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<div className="flex flex-wrap items-center">
										<Image
											className="object-cover object-center mr-3 rounded-full w-9 h-9"
											src="https://cmsblueinventory.com/wp-content/uploads/2023/05/pexels-shazard-r-14197704-min-scaled-e1683834127519.jpg"
											alt=""
											width={500}
											height={500}
										/>
										<span className="font-semibold">Darlene Robertson</span>
									</div>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">$14.81</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">Brand New Bike</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium text-black">
										15 May 2020 6:00 pm
									</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full">
										Confirmed
									</span>
								</td>
								<td className="py-2.5 border-b border-black">
									<Link className="inline-flex py-2.5 pr-0" href={``}>
										<span className="w-1 h-1 bg-black rounded-full"></span>
										<span className="mx-0.5 w-1 h-1 bg-black rounded-full"></span>
										<span className="w-1 h-1 bg-black rounded-full"></span>
									</Link>
								</td>
							</tr>
							<tr>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">29506</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<div className="flex flex-wrap items-center">
										<Image
											className="object-cover object-center mr-3 rounded-full w-9 h-9"
											src="https://cmsblueinventory.com/wp-content/uploads/2023/04/pexels-edmond-dantes-4347368-min-scaled.jpg"
											alt=""
											width={500}
											height={500}
										/>
										<span className="font-semibold">Jane Cooper</span>
									</div>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">$8.99</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">Coach Tabby 26</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium text-black">
										15 May 2020 11:00 pm
									</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="px-2.5 py-1 text-sm font-medium text-yellow-500 bg-yellow-500 bg-opacity-10 rounded-full">
										Pending
									</span>
								</td>
								<td className="py-2.5 border-b border-black">
									<Link className="inline-flex py-2.5 pr-0" href={``}>
										<span className="w-1 h-1 bg-black rounded-full"></span>
										<span className="mx-0.5 w-1 h-1 bg-black rounded-full"></span>
										<span className="w-1 h-1 bg-black rounded-full"></span>
									</Link>
								</td>
							</tr>
							<tr>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">29506</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<div className="flex flex-wrap items-center">
										<Image
											className="object-cover object-center mr-3 rounded-full w-9 h-9"
											src="https://cmsblueinventory.com/wp-content/uploads/2023/05/pexels-kampus-production-8353841-scaled-e1683833484486.jpg"
											alt=""
											width={500}
											height={500}
										/>
										<span className="font-semibold">Cameron Williamson</span>
									</div>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">$17.84</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium">Dell Computer Monitor</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="font-medium text-black">
										15 May 2020 5:00 pm
									</span>
								</td>
								<td className="py-2.5 pr-4 border-b border-black">
									<span className="px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full">
										Confirmed
									</span>
								</td>
								<td className="py-2.5 border-b border-black">
									<Link className="inline-flex py-2.5 pr-0" href={``}>
										<span className="w-1 h-1 bg-black rounded-full"></span>
										<span className="mx-0.5 w-1 h-1 bg-black rounded-full"></span>
										<span className="w-1 h-1 bg-black rounded-full"></span>
									</Link>
								</td>
							</tr>
							<tr>
								<td className="py-2.5 pr-4">
									<span className="font-medium">29506</span>
								</td>
								<td className="py-2.5 pr-4">
									<div className="flex flex-wrap items-center">
										<Image
											className="object-cover object-center mr-3 rounded-full w-9 h-9"
											src="https://cmsblueinventory.com/wp-content/uploads/2023/04/pexels-rodnae-productions-9064378-scaled.jpg"
											alt=""
											width={500}
											height={500}
										/>
										<span className="font-semibold">Esther Howard</span>
									</div>
								</td>
								<td className="py-2.5 pr-4">
									<span className="font-medium">$5.22</span>
								</td>
								<td className="py-2.5 pr-4">
									<span className="font-medium">iPad Pro 2017 Model</span>
								</td>
								<td className="py-2.5 pr-4">
									<span className="font-medium text-black">
										15 May 2020 10:00 pm
									</span>
								</td>
								<td className="py-2.5 pr-4">
									<span className="px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full">
										Confirmed
									</span>
								</td>
								<td className="py-2.5">
									<Link className="inline-flex py-2.5 pr-0" href={``}>
										<span className="w-1 h-1 bg-black rounded-full"></span>
										<span className="mx-0.5 w-1 h-1 bg-black rounded-full"></span>
										<span className="w-1 h-1 bg-black rounded-full"></span>
									</Link>
								</td>
							</tr>
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
									<span className="text-sm font-semibold text-darkGrey">1</span>
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
									<span className="text-sm font-semibold text-darkGrey">3</span>
								</Link>
							</div>
							<div className="w-auto p-0.5">
								<Link
									className="flex items-center justify-center border rounded-sm w-9 h-9 hover:border-darkGrey"
									href={``}
								>
									<span className="text-sm font-semibold text-darkGrey">4</span>
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
