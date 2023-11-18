import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
import { Transaction } from "./pages/Transaction";
import Login from "./pages/Login/Login";
import Auth from "./components/Auth/Auth";
import Cashier from "./pages/Cashier/Cashier";
import { Home } from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import SetNewPassword from "./pages/ForgotPassword/SetNewPassword";
import UseAuth from "./components/Auth/ProtectedRoute";
import AdminRoute from "./components/Auth/AdminRoute";
import LoggedInRoute from "./components/Auth/LoggedInUserRoute";

function App() {
	return (
		<Box>
			<Auth>
			<Routes>
				<Route path="/" element={<LoggedInRoute><Login/></LoggedInRoute>} />
				<Route path="/cashier" element={<UseAuth><Home/></UseAuth>} />
				<Route path="/forgot-password" element={<ForgotPassword/>} />
				<Route path="/auth/reset-password" element={<SetNewPassword/>} />
				<Route path="/cashier-data" element={<AdminRoute><Cashier/></AdminRoute>} />
			</Routes>
			</Auth>
			
			
		</Box>
	);
}

export default App;
