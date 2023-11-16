import { Flex } from "@chakra-ui/react";

import { Navbar } from "../../components/navbar";
import { Cart } from "../Cart";
import { Promo } from "./promo";
import { Category } from "./category";
import { useState } from "react"

export const Home : React.FC= () => {

	const [ productName, setProductName ] = useState<string>()

	return (
		<Flex
			maxW={"100vw"}
			minH={"100vh"}
			bgColor={"var(--black-b-10, #FAFAFA)"}
			overflowY={"hidden"}
		>
			<Flex w={"68%"} direction={"column"} pt={"32px"}>
				<Navbar setProductName ={setProductName} />
				<Flex direction={"column"} w={"full"} align={"center"} justify={"center"} gap={"40px"}>
					<Promo />
					<Category productName={productName}/>
				</Flex>
			</Flex>

			<Flex w={"32%"}>
				<Cart />
			</Flex>
		</Flex>
	);
};
