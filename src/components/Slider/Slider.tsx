import React, { useEffect, useRef, useState } from "react";
import { SliderContainer, SliderWrapper } from "./Slider.styles";
import Arrow from "../Arrows/Arrows";

interface SliderProps {
	children: React.ReactNode[];
	orientation?: "horizontal" | "vertical";
	slideDistance?: number;
	gap?: number;
	mode?: "linear" | "loop";
}

const Slider = ({
	children,
	orientation = "horizontal",
	slideDistance,
	gap = 20,
}: SliderProps) => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [canSlidePrev, setCanSlidePrev] = useState(false);
	const [canSlideNext, setCanSlideNext] = useState(true);
	const isHorizontal = orientation === "horizontal";
	const slider = sliderRef.current;

	const updateArrowStates = () => {
		if (slider) {
			const {
				scrollLeft,
				scrollTop,
				scrollWidth,
				scrollHeight,
				clientWidth,
				clientHeight,
			} = slider;

			if (isHorizontal) {
				setCanSlidePrev(scrollLeft > 0);
				setCanSlideNext(scrollLeft < scrollWidth - clientWidth - 1);
			} else {
				setCanSlidePrev(scrollTop > 0);
				setCanSlideNext(scrollTop < scrollHeight - clientHeight - 1);
			}
		}
	};

	const scrollToIndex = (index: number) => {
		if (slider) {
			const container = slider;
			const targetItem = container.children[index] as HTMLElement;

			if (targetItem) {
				targetItem.scrollIntoView({
					behavior: "smooth",
					block: isHorizontal ? "nearest" : "center",
					inline: isHorizontal ? "center" : "nearest",
				});
			}
		}
	};

	const handleScroll = (direction: "next" | "prev") => {
		if (slider) {
			const container = slider;

			if (slideDistance) { // Pixel-based scrolling if slideDistance is provided
				const scrollAmount = direction === "next" ? slideDistance : -slideDistance;
				container.scrollBy({
					[isHorizontal ? "left" : "top"]: scrollAmount,
					behavior: "smooth",
				});
			} else { // Index-based scrolling (one item at a time)
				const totalItems = children.length;

				const newIndex =
					direction === "next"
						? Math.min(activeIndex + 1, totalItems - 1)
						: Math.max(activeIndex - 1, 0);

				if (newIndex !== activeIndex) {
					scrollToIndex(newIndex);
					setActiveIndex(newIndex);
				}
			}
		}
	};

	useEffect(() => {
		updateArrowStates();

		if (slider) {
			slider.addEventListener("scroll", updateArrowStates);
		}

		return () => {
			if (slider) {
				slider.removeEventListener("scroll", updateArrowStates);
			}
		};
	}, []);

	return (
		<SliderContainer orientation={orientation}>
			<Arrow
				direction="prev"
				orientation={orientation}
				onClick={() => handleScroll("prev")}
				disabled={!canSlidePrev}
			/>
			<SliderWrapper orientation={orientation} $gap={gap} ref={sliderRef}>
				{children}
			</SliderWrapper>
			<Arrow
				direction="next"
				orientation={orientation}
				onClick={() => handleScroll("next")}
				disabled={!canSlideNext}
			/>
		</SliderContainer>
	);
};

export default Slider;
