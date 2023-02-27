import Image from "next/image";
import {FunctionComponent} from "react";
import styles from "../styles/components/jumboGrid.module.scss";

const JumboGrid = () => {
	return (
		<section className={styles.jumboGrid}>
			<div className="container mx-auto">
				<div className="content">
					<div className="flex flex-col lg:flex-row gap-20">
						<div className="w-full lg:w-1/2 px-4 my-auto">
							<Image
								src="/img/pexels-edmond-dantès-8550655.jpg"
								className="w-full h-full my-auto object-cover rounded-[15px]"
								alt=""
								width="100"
								height="100"
								layout="responsive"
							/>
						</div>
						<div className="w-full lg:w-1/2 px-4 my-auto">
							<h2 className="mb-12 text-4xl md:text-5xl leading-tight font-bold tracking-tighter">
								Gain more insight into how people use your
							</h2>
							<div className="flex flex-wrap -mx-4 text-center md:text-left">
								<div className="w-full md:w-1/2 px-4 mb-8">
									<div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue font-semibold rounded-full">
										1
									</div>
									<h3 className="mb-2 text-xl font-bold">Custom analytics</h3>
									<p className="font-medium text-grey">
										Get a complete sales dashboard in the cloud. See activity,
										revenue and social metrics all in one place.
									</p>
								</div>
								<div className="w-full md:w-1/2 px-4 mb-8">
									<div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue font-semibold rounded-full">
										2
									</div>
									<h3 className="mb-2 text-xl font-bold">Team Management</h3>
									<p className="font-medium text-grey">
										Our calendar lets you know what is happening with customer
										and projects so you are able to control process.
									</p>
								</div>
								<div className="w-full md:w-1/2 px-4 mb-8">
									<div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue font-semibold rounded-full">
										3
									</div>
									<h3 className="mb-2 text-xl font-bold">Easy setup</h3>
									<p className="font-medium text-grey">
										End to End Business Platform, Sales Management, Marketing
										Automation, Help Desk and many more
									</p>
								</div>
								<div className="w-full md:w-1/2 px-4">
									<div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue font-semibold rounded-full">
										4
									</div>
									<h3 className="mb-2 text-xl font-bold">Build your website</h3>
									<p className="font-medium text-grey">
										A tool that lets you build a dream website even if you know
										nothing about web design or programming.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default JumboGrid;
