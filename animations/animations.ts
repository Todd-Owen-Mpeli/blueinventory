/*  FRAMER-MOTION ANIMATIONS
Custom reusable Animation Properties/variables */

import {
	FadeIn,
	Initial,
	Stagger,
	FadeInUp,
	FadeInTwo,
	InitialTwo,
	FadeInThree,
	SlideInLeftInitial,
	SlideInRightFinish,
	SlideInRightInitial,
} from "@/types/animations";

// WhileInView
export const initial: Initial | any = {
	y: 30,
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
export const fadeInThree: FadeInThree | any = {
	opacity: 0.7,
	transition: {
		duration: 1,
		delay: 0.5,
		ease: "easeOut",
	},
};

export const fadeInTwo: FadeInTwo | any = {
	y: 0,
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
		delayChildren: 0.3,
	},
};

// Slide In Direction (Horizontal)
export const slideInRightInitial: SlideInRightInitial | any = {
	y: 0,
	x: 200,
	opacity: 0,
};

export const slideInLeftInitial: SlideInLeftInitial | any = {
	y: 0,
	x: -200,
	opacity: 0,
};

export const slideInRightFinish: SlideInRightFinish = {
	y: 0,
	x: 0,
	opacity: 1,
	transition: {
		delay: 0.25,
		duration: 0.5,
		ease: "easeInOut",
		staggerChildren: 0.1,
	},
};

export default fadeInUp;
