import React, { Component, Profiler } from "react";
import Header from "../components/Header/Header";
import Profile from "./Profile"
import styledComponents from "styled-components";

const AppWrapper= styledComponents.div`
	text-aling:center;
`;

class App extends Component {
	render() {
		return (
			<AppWrapper>
			 <Header/>
			 <Profile/>
			</AppWrapper>
		);
	}
}

export default App;
