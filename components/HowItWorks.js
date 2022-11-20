import Image from "next/image";
import styles from "../styles/components/CTAOne.module.scss";

const HowItWorks = (props) => {
	return (
		<section className={styles.HowItWorks} id="HowItWorks">
			<div className="backgroundSVG relative">
				<img
					src="/svg/backgroundSVG/layered-waves-haikei.svg"
					className="absolute w-full object-cover"
					alt=""
					width="75px"
					height="75px"
				/>
			</div>
			<div className="container mx-auto px-0 z-50 relative">
				<div className={styles.content}>
					<div className="py-12 md:py-28 xl:py-28 px-6 md:px-10 xl:px-12">
						<div className="mb-16 text-center mx-auto">
							<span className="text-white text-xl font-bold">
								{props.title.title}
							</span>
							<h2 className="mb-6 mt-8 text-4xl md:text-6xl text-center text-white md:text-black lg:text-white font-bold font-heading tracking-px-n leading-none md:max-w-5xl mx-auto">
								{props.title.subtitle}
							</h2>
						</div>
						<div className="flex flex-col gap-10 lg:gap-20 xl:gap-36 mt-10 lg:mt-36">
							<div className="flex flex-col md:flex-row justify-between items-center gap-20">
								<div className="w-full lg:w-1/2 mb-5 lg:mb-0">
									<span className="mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center bg-flatPinkRed rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/analysis.png"
											className="object-contain"
											alt=""
											width="75px"
											height="75px"
										/>
									</span>
									<h5 className="mb-4 text-base uppercase font-bold text-center lg:text-left font-heading text-lightBlue">
										{props.data.subtitleOne}
									</h5>
									<h3 className="mb-4 text-3xl font-bold font-heading text-center lg:text-left text-black">
										{props.data.titleOne}
									</h3>
									<p className="text-black text-base text-center lg:text-left leading-relaxed">
										{props.data.textAreaOne}
									</p>
								</div>
								<div className="w-full lg:w-1/2">
									<Image
										src={props.data.imageOne}
										className="w-full h-full object-cover rounded-[15px]"
										alt="Image One"
										width="100"
										height="100"
										layout="responsive"
									/>
								</div>
							</div>
							<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-20">
								<div className="w-full lg:w-1/2">
									<Image
										src={props.data.imageTwo}
										className="w-full h-full object-cover rounded-[15px]"
										alt="Image One"
										width="100"
										height="100"
										layout="responsive"
									/>
								</div>
								<div className="w-full lg:w-1/2 mb-5 lg:mb-0">
									<span className="mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center bg-lightBlue rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/bar-graph.png"
											className="object-contain"
											alt=""
											width="75px"
											height="75px"
										/>
									</span>
									<h5 className="mb-4 text-base uppercase font-bold font-heading text-center lg:text-left text-lightBlue">
										{props.data.subtitleTwo}
									</h5>
									<h3 className="mb-4 text-3xl font-bold font-heading text-center lg:text-left text-black">
										{props.data.titleTwo}
									</h3>
									<p className="text-black text-base text-center lg:text-left leading-relaxed">
										{props.data.textAreaTwo}
									</p>
								</div>
							</div>
							<div className="flex flex-col md:flex-row justify-between items-center gap-20">
								<div className="w-full lg:w-1/2 mb-5 lg:mb-0">
									<span className="mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center bg-limeGreen rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/graph.png"
											className="object-contain"
											alt=""
											width="75px"
											height="75px"
										/>
									</span>
									<h5 className="mb-4 text-base uppercase font-bold font-heading text-center lg:text-left text-lightBlue">
										{props.data.subtitleThree}
									</h5>
									<h3 className="mb-4 text-3xl font-bold font-heading text-center lg:text-left text-black">
										{props.data.titleThree}
									</h3>
									<p className="text-black text-base text-center lg:text-left leading-relaxed">
										{props.data.textAreaThree}
									</p>
								</div>
								<div className="w-full lg:w-1/2 px-0">
									<Image
										src={props.data.imageThree}
										className="w-full h-full object-cover rounded-[15px]"
										alt="Image One"
										width="100"
										height="100"
										layout="responsive"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
