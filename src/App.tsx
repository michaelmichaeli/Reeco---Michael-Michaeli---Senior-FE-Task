import React from "react";
import Slider from "./components/Slider/Slider";
import ProductCard from "./components/ProductCard/ProductCard";
import Chip from "./components/Chip/Chip";

import "./App.css";

const products = [
  { id: 1, name: "Banana", description: "Ripe bananas", image: "banana.png" },
	{ id: 2, name: "Orange", description: "Citrus fruit", image: "orange.png" },
	{ id: 3, name: "Apple", description: "Fresh red apples", image: "apple.png" },
	{ id: 4, name: "Apple", description: "Fresh red apples", image: "apple.png" },
	{ id: 5, name: "Banana", description: "Ripe bananas", image: "banana.png" },
	{ id: 6, name: "Orange", description: "Citrus fruit", image: "orange.png" },
	{ id: 7, name: "Apple", description: "Fresh red apples", image: "apple.png" },
	{ id: 8, name: "Banana", description: "Ripe bananas", image: "banana.png" },
	{ id: 9, name: "Orange", description: "Citrus fruit", image: "orange.png" },
	{ id: 10, name: "Apple", description: "Fresh red apples", image: "apple.png" },
	{ id: 11, name: "Banana", description: "Ripe bananas", image: "banana.png" },
	{ id: 12, name: "Orange", description: "Citrus fruit", image: "orange.png" },
	{ id: 13, name: "Apple", description: "Fresh red apples", image: "apple.png" },
	{ id: 14, name: "Banana", description: "Ripe bananas", image: "banana.png" },
	{ id: 15, name: "Orange", description: "Citrus fruit", image: "orange.png" },
	{ id: 16, name: "Apple", description: "Fresh red apples", image: "apple.png" },
	{ id: 17, name: "Banana", description: "Ripe bananas", image: "banana.png" },
  { id: 18, name: "Orange", description: "Citrus fruit", image: "orange.png" },
  { id: 19, name: "Apple", description: "Fresh red apples", image: "apple.png" },
	{ id: 20, name: "Banana", description: "Ripe bananas", image: "banana.png" },
];

const categories = [
	{ id: 1, name: "Fresh Produce" },
	{ id: 2, name: "Pantry" },
	{ id: 3, name: "Baking" },
	{ id: 4, name: "Fresh Produce" },
	{ id: 5, name: "Pantry" },
	{ id: 6, name: "Baking" },
	{ id: 7, name: "Fresh Produce" },
	{ id: 8, name: "Pantry" },
	{ id: 9, name: "Baking" },
	{ id: 10, name: "Fresh Produce" },
	{ id: 11, name: "Pantry" },
	{ id: 12, name: "Baking" },
	{ id: 13, name: "Fresh Produce" },
	{ id: 14, name: "Pantry" },
	{ id: 15, name: "Baking" },
	{ id: 16, name: "Fresh Produce" },
	{ id: 17, name: "Pantry" },
	{ id: 18, name: "Baking" },
	{ id: 19, name: "Fresh Produce" },
	{ id: 20, name: "Pantry" },
	{ id: 21, name: "Baking" },
	{ id: 22, name: "Fresh Produce" },
	{ id: 23, name: "Pantry" },
	{ id: 24, name: "Baking" },
	{ id: 25, name: "Fresh Produce" },
	{ id: 26, name: "Pantry" },
	{ id: 27, name: "Baking" },
	{ id: 28, name: "Fresh Produce" },
	{ id: 29, name: "Pantry" },
	{ id: 30, name: "Baking" },
];

const App: React.FC = () => {
	return (
		<>
			<h1>Linear Card-Product Slider</h1>
			<Slider
				items={products}
				renderItem={(item) => <ProductCard item={item} />}
				orientation="horizontal"
				slideDistance={1000}
				gap={30}
				mode="linear"
			/>

			<h1>Linear Card-Product Slider - Limited Width</h1>
			<div className="850px-width-container" style={{ width: "850px" }}>
				<Slider
					items={products}
					renderItem={(item) => <ProductCard item={item} />}
					orientation="horizontal"
					slideDistance={250}
					gap={20}
					mode="linear"
				/>
			</div>

			<h1>Looping Vertical Chips Slider</h1>
			<div className="450px-height-container" style={{ height: "450px" }}>
				<Slider
					items={categories}
					renderItem={(item) => <Chip label={item.name} />}
					orientation="vertical"
					slideDistance={100}
					gap={15}
					mode="linear"
				/>
			</div>
		</>
	);
};

export default App;
