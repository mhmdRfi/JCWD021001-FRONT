/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Flex,
	Text,
	InputGroup,
	InputLeftElement,
	Input,
} from "@chakra-ui/react";
import { IconCalendar } from "@tabler/icons-react";
import { Product } from "./product";
import { IconUser } from "@tabler/icons-react";

export const Cart = () => {
	const now = new Date();
	const day: any = now.getDate();
	const month: any = now.getMonth();
	const year: any = now.getFullYear();
	const time = new Intl.DateTimeFormat("default", {
		hour12: true,
		hour: "numeric",
		minute: "numeric",
	}).format(now);

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	return (
		<Flex
			direction={"column"}
			bgColor={"white"}
			w={"100%"}
			p={"32px"}
			gap={"40px"}
		>
			<Text>No SBX1316513</Text>

			<Flex gap={"32px"}>
				<Flex>
					<IconCalendar />
					<Text>
						{day} {months[month]} {year}
					</Text>
				</Flex>
				<Flex gap={2}>
					<IconCalendar />
					<Text>{time}</Text>
				</Flex>
			</Flex>

			<InputGroup>
				<InputLeftElement
					pointerEvents="none"
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<IconUser width={"24px"} height={"24px"} />
				</InputLeftElement>
				<Input
					type="tel"
					placeholder="Name"
					variant={"unstyled"}
					h={"40px"}
				/>
			</InputGroup>

			<Flex gap={"16px"} direction={"column"}>
        <Text>Products</Text>
				<Product />
			</Flex>
		</Flex>
	);
};
