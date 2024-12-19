import React, {
	useRef,
	useState,
	useCallback,
	useLayoutEffect,
	useEffect,
} from "react";
import { SliderContainer, SliderWrapper } from "./Slider.styles";
import Arrow from "../Arrows/Arrows";

interface SliderProps {
	children: React.ReactNode[];
	orientation?: "horizontal" | "vertical";
	translateInPixels?: number;
	gap?: number;
	mode?: "linear" | "loop";
}

const Slider = ({
	children,
	orientation = "horizontal",
	translateInPixels,
	gap = 20,
}: SliderProps) => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);
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

	const scrollToIndex = (index: number) => {
		if (sliderRef.current) {
			const targetItem = sliderRef.current.children[index] as HTMLElement;
			if (targetItem) {
				targetItem.scrollIntoView({
					behavior: "smooth",
					block: isHorizontal ? "nearest" : "start",
					inline: isHorizontal ? "center" : "nearest",
				});
			}
		}
	};

	const handleScroll = (direction: "next" | "prev") => {
		if (sliderRef.current) {
			if (translateInPixels) {
				// Pixel-based scrolling if translateInPixels is provided
				const scrollAmount =
					direction === "next" ? translateInPixels : -translateInPixels;
				sliderRef.current.scrollBy({
					[isHorizontal ? "left" : "top"]: scrollAmount,
					behavior: "smooth",
				});
			} else {
				// Index-based scrolling (one item at a time)
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

		if (sliderRef.current) {
			sliderRef.current.addEventListener("scroll", updateArrowStates);
		}

		return () => {
			if (sliderRef.current) {
				sliderRef.current.removeEventListener("scroll", updateArrowStates);
			}
		};
	}, [updateArrowStates]);

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
