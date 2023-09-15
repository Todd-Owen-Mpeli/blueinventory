/*  FRAMER-MOTION ANIMATIONS
Custom reusable Animation Properties/variables */

// WhileInView
export type Initial = {
	y: number;
	opacity: number;
};
export type InitialTwo = {
	y: number;
	opacity: number;
};
export type FadeIn = {
	opacity: number;
	transition: {
		duration: number;
		delay: number;
		ease: string;
	};
};
export type FadeInTwo = {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
};
export type FadeInThree = {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
};
export type FadeInUp = {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
};
export type Stagger = {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
		staggerChildren: number;
		delayChildren: number;
	};
};
export type SlideInRightInitial = {
	y: number;
	x: number;
	opacity: number;
};
export type SlideInLeftInitial = {
	y: number;
	x: number;
	opacity: number;
};
export type SlideInRightFinish = {
	x: number;
	y: 0;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
		staggerChildren: number;
	};
};
