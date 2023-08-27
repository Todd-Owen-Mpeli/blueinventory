// Imports
import {FC, useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn, initial, stagger, initialTwo} from "@/animations/animations";

// Firebase
import {useFirebaseContext} from "@/context/Firebase";
import {getUserItemsDocument} from "@/functions/Backend/firebase/getUserItemsDocument";

// Components;
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const Tables: FC = () => {
	const initialNumber: number = 1;
	const maxCount: number = 20;
	const totalResults: number = 157;

	const firebaseContext = useFirebaseContext();
	const userDocID: string | null = firebaseContext?.userDocId;
	const [itemsCollection, setItemsCollection] = useState<any | null>(null);

	useEffect(() => {
		const unsubscribe = async () => {
			if (userDocID) {
				const itemsArray = await getUserItemsDocument(userDocID);
				setItemsCollection(itemsArray);
			} else {
				setItemsCollection(null);
			}
		};

		return () => {
			unsubscribe();
		};
	}, [userDocID]);

	// Ensure userData is not null before using it in JSX
	if (!itemsCollection) {
		return <div>Loading...</div>; // or some other loading indicator
	}

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
							{itemsCollection?.length > 0 ? (
								itemsCollection.map((item: any, keys: any) => (
									<tr key={keys}>
										<td className="pt-6 py-2.5 pr-4">
											<span className="font-semibold">00{keys}</span>
										</td>
										<td className="py-2.5 pr-4">
											<div className="flex flex-wrap items-center">
												{/* <Image
													className="object-cover object-center mr-3 rounded-full w-9 h-9"
													src={item.Image.sourceUrl}
													alt={item.Image.altText}
													width={item.Image.mediaDetails.width}
													height={item.Image.mediaDetails.height}
												/> */}
												<span className="font-semibold">{item.itemName}</span>
											</div>
										</td>
										<td className="py-2.5 pr-4 max-w-xs">
											<div className="font-normal">{item.description}</div>
										</td>
										<td className="py-2.5 pr-4">
											<div className="font-semibold">{item.quantity}</div>
										</td>
										<td className="py-2.5 pr-4 max-w-xs">
											<div className="font-semibold text-black">
												{item.category}
											</div>
										</td>
										<td className="py-2.5 pr-4">
											<div className="px-2.5 py-1 text-sm font-normal text-white bg-darkBlue w-fit rounded-full">
												£{item.value}
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
								<>Hello</>
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
