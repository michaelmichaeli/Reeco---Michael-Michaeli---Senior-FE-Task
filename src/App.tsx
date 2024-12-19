import React from "react";
import Slider from "./components/Slider/Slider";
import ProductCard from "./components/ProductCard/ProductCard";
import Chip from "./components/Chip/Chip";

import "./App.css";

const products = Array.from({ length: 20 }, (_, i) => ({
	id: i + 1,
	name: ["Banana", "Orange", "Apple"][i % 3],
	description: ["Ripe bananas", "Citrus fruit", "Fresh red apples"][i % 3],
	image: ["banana.png", "orange.png", "apple.png"][i % 3],
}));

const categories = Array.from({ length: 30 }, (_, i) => ({
	id: i + 1,
	name: ["Fresh Produce", "Pantry", "Baking"][i % 3],
}));

const App: React.FC = () => {
	return (
		<div className="App">

			<h1>My Slider Component</h1>

			<section style={{ width: "100%" }}>
				<h2>Horizontal Product Cards Slider (slides: 1000px)</h2>
				<Slider
					orientation="horizontal"
					slideDistance={1000}
					gap={30}
				>
					{products.map((product) => (
						<ProductCard item={product} key={product.id} />
					))}
				</Slider>
			</section>

			<section style={{ width: "100%" }}>
				<h2>Horizontal Category Chips Slider (slides: 600px)</h2>
				<Slider
					orientation="horizontal"
					slideDistance={600}
					gap={5}
				>
					{categories.map((category) => (
						<Chip label={category.name} key={category.id} />
					))}
				</Slider>
			</section>

			<section style={{ width: "450px" }}>
				<h2>Product Cards Slider (slides: item)</h2>
				<Slider
					orientation="horizontal"
					gap={20}
				>
					{products.map((product) => (
						<ProductCard item={product} key={product.id} />
					))}
				</Slider>
			</section>

			<section style={{ height: "750px" }}>
				<h2>Vertical Category Chips Slider</h2>
				<Slider
					orientation="vertical"
					slideDistance={500}
					gap={15}
				>
					{categories.map((category) => (
						<Chip label={category.name} key={category.id} />
					))}
				</Slider>
			</section>

		</div>
	);
};

export default App;
