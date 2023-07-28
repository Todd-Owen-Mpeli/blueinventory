// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, useEffect, useState} from "react";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

const mainContent: FC = () => {
	return (
		<>
			<div className={styles.mainContent}>
				<div className="w-full min-h-screen bg-lightGrey">Enter</div>
			</div>
		</>
	);
};

export default mainContent;
