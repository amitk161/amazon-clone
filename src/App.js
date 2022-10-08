import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
	const [{ user }, dispatch] = useStateValue();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route
						path="/checkout"
						element={
							<>
								<Header />
								<Checkout />
							</>
						}
					></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
							</>
						}
					></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
