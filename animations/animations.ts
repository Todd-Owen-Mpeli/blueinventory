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
