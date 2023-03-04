import gsap from "gsap";

// Custom reusable Animation Properties/variables
interface FadeInUp {
	initial: {
		y: number;
		opacity: number;
	};
	animate: {
		y: number;
		opacity: number;
		transition: {
			duration: number;
			ease: string;
		};
	};
}
interface FadeIn {
	initial: {
		opacity: number;
	};
	animate: {
		opacity: number;
		transition: {
			duration: number;
			delay: number;
			ease: string;
		};
	};
}
interface Stagger {
	animate: {
		transition: {
			staggerChildren: number;
		};
	};
}
interface FadeInTwo {
	initial: {
		opacity: number;
	};
	animate: {
		opacity: number;
		transition: {
			duration: number;
			delay: number;
			ease: string;
		};
	};
}

export const fadeInUp: FadeInUp | any = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {duration: 0.5, ease: "easeOut"},
	},
};
export const fadeIn: FadeIn | any = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
			delay: 0.5,
			ease: "easeOut",
		},
	},
};
export const stagger: Stagger | any = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};
export const fadeInTwo: FadeInTwo | any = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
			delay: 2,
			ease: "easeOut",
		},
	},
};
export default fadeInUp;

interface StaggerReveal {
	duration: number;
	height: number;
	transformOrigin: string;
	skewY: number;
	ease: string;
	stagger: {
		amount: number;
	};
}
interface StaggerRevealClose {
	duration: number;
	height: number;
	ease: string;
	stagger: {
		amount: number;
	};
}
interface StaggerText {
	duration: number;
	y: number;
	height: number;
	delay: number;
	ease: string;
	stagger: {
		amount: number;
	};
}
interface FadeInUpTwo {
	y: number;
	duration: number;
	delay: number;
	opacity: number;
	ease: string;
}
interface HandleHover {
	y: number;
	duration: number;
	skewX: number;
	ease: string;
}
interface HandleHoverExit {
	y: number;
	duration: number;
	skewX: number;
	ease: string;
}
interface HandleCity {
	duration: number;
	skewY: number;
	opacity: number;
	ease: string;
	background: string;
	transformOrigin: string;
}
interface HandleCityReturn {
	duration: number;
	skewY: number;
	opacity: number;
}

// OPEN MENU
export const staggerReveal: StaggerReveal | any = (node1: any, node2: any) => {
	gsap.from([node1, node2], {
		duration: 0.8,
		height: 0,
		transformOrigin: "right top",
		skewY: 2,
		ease: "power3.inOut",
		stagger: {
			amount: 0.1,
		},
	});
};
// CLOSE MENU
export const staggerRevealClose: StaggerRevealClose | any = (
	node1: any,
	node2: any
) => {
	gsap.to([node1, node2], {
		duration: 0.8,
		height: 0,
		ease: "power3.inOut",
		stagger: {
			amount: 0.07,
		},
	});
};
// STAGGER THE LINKS TO APPEAR
export const staggerText: StaggerText | any = (
	node1: any,
	node2: any,
	node3: any
) => {
	gsap.from([node1, node2, node3], {
		duration: 0.8,
		y: 100,
		delay: 0.1,
		ease: "power3.inOut",
		stagger: {
			amount: 0.3,
		},
	});
};
// Fade up for the additional info on our menu
export const fadeInUpTwo: FadeInUpTwo | any = (node: any) => {
	gsap.from(node, {
		y: 60,
		duration: 1,
		delay: 0.2,
		opacity: 0,
		ease: "power3.inOut",
	});
};
// Hover on the link
export const handleHover: HandleHover | any = (e: any) => {
	gsap.to(e.target, {
		duration: 0.3,
		y: 3,
		skewX: 4,
		ease: "power1.inOut",
	});
};
// Hover off the link
export const handleHoverExit: HandleHoverExit | any = (e: any) => {
	gsap.to(e.target, {
		duration: 0.3,
		y: -3,
		skewX: 0,
		ease: "power1.inOut",
	});
};
// adds city image once you hover on
export const handleCity: HandleCity | any = (city: any, target: any) => {
	gsap.to(target, {
		duration: 0,
		background: `url(${city}) center center`,
	});
	gsap.to(target, {
		duration: 0.4,
		opacity: 1,
		ease: "power3.inOut",
	});
	gsap.from(target, {
		duration: 0.4,
		skewY: 2,
		transformOrigin: "right top",
	});
};

// Removes the city image once you hover off
export const handleCityReturn: HandleCityReturn | any = (target: any) => {
	gsap.to(target, {
		duration: 0,
		skewY: 0,
	});
	gsap.to(target, {
		duration: 0.4,
		opacity: 0,
		skewY: 0,
	});
};
