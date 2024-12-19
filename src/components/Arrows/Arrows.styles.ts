import styled from "styled-components";

export const ArrowButton = styled.button<{
	direction: "prev" | "next";
	orientation: "horizontal" | "vertical" | undefined;
}>`
	position: relative;
	width: 80px;
	height: 80px;
	min-width: 80px;
	min-height: 80px;
	${(props) =>
		props.orientation === "horizontal"
			? props.direction === "prev"
				? "left: 20px;"
				: "right: 20px;"
			: props.direction === "prev"
			? "top: 20px;"
			: "bottom: 20px;"}
	opacity: ${(props) => (props.disabled ? "0.1" : " 0.8")};
	color: white;
	background-color: rgba(255, 255, 255, 0.5);
	border: none;
	border-radius: 50%;
	cursor: ${(props) => (props.disabled ? "default" : "pointer")};
	transition: opacity 0.3s ease, transform 0.1s;
	font-size: xxx-large;

	&:hover {
		opacity: ${(props) => (props.disabled ? "0.3" : "0.8")};
	}

	&:active {
		transform: ${(props) => (props.disabled ? "none" : "scale(0.85)")};
	}
`;
