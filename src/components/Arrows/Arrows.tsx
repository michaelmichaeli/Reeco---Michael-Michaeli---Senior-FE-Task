import React from "react";
import { ArrowButton } from "./Arrows.styles";

interface ArrowProps {
	direction: "prev" | "next";
	orientation?: "horizontal" | "vertical";
	onClick: () => void;
	disabled?: boolean;
}

const Arrow: React.FC<ArrowProps> = ({
	direction,
	orientation,
	onClick,
	disabled,
}) => {
	return (
		<ArrowButton
			direction={direction}
			orientation={orientation}
			onClick={onClick}
			disabled={disabled}
		>
      {
        orientation === "horizontal"
				? direction === "prev"
					? "<"
					: ">"
				: direction === "prev"
				  ? "^"
          : "v"
      }
		</ArrowButton>
	);
};

export default Arrow;
