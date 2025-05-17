import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useSnackbar } from "notistack";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

	const handleRegister = async (e) => {
		e.preventDefault();

		if (!name && !email && !password) {
			setError("Missing credentials");
			enqueueSnackbar("All fields are required!", { variant: "error" });
			return;
		}
		try {
			const response = await fetch("http://localhost:5000/users/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, password }),
			});

			const data = await response.json();

			if (!response.ok) {
				setError(data.message || "Login failed");
        enqueueSnackbar(data.message, { variant: "error" });
				return;
			}
      enqueueSnackbar("User Registered Successfully!", { variant: "success" });
			navigate("/home");
		} catch (err) {
        setError('Something went wrong');
        enqueueSnackbar(err, { variant: "error" });
    }
	};

	return (
		<div className="register-container">
			<div className="top-header">
				<h2>Shippeddd</h2>
			</div>
			<header className="header">
				<h1>"Welcome to a world of fast and secure deliveries"</h1>
			</header>
			<div className="content-container">
				<div className="image-container">
					<img src="/landing.jpg" alt="Landing" />
				</div>
				<div className="form-container">
					<h2>Register</h2>
					<form onSubmit={handleRegister}>
						<input
							type="text"
							placeholder="Full Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
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
						<button type="submit">Register</button>
						{error && <p className="error">{error}</p>}
					</form>
				</div>
			</div>
			<footer className="footer">
				<p>Made by Shekhawat</p>
			</footer>
		</div>
	);
};

export default Register;
