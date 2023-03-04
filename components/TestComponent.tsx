import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import {FunctionComponent} from "react";

// H2 styling
const TestComponentStyling = styled.div`
	.front::before,
	.front::after,
	.half::before,
	.half::after,
	.cube::after {
		transform: rotate3d(var(--vi), var(--vj), 0, calc(var(--s) * 0.5turn))
			translatez(var(--z, 1em));
	}

	.front::before,
	.front::after,
	.later .side,
	.later::before,
	.later::after,
	.later,
	.half::before,
	.half::after,
	.cube::after {
		--int: Max(0, calc(var(--sum) - 0.5));
		--mod: calc(var(--sum) - var(--int));
		--abs: Max(calc(0.5 - var(--mod)), calc(var(--mod) - 0.5));
		--k: calc(1 - 2 * var(--abs));
		color: hsl(200, var(--sat, 75%), calc(63% - var(--k, -0.1) * 50%));
		background: currentcolor;
	}

	@property --d {
		syntax: "<length>";
		initial-value: 0px;
		inherits: true;
	}
	@property --p {
		syntax: "<number>";
		initial-value: 0;
		inherits: true;
	}
	@property --int {
		syntax: "<integer>";
		initial-value: 0;
		inherits: true;
	}
	@property --f {
		syntax: "<number>";
		initial-value: 0;
		inherits: true;
	}
	body,
	div {
		display: grid;
	}

	body {
		overflow: hidden;
		margin: 0;
		height: 100vh;
		background: #319eea;
	}
	body:before,
	body:after {
		--o: calc(var(--s) * -100%);
		position: absolute;
		z-index: -1;
		top: calc(var(--s) * 100%);
		left: calc(var(--s) * 100%);
		padding: 0 0.5em;
		transform: translate(var(--o), var(--o));
		opacity: 0.05;
		color: #fff;
		font: italic 900 4vmin/2 petit formal script;
		white-space: nowrap;
		text-align: center;
	}
	body:after {
		content: "Missing you every day";
	}
	body:before {
		content: "1st of June 1927 - 18th of January 2019";
	}

	div {
		--vi: 0;
		--vj: calc(1 - var(--vi));
		transform-style: preserve-3d;
	}

	div,
	::before,
	::after {
		grid-area: 1/1;
	}

	.side,
	::before,
	::after {
		--not-s: calc(1 - var(--s));
		--sgn-s: calc(2 * var(--s) - 1);
		backface-visibility: hidden;
	}

	.side:nth-child(1),
	::before {
		--s: 0;
	}

	.side:nth-child(3),
	::after {
		--s: 1;
	}

	.a3d {
		grid-gap: 9em;
		grid-template: 6em / repeat(var(--n), 6em);
		place-self: center;
		transform: rotatex(-35deg) rotatey(45deg);
	}

	.unit {
		--f: 0.5;
		--m: calc(0.5 * (var(--n) - 1));
		grid-area: 1 / calc(var(--i) + 1);
		transform: translatez(calc((var(--j) - var(--m)) * 15em))
			rotatey(calc(var(--p, 0) * 1turn));
	}

	.anim {
		animation: p var(--tr)
				cubic-bezier(
					var(--cx),
					calc(-1 * var(--cx)),
					calc(1 - var(--cx)),
					calc(1 + var(--cx))
				)
				var(--dt) infinite alternate,
			osc var(--to) ease-in-out infinite alternate;
	}

	@keyframes p {
		0%,
		25% {
			--p: 0;
		}
		75%,
		100% {
			--p: 0.5;
		}
	}
	@keyframes osc {
		0%,
		35% {
			--d: -3em;
		}
		65%,
		100% {
			--d: 3em;
		}
	}
	.shdw::before {
		transform: translatey(3.75em) rotatex(90deg);
		background: radial-gradient(rgba(0, 0, 0, 0.5), transparent);
		filter: blur(9px);
		content: "";
	}

	.cube {
		--vi: 1;
		--sat: 62%;
		place-self: center;
		width: 2em;
		height: 2em;
		transform: translatez(var(--d));
	}
	.cube::after {
		--s: 0.5;
		content: "";
	}

	.half {
		--dir: 0;
		transform: rotatey(calc(var(--dir) * 90deg));
	}
	.half:nth-child(2) {
		--dir: 1;
	}
	.half::before,
	.half::after {
		--sum: calc(var(--p) + 0.5 * var(--s) + 0.25 * var(--dir) + 1);
		content: "";
	}

	.gate {
		animation: f calc(0.5 * var(--to)) ease-in-out infinite alternate;
	}
	.gate::before {
		align-self: center;
		height: 1.5em;
	}

	@keyframes f {
		0%,
		35% {
			--f: 0.35;
		}
		100% {
			--f: 0.75;
		}
	}
	.later {
		--lat-w: 6em;
		--sgn-e: calc(2 * var(--e) - 1);
		grid-auto-flow: column;
		justify-content: center;
		place-self: center;
		width: var(--lat-w);
		height: 1.5em;
		transform: translatey(calc(-0.5 * var(--sgn-e) * var(--lat-w)))
			rotatex(90deg);
	}
	.later .side,
	.later::before,
	.later::after {
		--sum: calc(
			var(--p) + 0.25 + 0.5 * (var(--e) - var(--sgn-e) * var(--s)) + 1
		);
		grid-area: initial;
		width: inherit;
		transform-origin: calc(var(--not-s) * 100%);
		transform: rotatey(calc(var(--sgn-s) * var(--sgn-e) * 90deg));
	}

	.outer {
		--e: 1;
		grid-gap: 6em;
	}
	.outer::before,
	.outer::after {
		content: "";
	}

	.front::before,
	.front::after {
		--z: 0.75em;
		--sum: calc(var(--p) + var(--s) * 0.5 + 1);
		border: solid calc(0.5 * (1 - var(--f)) * 6em) currentcolor;
		background: transparent;
		content: "";
	}

	.inner {
		--e: 0;
		--lat-w: calc(var(--f) * 6em);
	}

	.side {
		--sum: calc(var(--p) + 0.25 + 0.5 * var(--s) + 1);
	}
	.anim .side:nth-child(2) {
		overflow: hidden;
	}
	.anim .side:nth-child(2)::after {
		place-self: center;
		width: 2em;
		height: 2em;
		transform: translatey(var(--d));
		background: radial-gradient(#000, transparent);
		filter: blur(9px);
		content: "";
	}
	.anim .side::before {
		margin: 3px 0;
		background: linear-gradient(45deg, hotpink 15%, gainsboro, gold 85%);
		animation: glow calc(0.5 * var(--to)) ease-out infinite alternate;
		content: "";
	}

	@keyframes glow {
		0%,
		35% {
			opacity: 0;
		}
		70%,
		100% {
			--f: 0.75;
		}
	}
`;

const TestComponent = () => {
	return (
		<TestComponentStyling>
			<div></div>
		</TestComponentStyling>
	);
};

export default TestComponent;
