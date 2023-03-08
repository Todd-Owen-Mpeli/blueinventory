/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, fadeInTwo, stagger} from "../animations/animations";

import styled from "styled-components";
import DOMPurify from "isomorphic-dompurify";
import React, {useEffect, useRef, useState, FunctionComponent} from "react";

interface IProps {
	props: string;
}

// H2 styling
const TestComponentStyling = styled.div``;

const TestComponent: FunctionComponent<IProps> = ({props}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mt-8 font-[400] text-white text-base text-left leading-[1.5rem]";
		} else {
			contentStyling =
				"block mt-8 font-[400] text-white text-base text-left leading-[1.5rem]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return <TestComponentStyling></TestComponentStyling>;
};

export default TestComponent;
