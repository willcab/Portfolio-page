import React from "react";
import "./Header.css";
import logo from '../../GitHub-Mark-Light-64px.png'
const Header = () => (
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<h1>
			My github Portfolio
		</h1>
	</header>
);
export default Header;
