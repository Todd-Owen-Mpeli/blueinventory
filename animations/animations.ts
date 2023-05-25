/*  FRAMER-MOTION ANIMATIONS
Custom reusable Animation Properties/variables */

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
interface Initial {
	y: number;
	opacity: number;
}

interface InitialTwo {
	y: number;
	opacity: number;
}

interface FadeIn {
	opacity: number;
	transition: {
		duration: number;
		delay: number;
		ease: string;
	};
}

interface FadeInUp {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
}

interface FadeInThree {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
}

interface Stagger {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
		staggerChildren: number;
	};
}

export const initial: Initial | any = {
	y: 60,
	opacity: 0,
};

export const initialTwo: InitialTwo | any = {
	opacity: 0,
};

export const fadeIn: FadeIn | any = {
	opacity: 1,
	transition: {
		duration: 1,
		delay: 0.5,
		ease: "easeOut",
	},
};

export const fadeInUp: FadeInUp = {
	y: 0,
	opacity: 1,
	transition: {
		delay: 0.5,
		duration: 0.5,
		ease: "easeInOut",
	},
};

export const stagger: Stagger = {
	y: 0,
	opacity: 1,
	transition: {
		delay: 0.25,
		duration: 0.5,
		ease: "easeInOut",
		staggerChildren: 0.1,
	},
};

export const fadeInThree: FadeInThree | any = {
	y: 0,
	opacity: 1,
	transition: {
		duration: 1,
		delay: 0.5,
		ease: "easeOut",
	},
};

export default fadeInUp;
