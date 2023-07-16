/*  FRAMER-MOTION ANIMATIONS
Custom reusable Animation Properties/variables */

// WhileInView
export interface Initial {
	y: number;
	opacity: number;
}

export interface InitialTwo {
	y: number;
	opacity: number;
}

export interface FadeIn {
	opacity: number;
	transition: {
		duration: number;
		delay: number;
		ease: string;
	};
}

export interface FadeInTwo {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
}

export interface FadeInThree {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
}

export interface FadeInUp {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
}

export interface Stagger {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
		staggerChildren: number;
		delayChildren: number;
	};
}

export interface SlideInRightInitial {
	y: number;
	x: number;
	opacity: number;
}

export interface SlideInLeftInitial {
	y: number;
	x: number;
	opacity: number;
}

export interface SlideInRightFinish {
	x: number;
	y: 0;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
		staggerChildren: number;
	};
}
