import { createRoot } from "react-dom/client";
import App from "./App";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./redux/store";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
	<ChakraProvider>
	<BrowserRouter>
		<ChakraProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</ChakraProvider>
	</BrowserRouter>
	</ChakraProvider>
	</Provider>
);
