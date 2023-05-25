/*  FRAMER-MOTION ANIMATIONS
Custom reusable Animation Properties/variables */
interface Initial {
	y: number;
	opacity: number;
}

interface FadeInUp {
	initial: {
		y: number;
		opacity: number;
	};
	animate: {
		y: number;
		opacity: number;
		transition: {delay: number; duration: number; ease: string};
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

export const initial: Initial | any = {
	y: 60,
	opacity: 0,
};

export const fadeInUp: FadeInUp | any = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 0.5,
			ease: "easeInOut",
		},
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

export const fadeInTwo: FadeInTwo = {
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

// WhileInView

interface FadeInUpTwo {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
}

interface StaggerTwo {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
		staggerChildren: number;
	};
}

export const fadeInUpTwo: FadeInUpTwo = {
	y: 0,
	opacity: 1,
	transition: {
		delay: 0.5,
		duration: 0.5,
		ease: "easeInOut",
	},
};

export const staggerTwo: StaggerTwo = {
	y: 0,
	opacity: 1,
	transition: {
		delay: 0.25,
		duration: 0.5,
		ease: "easeInOut",
		staggerChildren: 0.1,
	},
};

export default fadeInUp;
