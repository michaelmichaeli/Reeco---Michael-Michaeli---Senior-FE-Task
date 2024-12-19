import React from "react";
import { ChipContainer } from "./Chip.styles";

interface ChipProps {
	label: string;
}

const Chip: React.FC<ChipProps> = ({ label }) => {
	return <ChipContainer>{label}</ChipContainer>;
};

Chip.displayName = "Chip";

export default Chip;
