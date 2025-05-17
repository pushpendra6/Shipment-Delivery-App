import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
	return (
		<div className="landing-container">
			<div className="top-header">
				<h2>Shippeddd</h2>
			</div>
			<header className="header">
				<h1>"Welcome to a world of fast and secure deliveries"</h1>
			</header>
			<div className="content-container">
				<div className="image-container">
					<div className="tag-list">
						<div className="inner">
							<img src="Shirt.jpg" alt="" className="tag" />
							<img src="T-Shirt.jpg" alt="" className="tag" />
							<img src="Jeans.jpg" alt="" className="tag" />
							<img src="Fromal-Shoes.jpg" alt="" className="tag" />
							<img src="Watch.jpg" alt="" className="tag" />
							<img src="Track-Pants.jpg" alt="" className="tag" />
							<div className="fade"></div>

							{/*Duplicate fro smooth looping */}
							<img src="Shirt.jpg" alt="" className="tag" />
							<img src="T-Shirt.jpg" alt="" className="tag" />
							<img src="Jeans.jpg" alt="" className="tag" />
							<img src="Fromal-Shoes.jpg" alt="" className="tag" />
							<img src="Watch.jpg" alt="" className="tag" />
							<img src="Track-Pants.jpg" alt="" className="tag" />
						</div>
					</div>
				</div>
				<div className="button-container">
					<h4>Already an User?</h4>
					<Link to="/login" className="btn">
						Login
					</Link>
					<h4>NEW User??</h4>
					<Link to="/register" className="btn">
						Register
					</Link>
				</div>
			</div>
			<footer className="footer">
				<p>Made by Pushpendra Singh Shekhawat</p>
			</footer>
		</div>
	);
};

export default LandingPage;
