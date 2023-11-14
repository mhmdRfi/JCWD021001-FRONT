import { Flex } from "@chakra-ui/react";

import { Navbar } from "../../components/navbar";
import { Cart } from "../Cart";
import { Promo } from "./promo";
import { Category } from "./category";

export const Home = () => {
	return (
		<Flex
			w={"100vw"}
			minH={"100vh"}
			bgColor={"var(--black-b-10, #FAFAFA)"}
		>
			<Flex w={"68%"} direction={"column"} pt={"32px"}>
				<Navbar />
				<Flex direction={"column"} w={"full"} align={"center"} justify={"center"} gap={"40px"}>
					<Promo />
					<Category />
				</Flex>
			</Flex>

			<Flex w={"32%"}>
				<Cart />
			</Flex>
		</Flex>
	);
};
