import { Box } from "@chakra-ui/react";

import { Routes, Route } from "react-router-dom";
// import "./App.css";
import { Home } from "./pages/Home/home";
import { ProductLists } from './pages/ProductLists/ProductLists'
import { ProductDetail } from './pages/ProductDetail/ProductDetail'
import { SidebarWithHeader } from './components/SideBar/SideBar'
import { Report } from './pages/Report/Report'
import { AddProduct } from './pages/AddProduct/AddProduct'
import { EditProduct } from './pages/EditProduct/EditProduct'
import { CategoryLists } from './pages/CategoryLists/CategoryLists'
import { DashboardAdmin } from './pages/DashboardAdmin/DashboardAdmin'
import { TransactionDetail } from './pages/TransactionDetail/TransactionDetail'

function App() {
	return (
		<Box>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/product-lists" element={<ProductLists/>} />
				<Route path="/product-detail" element={<ProductDetail/>} />
				<Route path="/sidebar" element={<SidebarWithHeader/>} />
				<Route path="/report" element={<Report/>} />
				<Route path='/add-product' element={<AddProduct />} />
				<Route path='/product-detail/:id' element={<ProductDetail />} />
				<Route path='/edit-product/:id' element={<EditProduct />} />
				<Route path='/category-lists' element={<CategoryLists />} />
				<Route path='/dashboard-admin' element={<DashboardAdmin />} />
				<Route path='/transaction-detail/:transactionId' element={<TransactionDetail />} />
			</Routes>
		</Box>
	);
}

export default App;
