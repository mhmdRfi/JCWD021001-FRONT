import { Box } from "@chakra-ui/react";

import { Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Auth from "./components/Auth/Auth";
import Register from "./pages/Register/Register";
import Cashier from "./pages/Cashier/Cashier";
import { Home } from "./pages/Home/Home";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import SetNewPassword from "./pages/ForgotPassword/SetNewPassword";

function App() {
	return (
		<Box>
			<Auth>
			<Routes>
				<Route path="/home" element={<Home/>} />
				<Route path="/" element={<Login/>} />
				<Route path="/forgot-password" element={<ForgotPassword/>} />
				<Route path="/auth/reset-password" element={<SetNewPassword/>} />
				<Route path="/register" element={<Register/>} />
				<Route path="/cashier-data" element={<Cashier/>} />
			</Routes>
			</Auth>
			
		</Box>
	);
}

export default App;
