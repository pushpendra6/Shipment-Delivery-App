const User = require("../Model/userModel");
const bcrypt = require('bcrypt');

const createUser = async(req, res) => {
	try {
		const { name, email, password } = req.body;

		// Check if all fields are present
		if (!name || !email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "Email already exists" });
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create and save user
		const newUser = new User({ name, email, password: hashedPassword });
		await newUser.save();

		res.status(201).json({ message: "User created successfully" });
	} catch (err) {
		res.status(500).json({ message: "Server error", error: err.message });
	}
}

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Check for email and password
		if (!email || !password) {
			return res
				.status(400)
				.json({ message: "Email and password are required" });
		}

		// Find user by email
		const user = await User.findOne({ email });
		if (!user) {
			return res
				.status(404)
				.json({ message: "User not found with this email" });
		}

		// Compare passwords
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(401).json({ message: "Invalid password" });
		}

		// Generate JWT token
		// const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });

		res.status(200).json({ message: "Login successful"});
	} catch (err) {
		res.status(500).json({ message: "Server error", error: err.message });
	}
};

module.exports = { createUser, loginUser };
