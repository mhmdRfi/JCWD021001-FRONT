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
import AdminRoute from "./components/Auth/AdminRoute";
import {LoggedInRoute, LogInRoute} from "./components/Auth/LoggedInUserRoute";

function App() {
	return (
		<Box>
			<Auth>
				<Routes>
					<Route path="/" element={<LogInRoute><Login /></LogInRoute>} />
					<Route
						path="/cashier"
						element={
							<LoggedInRoute>
								<Home />
							</LoggedInRoute>
						}
					/>
					<Route
						path="/transaction"
						element={
							<LoggedInRoute>
								<Transaction />
							</LoggedInRoute>
						}
					/>
					<Route
						path="/forgot-password"
						element={<ForgotPassword />}
					/>
					<Route
						path="/auth/reset-password"
						element={<SetNewPassword />}
					/>
					<Route
						path="/cashier-data"
						element={
							<AdminRoute>
								<Cashier />
							</AdminRoute>
						}
					/>
				</Routes>
			</Auth>
		</Box>
	);
}

export default App;
