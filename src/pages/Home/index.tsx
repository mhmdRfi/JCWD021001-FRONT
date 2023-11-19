import { Flex } from "@chakra-ui/react";

import { Navbar } from "../../components/navbar";
import { Cart } from "../Cart";
import { Promo } from "./promo";
import { Category } from "./category";
import { useState } from "react";

export const Home: React.FC = () => {
	const [productName, setProductName] = useState<string>();
	return (
		<Flex
			maxW={"100vw"}
			minH={"100vh"}
			bgColor={"var(--black-b-10, #FAFAFA)"}
			overflowY={"hidden"}
		>
			<Flex
				w={{ sm: "100%", md: "65%", lg: "68%" }}
				direction={"column"}
				py={"32px"}
			>
				<Navbar setProductName={setProductName} />
				<Flex
					direction={"column"}
					w={"full"}
					align={"center"}
					justify={"center"}
					gap={"40px"}
					px={"10px"}
				>
					<Promo />
					<Category productName={productName} />
				</Flex>
			</Flex>

			<Flex
				w={{ md: "35%", lg: "32%" }}
				position={"fixed"}
				right={0}
				display={{ sm: "none", md: "block" }}
				h={"100%"}
			>
				<Cart />
			</Flex>

			{/* <Box position={"fixed"} right={"-10px"} top={380} display={{ md: "flex", lg: "none"}}>
				<Button colorScheme="teal" onClick={onOpen} size={"xm"} w={"50px"} h={"50px"}>
					Open
				</Button>

				<Drawer isOpen={isOpen} onClose={onClose}>
					<DrawerContent>
						<DrawerBody>
							<Cart/>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</Box> */}
		</Flex>
	);
};
