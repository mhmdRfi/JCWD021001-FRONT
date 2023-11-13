import { Box } from "@chakra-ui/react";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/home";

function App() {
	return (
		<Box>
			<Routes>
				<Route path="/" element={<Home/>} />
			</Routes>
		</Box>
	);
}

export default App;
