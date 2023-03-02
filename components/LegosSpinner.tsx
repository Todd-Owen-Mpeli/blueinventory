import styles from "../styles/components/LegosSpinner.module.scss";
import styled from "styled-components";

// Image Icons
const Lego = styled.div`
	$height: 100px;
	height: 50vh;
	background-color: rgba(39, 94, 254, 0.95);

	.LogoContainer {
		position: relative;
		top: 0%;
		left: 50%;
		width: 0px;
		height: 0px;
		padding: 125px 0px;
		transform: rotateX(50deg) rotateZ(45deg);
	}

	.lego {
		position: absolute;
		top: 0;
		left: 0;
		height: 100px;
		width: 100px;
		-webkit-animation: legoMoves 6s cubic-bezier(0.54, 0.09, 0.86, 0.36)
			infinite;
		animation: legoMoves 6s cubic-bezier(0.54, 0.09, 0.86, 0.36) infinite;
	}

	.lego:before,
	.lego:after {
		content: "";
		position: absolute;
	}
	.lego:before {
		top: 100%;
		left: 0;
		height: 60px;
		width: 100px;
		transform: skewX(45deg) translate(30px, 0);
	}
	.lego:after {
		height: 100px;
		width: 60px;
		top: 0;
		right: 0;
		transform: skewY(45deg) translate(60px, -30px);
	}
	.lego .circles {
		position: absolute;
		left: 50%;
		height: 30px;
		width: 30px;
		margin: -22.22222222px 0 0 -22.22222222px;
	}
	.lego .circles:before,
	.lego .circles:after {
		content: "";
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 50%;
	}
	.lego .circles:before {
		left: -24.33px;
	}
	.lego .circles:after {
		right: -24.33px;
	}
	.lego .circles-1 {
		top: 25%;
	}
	.lego .circles-2 {
		top: 75%;
	}
	.lego-4 {
		background-color: #f9eb2f;
		-webkit-animation-delay: 4.8s;
		animation-delay: 4.8s;
	}
	.lego-4:before {
		background-color: #eede07;
	}
	.lego-4:after {
		background-color: #bdb005;
	}
	.lego-4 .circles:before,
	.lego-4 .circles:after {
		background-color: #f9eb2f;
		box-shadow: 6px 6px 0px 1px #bdb005;
	}
	.lego-3 {
		background-color: #63d2f3;
		-webkit-animation-delay: 3.6s;
		animation-delay: 3.6s;
	}
	.lego-3:before {
		background-color: #34c4ef;
	}
	.lego-3:after {
		background-color: #11b0df;
	}
	.lego-3 .circles:before,
	.lego-3 .circles:after {
		background-color: #63d2f3;
		box-shadow: 6px 6px 0px 1px #11b0df;
	}
	.lego-2 {
		background-color: #9ed027;
		-webkit-animation-delay: 2.4s;
		animation-delay: 2.4s;
	}
	.lego-2:before {
		background-color: #7da51f;
	}
	.lego-2:after {
		background-color: #5d7a17;
	}
	.lego-2 .circles:before,
	.lego-2 .circles:after {
		background-color: #9ed027;
		box-shadow: 6px 6px 0px 1px #5d7a17;
	}
	.lego-1 {
		background-color: #eb413b;
		-webkit-animation-delay: 1.2s;
		animation-delay: 1.2s;
	}
	.lego-1:before {
		background-color: #dc1d17;
	}
	.lego-1:after {
		background-color: #ae1712;
	}
	.lego-1 .circles:before,
	.lego-1 .circles:after {
		background-color: #eb413b;
		box-shadow: 6px 6px 0px 1px #ae1712;
	}
	.lego-0 {
		background-color: #ff9d52;
		-webkit-animation-delay: 0s;
		animation-delay: 0s;
	}
	.lego-0:before {
		background-color: #ff801f;
	}
	.lego-0:after {
		background-color: #eb6600;
	}
	.lego-0 .circles:before,
	.lego-0 .circles:after {
		background-color: #ff9d52;
		box-shadow: 6px 6px 0px 1px #eb6600;
	}
	@-webkit-keyframes legoMoves {
		0%,
		4.166%,
		95.795%,
		100% {
			transform: translate(0, 0);
			z-index: 10;
		}
		8.33% {
			transform: translate(100px, 0);
			z-index: 10;
		}
		23.3% {
			transform: translate(100px, 0);
			z-index: 40;
		}
		24.99% {
			transform: translate(100px, 100px);
			z-index: 50;
		}
		41.66% {
			transform: translate(100px, 100px);
			z-index: 60;
		}
		45.815%,
		54.145% {
			transform: translate(100px, 200px);
			z-index: 60;
		}
		58.31% {
			transform: translate(0, 200px);
			z-index: 60;
		}
		72.9025% {
			transform: translate(0, 200px);
			z-index: 30;
		}
		74.97% {
			transform: translate(0, 100px);
			z-index: 20;
		}
		91.63% {
			transform: translate(0, 100px);
			z-index: 10;
		}
	}

	@keyframes legoMoves {
		0%,
		4.166%,
		95.795%,
		100% {
			transform: translate(0, 0);
			z-index: 10;
		}
		8.33% {
			transform: translate(100px, 0);
			z-index: 10;
		}
		23.3% {
			transform: translate(100px, 0);
			z-index: 40;
		}
		24.99% {
			transform: translate(100px, 100px);
			z-index: 50;
		}
		41.66% {
			transform: translate(100px, 100px);
			z-index: 60;
		}
		45.815%,
		54.145% {
			transform: translate(100px, 200px);
			z-index: 60;
		}
		58.31% {
			transform: translate(0, 200px);
			z-index: 60;
		}
		72.9025% {
			transform: translate(0, 200px);
			z-index: 30;
		}
		74.97% {
			transform: translate(0, 100px);
			z-index: 20;
		}
		91.63% {
			transform: translate(0, 100px);
			z-index: 10;
		}
	}
`;

const LegosSpinner = () => {
	return (
		<Lego className="Lego">
			<div className="LogoContainer">
				<div className="lego lego-4">
					<div className="circles circles-1"></div>
					<div className="circles circles-2"></div>
				</div>
				<div className="lego lego-3">
					<div className="circles circles-1"></div>
					<div className="circles circles-2"></div>
				</div>
				<div className="lego lego-2">
					<div className="circles circles-1"></div>
					<div className="circles circles-2"></div>
				</div>
				<div className="lego lego-1">
					<div className="circles circles-1"></div>
					<div className="circles circles-2"></div>
				</div>
				<div className="lego lego-0">
					<div className="circles circles-1"></div>
					<div className="circles circles-2"></div>
				</div>
			</div>
		</Lego>
	);
};

export default LegosSpinner;
