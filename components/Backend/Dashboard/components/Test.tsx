// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {useDashboardContext} from "@/context/dashboard";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const test = () => {
	return (
		<>
			<div className="container px-4 mx-auto">
				<div className="max-w-3xl mx-auto">
					<div className="flex flex-wrap mb-6 -mx-4">
						<div className="w-full px-4 mb-6 md:w-1/2 md:mb-0">
							<div className="h-full p-6 bg-white shadow-lg rounded-xl">
								<div className="flex items-center">
									<div className="flex items-center self-start justify-center flex-shrink-0 w-12 h-12 mr-4 text-blue bg-blue bg-opacity-20 rounded-xl">
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
												stroke="#194BFB"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												d="M12 6V18"
												stroke="#194BFB"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
												stroke="#194BFB"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</div>
									<div>
										<h5 className="text-xs font-semibold leading-6 text-grey">
											Monthly Payment
										</h5>
										<div className="flex items-end font-semibold leading-none text-grey">
											<span className="text-2xl">$65</span>
											<span className="pb-1 text-sm">/month</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2">
							<div className="h-full p-6 bg-white rounded-xl">
								<div className="flex items-center">
									<div className="flex items-center self-start justify-center flex-shrink-0 w-12 h-12 mr-4 text-blue bg-blue bg-opacity-20 rounded-xl">
										<svg
											width="14"
											height="20"
											viewBox="0 0 14 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7 9C9.20914 9 11 7.20914 11 5C11 2.79086 9.20914 1 7 1C4.79086 1 3 2.79086 3 5C3 7.20914 4.79086 9 7 9Z"
												stroke="#194BFB"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												d="M1 19V17C1 15.9391 1.42143 14.9217 2.17157 14.1716C2.92172 13.4214 3.93913 13 5 13H9C10.0609 13 11.0783 13.4214 11.8284 14.1716C12.5786 14.9217 13 15.9391 13 17V19"
												stroke="#194BFB"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</div>
									<div>
										<h5 className="text-xs font-semibold leading-6 text-grey">
											Total Clients
										</h5>
										<div className="flex items-center text-2xl font-semibold leading-none text-grey">
											<span>145</span>
											<span className="inline-block px-2 py-1 ml-2 text-xs font-medium bg-teal-900 rounded-full text-green">
												+12,0%
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="p-6 mb-10 bg-white shadow-lg rounded-xl">
						<h4 className="mb-6 text-lg font-semibold text-grey">Invoices</h4>
						<div className="w-full pb-4 mt-6 overflow-x-scroll">
							<table className="w-full min-w-max">
								<thead>
									<tr className="text-left">
										<th className="p-0">
											<div className="px-6 py-3 bg-white rounded-l-xl">
												<span className="text-xs font-semibold text-grey">
													INVOICE ID
												</span>
											</div>
										</th>
										<th className="p-0">
											<div className="px-6 py-3 bg-white">
												<span className="text-xs font-semibold text-grey">
													AMOUNT
												</span>
											</div>
										</th>
										<th className="p-0">
											<div className="px-6 py-3 bg-white">
												<button className="inline-flex items-center text-xs font-semibold text-grey">
													<span className="mr-2">DATE</span>
													<svg
														width="10"
														height="14"
														viewBox="0 0 10 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.8598 8.52669L4.9998 11.3934L2.1398 8.52669C2.01426 8.40115 1.844 8.33063 1.66646 8.33063C1.48893 8.33063 1.31867 8.40115 1.19313 8.52669C1.0676 8.65222 0.99707 8.82249 0.99707 9.00002C0.99707 9.17756 1.0676 9.34782 1.19313 9.47335L4.52646 12.8067C4.58844 12.8692 4.66217 12.9188 4.74341 12.9526C4.82465 12.9865 4.91179 13.0039 4.9998 13.0039C5.08781 13.0039 5.17494 12.9865 5.25618 12.9526C5.33742 12.9188 5.41116 12.8692 5.47313 12.8067L8.80646 9.47335C8.86862 9.41119 8.91793 9.3374 8.95157 9.25619C8.98521 9.17497 9.00252 9.08793 9.00252 9.00002C9.00252 8.91211 8.98521 8.82507 8.95157 8.74385C8.91793 8.66264 8.86862 8.58885 8.80646 8.52669C8.7443 8.46453 8.67051 8.41522 8.5893 8.38158C8.50808 8.34794 8.42104 8.33063 8.33313 8.33063C8.24522 8.33063 8.15818 8.34794 8.07696 8.38158C7.99575 8.41522 7.92196 8.46453 7.8598 8.52669ZM2.1398 5.47335L4.9998 2.60669L7.8598 5.47335C7.92177 5.53584 7.99551 5.58544 8.07675 5.61928C8.15799 5.65313 8.24512 5.67055 8.33313 5.67055C8.42114 5.67055 8.50828 5.65313 8.58952 5.61928C8.67075 5.58544 8.74449 5.53584 8.80646 5.47335C8.86895 5.41138 8.91855 5.33764 8.95239 5.2564C8.98624 5.17517 9.00366 5.08803 9.00366 5.00002C9.00366 4.91201 8.98624 4.82488 8.95239 4.74364C8.91855 4.6624 8.86895 4.58866 8.80646 4.52669L5.47313 1.19335C5.41116 1.13087 5.33742 1.08127 5.25618 1.04743C5.17494 1.01358 5.08781 0.996155 4.9998 0.996155C4.91179 0.996155 4.82465 1.01358 4.74341 1.04743C4.66217 1.08127 4.58844 1.13087 4.52646 1.19335L1.19313 4.52669C1.0676 4.65222 0.99707 4.82249 0.99707 5.00002C0.99707 5.17756 1.0676 5.34782 1.19313 5.47335C1.31867 5.59889 1.48893 5.66941 1.66646 5.66941C1.844 5.66941 2.01426 5.59889 2.1398 5.47335Z"
															fill="currentColor"
														></path>
													</svg>
												</button>
											</div>
										</th>
										<th className="p-0">
											<div className="px-5 py-3 bg-white rounded-r-xl">
												<span className="text-xs font-semibold text-grey">
													STATUS
												</span>
											</div>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="p-0">
											<div className="h-16 p-6">
												<h5 className="text-sm font-medium text-grey">
													INVOICE #3405
												</h5>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6">
												<span className="text-sm font-medium text-grey">
													$25.00
												</span>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6">
												<span className="text-sm font-medium text-grey">
													July 06, 2022
												</span>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6">
												<div className="flex items-center h-full">
													<span className="inline-block w-2 h-2 mr-1 rounded-full bg-yellow"></span>
													<span className="text-sm font-medium text-grey">
														Pending
													</span>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="p-0">
											<div className="h-16 p-6 bg-white rounded-l-xl">
												<h5 className="text-sm font-medium text-grey">
													INVOICE #3405
												</h5>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6 bg-white">
												<span className="text-sm font-medium text-grey">
													$25.00
												</span>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6 bg-white">
												<h5 className="text-sm font-medium text-grey">
													July 06, 2022
												</h5>
											</div>
										</td>
										<td className="p-0">
											<div className="flex items-center h-16 p-6 bg-white rounded-r-xl">
												<span className="inline-block w-2 h-2 mr-1 rounded-full bg-green"></span>
												<span className="text-sm font-medium text-grey">
													DelivepinkRed
												</span>
											</div>
										</td>
									</tr>
									<tr>
										<td className="p-0">
											<div className="h-16 p-6">
												<h5 className="text-sm font-medium text-grey">
													INVOICE #3405
												</h5>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6">
												<span className="text-sm font-medium text-grey">
													$25.00
												</span>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6">
												<span className="text-sm font-medium text-grey">
													July 06, 2022
												</span>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6">
												<div className="flex items-center h-full">
													<span className="inline-block w-2 h-2 mr-1 rounded-full bg-yellow"></span>
													<span className="text-sm font-medium text-grey">
														Pending
													</span>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="p-0">
											<div className="h-16 p-6 bg-white rounded-l-xl">
												<h5 className="text-sm font-medium text-grey">
													INVOICE #3405
												</h5>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6 bg-white">
												<span className="text-sm font-medium text-grey">
													$25.00
												</span>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6 bg-white">
												<h5 className="text-sm font-medium text-grey">
													July 06, 2022
												</h5>
											</div>
										</td>
										<td className="p-0">
											<div className="flex items-center h-16 p-6 bg-white rounded-r-xl">
												<span className="inline-block w-2 h-2 mr-1 rounded-full bg-pinkRed"></span>
												<span className="text-sm font-medium text-grey">
													Refunded
												</span>
											</div>
										</td>
									</tr>
									<tr>
										<td className="p-0">
											<div className="h-16 p-6">
												<h5 className="text-sm font-medium text-grey">
													INVOICE #3405
												</h5>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6">
												<span className="text-sm font-medium text-grey">
													$25.00
												</span>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6">
												<span className="text-sm font-medium text-grey">
													July 06, 2022
												</span>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6">
												<div className="flex items-center h-full">
													<span className="inline-block w-2 h-2 mr-1 rounded-full bg-yellow"></span>
													<span className="text-sm font-medium text-grey">
														Pending
													</span>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="p-0">
											<div className="h-16 p-6 bg-white rounded-l-xl">
												<h5 className="text-sm font-medium text-grey">
													INVOICE #3405
												</h5>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6 bg-white">
												<span className="text-sm font-medium text-grey">
													$25.00
												</span>
											</div>
										</td>
										<td className="p-0">
											<div className="h-16 p-6 bg-white">
												<h5 className="text-sm font-medium text-grey">
													July 06, 2022
												</h5>
											</div>
										</td>
										<td className="p-0">
											<div className="flex items-center h-16 p-6 bg-white rounded-r-xl">
												<span className="inline-block w-2 h-2 mr-1 rounded-full bg-pinkRed"></span>
												<span className="text-sm font-medium text-grey">
													Refunded
												</span>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default test;
