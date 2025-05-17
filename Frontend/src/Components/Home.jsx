import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";



const products = [
	{ id: 1, name: "Shirt", image: "Shirt.jpg", price: 10 },
	{ id: 2, name: "T-Shirt", image: "T-Shirt.jpg", price: 15 },
	{ id: 3, name: "Jeans", image: "Jeans.jpg", price: 20 },
	{ id: 4, name: "Watch", image: "Watch.jpg", price: 25 },
	{ id: 5, name: "Bag", image: "Bag.jpg", price: 30 },
	{ id: 6, name: "Track Pants", image: "Track-Pants.jpg", price: 35 },
	{ id: 7, name: "Sport Shoes", image: "Sport-Shoes.jpg", price: 40 },
	{ id: 8, name: "Sneakers", image: "Sneakers.jpg", price: 45 },
	{ id: 9, name: "Sunglass", image: "Sunglass.jpg", price: 50 },
	{ id: 10, name: "Perfume", image: "Perfume.jpg", price: 55 },
	{ id: 11, name: "Belt", image: "Belt.jpg", price: 18 },
	{ id: 12, name: "Formal Shoes", image: "Fromal-Shoes.jpg", price: 48 },
];

const Home = () => {
	const [cart, setCart] = useState([]);
	const navigate = useNavigate();

	const addToCart = (product) => {
		if (!cart.find((item) => item.id === product.id)) {
			setCart([...cart, product]);
		}
	};

	const handleLogout = () => {
		navigate("/");
	};

	const goToCheckout = () => {
		navigate("/checkout", { state: { cart } });
	};
	return (
		<div className="home-container">
			<header className="top-header">
				<h2>Shippeddd</h2>
				<div className="header-buttons">
					<button onClick={goToCheckout} className="btn-checkout">
						Checkout
					</button>
					<button onClick={handleLogout} className="btn-logout">
						Logout
					</button>
				</div>
			</header>
			<h1>Get Your choices SHIPPEDD!!</h1>
			<div className="products">
				{products.map((product) => (
					<div key={product.id} className="product">
						<img src={`/${product.image}`} alt={product.name} />
						<h2>{product.name}</h2>
						<p className="price">${product.price}</p>
						<button
							onClick={() => addToCart(product)}
							className="btn-add"
							style={{
								backgroundColor: cart.find((item) => item.id === product.id)
									? "green"
									: "#007bff",
							}}
							disabled={cart.find((item) => item.id === product.id)}
						>
							{cart.find((item) => item.id === product.id)
								? "ADDED!"
								: "Add to Bag"}
							{cart.find((item) => item.id === product.id) && (
								<span>&#10004;</span>
							)}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
