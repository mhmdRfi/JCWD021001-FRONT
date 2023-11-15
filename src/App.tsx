import { Box } from "@chakra-ui/react";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Transaction } from "./pages/Transaction";

function App() {
	return (
		<Box fontFamily={"SoDo Sans"}>
			<Routes>
				<Route path="/cashier" element={<Home/>} />
				<Route path="/transaction" element={<Transaction/>} />
			</Routes>
		</Box>
	);
}

export default App;
