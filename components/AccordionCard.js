import Link from "next/link";

const AccordionCard = (props) => {
	return (
		<div>
			<div className="w-full p-1">
				<Link href="#">
					<a>
						<div className="py-7 px-8 bg-white bg-opacity-60 border-2 border-transparent hover:border-blue active:border-blue focus:border-blue rounded-2xl shadow-10xl">
							<div className="flex flex-wrap justify-between -m-2">
								<div className="flex-1 p-2">
									<h3 className="text-lg font-semibold leading-normal">
										{props?.title}
									</h3>
									<p className="mt-4 text-grey font-medium">
										{props?.paragraph}
									</p>
								</div>
								<div className="w-auto p-2">
									<svg
										className="relative top-1"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
											stroke="#4F46E5"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</div>
							</div>
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default AccordionCard;
