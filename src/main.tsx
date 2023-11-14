import { createRoot } from "react-dom/client";
import App from "./App";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";
createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<ChakraProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</ChakraProvider>
	</BrowserRouter>
);
