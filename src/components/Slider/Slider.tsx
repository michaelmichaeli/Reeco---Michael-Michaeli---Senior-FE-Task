import React, { useEffect, useRef, useState } from "react";
import { SliderContainer, SliderWrapper, SliderItem } from "./Slider.styles";
import Arrow from "../Arrows/Arrows";

interface SliderProps<T> {
	items: T[];
	renderItem: (item: T, index: number) => React.ReactNode;
	orientation?: "horizontal" | "vertical";
	slideDistance?: number;
	gap?: number;
	mode?: "linear" | "loop";
}

const Slider = <T,>({
	items,
	renderItem,
	orientation = "horizontal",
	slideDistance = 200,
	gap = 20,
	mode = "linear",
}: SliderProps<T>) => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [canSlidePrev, setCanSlidePrev] = useState(false);
	const [canSlideNext, setCanSlideNext] = useState(true);
	const isHorizontal = orientation === "horizontal";

	const updateArrowStates = () => {
		if (sliderRef.current) {
			const {
				scrollLeft,
				scrollTop,
				scrollWidth,
				scrollHeight,
				clientWidth,
				clientHeight,
			} = sliderRef.current;

			if (isHorizontal) {
				setCanSlidePrev(scrollLeft > 0);
				setCanSlideNext(scrollLeft < scrollWidth - clientWidth - 1);
			} else {
				setCanSlidePrev(scrollTop > 0);
				setCanSlideNext(scrollTop < scrollHeight - clientHeight - 1);
			}
		}
	};

	const handleNext = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({
				[isHorizontal ? "left" : "top"]: slideDistance,
				behavior: "smooth",
			});
		}
	};

	const handlePrev = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({
				[isHorizontal ? "left" : "top"]: -slideDistance,
				behavior: "smooth",
			});
		}
	};

	useEffect(() => {
		updateArrowStates();
		const slider = sliderRef.current;

		if (slider) {
			slider.addEventListener("scroll", updateArrowStates);
			return () => slider.removeEventListener("scroll", updateArrowStates);
		}
	}, [isHorizontal]);

	return (
		<SliderContainer orientation={orientation}>
			<Arrow
				direction="prev"
				orientation={orientation}
				onClick={handlePrev}
				disabled={!canSlidePrev}
			/>
			<SliderWrapper orientation={orientation} gap={gap} ref={sliderRef}>
				{items.map((item, index) => (
					<SliderItem key={index}>{renderItem(item, index)}</SliderItem>
				))}
			</SliderWrapper>
			<Arrow
				direction="next"
				orientation={orientation}
				onClick={handleNext}
				disabled={!canSlideNext}
			/>
		</SliderContainer>
	);
};

export default Slider;
