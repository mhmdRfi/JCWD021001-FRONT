/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Box,
	Flex,
	Image,
	InputGroup,
	InputLeftElement,
	Input,
	Text,
	Avatar,
} from "@chakra-ui/react";
import Logo from "../../assets/ee8e2ef267a626690ecec7c84a48cfd4.png";
import { IconSearch } from "@tabler/icons-react";


export const Navbar = ( {setProductName} : any ) => {

	return (
		<Box>
			<Flex
				gap={"16px"}
				align={"center"}
				justify={"space-between"}
				h={"100%"}
				mx={42}
			>
				<Flex align={"center"} w={"72px"} h={"72.9px"}>
					<Image src={Logo} />
				</Flex>

				<InputGroup w={"fit-content"}>
					<InputLeftElement
						pointerEvents="none"
						alignItems={"center"}
						display={"flex"}
						h={"100%"}
						pl={"20px"}
					>
						<IconSearch
							color="#858585"
							stroke={1.5}
							width={24}
							height={24}
						/>
					</InputLeftElement>
					<Input
						type="search"
						placeholder="Search"
						display={"flex"}
						alignItems={"center"}
						h={"56px"}
						w={"581px"}
						borderRadius={" 200px"}
						border="1px solid var(--black-b-200, #666)"
						font-family="SoDo Sans"
						pl={"50px"}
						onChange={(e) => setProductName(e.target.value)}
					/>
				</InputGroup>

				<Flex minW={"220px"} justify={"center"} align={"center"}>
					<Flex align={"center"} gap={"16px"}>
						<Box>
							<Box
								w={"56px"}
								h={"56px"}
								borderRadius={"100%"}
								overflow={"hidden"}
							>
								<Avatar
									name="Dan Abrahmov"
									src="https://bit.ly/dan-abramov"
									w={"56px"}
									h={"56px"}
								/>
							</Box>
						</Box>
						<Box
							display={"flex"}
							flexDirection={"column"}
							gap={"8px"}
						>
							<Text m={0}>Tengku Chairu Abda</Text>
							<Text
								m={0}
								fontSize={"14px"}
								color="var(--black-b-70, #A3A3A3)"
							>
								Barista
							</Text>
						</Box>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
};
