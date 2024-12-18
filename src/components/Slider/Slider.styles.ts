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
	display: flex;
	align-items: center;
	position: relative;
	width: 100%; /* Ensures the container fits the parent width */
	overflow: hidden; /* Prevents overflowing items from being visible */
	flex-direction: ${(props) =>
		props.orientation === "horizontal" ? "row" : "column"};
`;

export const SliderWrapper = styled.div<{
	orientation: "horizontal" | "vertical";
	gap: number;
}>`
	display: flex;
	flex-direction: ${(props) =>
		props.orientation === "horizontal" ? "row" : "column"};
	overflow: hidden;
	scroll-behavior: smooth;
	gap: ${(props) => props.gap}px;
	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: 100%;
	display: flex;
	flex-direction: ${(props) =>
		props.orientation === "horizontal" ? "row" : "column"};
	overflow-x: ${(props) =>
		props.orientation === "horizontal" ? "auto" : "hidden"};
	overflow-y: ${(props) =>
		props.orientation === "vertical" ? "auto" : "hidden"};
	scroll-behavior: smooth;
	gap: ${(props) => props.gap}px;
	width: 100%; /* Match the parent's width */
	height: auto;

	&::-webkit-scrollbar {
		display: none; /* Hides the scrollbar for a clean design */
	}
`;

export const SliderItem = styled.div`
	flex: 0 0 auto;
	// transition: transform 0.3s ease-in-out;
    flex: 0 0 auto; /* Prevents items from growing or shrinking */
  width: auto; /* Adapts to the content width */
  max-width: 100%; /* Ensures the item doesn't exceed its container width */
  transition: transform 0.3s ease-in-out;
`;
