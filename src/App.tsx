import { Box } from "@chakra-ui/react";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
	return (
		<Box fontFamily={"SoDo Sans"}>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/" element={<Home/>} />
			</Routes>
		</Box>
	);
}

export default App;
