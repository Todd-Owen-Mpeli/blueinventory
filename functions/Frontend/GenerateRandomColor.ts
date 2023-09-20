export const getRandomColor = () => {
	const colors = [
		"blue",
		"purple",
		"yellow",
		"pinkRed",
		"brightGreen",
		"darkPinkRed",
	];
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
};
