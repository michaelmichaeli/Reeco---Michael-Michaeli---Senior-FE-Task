import styled from "styled-components";

export const SliderContainer = styled.div<{
	orientation: "horizontal" | "vertical";
}>`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: 100%;
	overflow: hidden;
	flex-direction: ${(props) =>
		props.orientation === "horizontal" ? "row" : "column"};
	position: relative;
`;

export const SliderWrapper = styled.div<{
	orientation: "horizontal" | "vertical";
	$gap: number
}>`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	flex-direction: ${(props) =>
		props.orientation === "horizontal" ? "row" : "column"};
	overflow: hidden;
	scroll-behavior: smooth;
	gap: ${(props) => props.$gap}px;
	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: 100%;
	overflow-x: ${(props) =>
		props.orientation === "horizontal" ? "auto" : "hidden"};
	overflow-y: ${(props) =>
		props.orientation === "vertical" ? "auto" : "hidden"};
	scrollbar-width: none;
`;
