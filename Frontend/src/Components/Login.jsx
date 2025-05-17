import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	const handleLogin = async (e) => {
		e.preventDefault();

		if (!email && !password) {
			setError("Missing credentials");
			enqueueSnackbar("Email and Password are required!", { variant: "error" });
			return;
		}
		if (!email) {
			setError("Email is required");
			enqueueSnackbar("Email is required!", { variant: "error" });
			return;
		}

		if (!password) {
			setError("Password is required");
			enqueueSnackbar("Password is required!", { variant: "error" });
			return;
		}

		try {
			const response = await fetch("http://localhost:5000/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});
			console.log(response);
			const data = await response.json();
			console.log(data);
			if (!response.ok) {
				setError(data.message || "Login failed");
                enqueueSnackbar(data.message, { variant: "error" });
				return;
			}

			// Store token in localStorage (optional)
			// localStorage.setItem('token', data.token);
			enqueueSnackbar("Welcome to HomePage", { variant: "success" });
			navigate("/home");
		} catch (err) {
			setError("Something went wrong");
			enqueueSnackbar("Invalid Details", { variant: "error" });
			alert(err);
		}
	};
	return (
		<div className="login-container">
			<div className="top-header">
				<h2>Shippeddd</h2>
			</div>
			<header className="header">
				<h1>"Welcome to a world of fast and secure deliveries"</h1>
			</header>
			<div className="content-container">
				<div className="image-container">
					<img src="Landing.png" alt="Landing" />
				</div>
				<div className="form-container">
					<h2>Login</h2>
					<form onSubmit={handleLogin}>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type="submit">Login</button>
						{error && <p className="error">{error}</p>}
					</form>
				</div>
			</div>
			<footer className="footer">
				<p>Made by Pushpendra Singh Shekhawat</p>
			</footer>
		</div>
	);
};

export default Login;
