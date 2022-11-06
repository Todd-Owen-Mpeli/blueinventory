import Image from "next/image";

const LogoSlider = () => {
	return (
		<section className="py-20 px-4">
			<div className="flex flex-wrap -mx-4">
				<div className="mb-16 lg:mb-0 w-full md:w-1/3 lg:w-1/6 px-2">
					<Image
						className="mx-auto h-6"
						src="/img/Logos/slack.png"
						alt="Slack png"
						width="100%"
						height="30px"
					/>
				</div>
				<div className="mb-16 lg:mb-0 w-full md:w-1/3 lg:w-1/6 px-2">
					<Image
						className="mx-auto h-6"
						src="/img/Logos/dropbox.png"
						alt="Slack png"
						width="100%"
						height="30px"
					/>
				</div>
				<div className="mb-16 lg:mb-0 w-full md:w-1/3 lg:w-1/6 px-2">
					<Image
						className="mx-auto h-6"
						src="/img/Logos/spotify.png"
						alt="Slack png"
						width="100%"
						height="30px"
					/>
				</div>
				<div className="mb-16 lg:mb-0 w-full md:w-1/3 lg:w-1/6 px-2">
					<Image
						className="mx-auto h-6"
						src="/img/Logos/amazon.png"
						alt="Slack png"
						width="100%"
						height="30px"
					/>
				</div>
				<div className="mb-16 lg:mb-0 w-full md:w-1/3 lg:w-1/6 px-2">
					<Image
						className="mx-auto h-6"
						src="/img/Logos/netflix.png"
						alt="Slack png"
						width="100%"
						height="30px"
					/>
				</div>
				<div className="mb-16 lg:mb-0 w-full md:w-1/3 lg:w-1/6 px-2">
					<Image
						className="mx-auto h-6"
						src="/img/Logos/stripe.png"
						alt="Slack png"
						width="100%"
						height="30px"
					/>
				</div>
			</div>
		</section>
	);
};

export default LogoSlider;
