import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = (event) => {
		event.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				navigate("/");
			})
			.catch((e) => alert(e.message));
	};

	const register = (event) => {
		event.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				navigate("/");
			})
			.catch((e) => alert(e.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
					alt="login"
				/>
			</Link>

			<div className="login__container">
				<h1>Sign in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						type="email"
					/>
					<h5>Password</h5>
					<input
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						type="password"
					/>
					<button onClick={login} type="submit" className="login__signInButton">
						Sign In
					</button>
				</form>

				<p>
					By signing-in you agree to Amazon's Conditions of Use & Sale. Please
					see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
					Notice.
				</p>
				<button onClick={register} className="login__registerButton">
					Create your Amazon account
				</button>
			</div>
		</div>
	);
}

export default Login;
