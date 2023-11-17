/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Flex,
	Text,
	InputGroup,
	InputLeftElement,
	Input,
	Button,
} from "@chakra-ui/react";
import { IconCalendar } from "@tabler/icons-react";
import { Product } from "./product";
import { IconUser } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { IconArmchair } from "@tabler/icons-react";
import { IconPaperBag } from "@tabler/icons-react";
import { IconNumber } from "@tabler/icons-react";

export const Cart = () => {
	const [name, setName] = useState<string>();
	const [activeButton, setActiveButton] = useState<string>("dinein");
	const [randomCode, setRandomCode] = useState<string>();
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

	const codeTransaction = () => {
		const reandomNum = Math.random().toString().slice(2, 10);
		setRandomCode(reandomNum);
	};

	useEffect(() => {
		codeTransaction();
	}, []);

	return (
		<Flex
			direction={"column"}
			bgColor={"white"}
			p={"32px"}
			gap={"30px"}
			position={"fixed"}
		>
			<Text display={"flex"} gap={"8px"}>
				<IconNumber /> SBX{randomCode}
			</Text>

			<Flex gap={"32px"}>
				<Flex gap={2}>
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

			<InputGroup ml={"-9px"}>
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
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</InputGroup>

			<Flex justify={"space-around"}>
				<Button
					w={"166px"}
					h={"100px"}
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"center"}
					alignItems={"center"}
					border={"1px solid "}
					sx={
						activeButton == "dinein"
							? {
									borderColor: "var(--brand-brand-500, #286043)",
									background:
										"var(--semantic-success-success-50, #EAF6EB)",
									color: "var(--brand-brand-500, #286043)",
							  }
							: {
									borderColor: "transparent",
									background: "var(--black-b-20, #F5F5F5)",
							  }
					}
					borderRadius={"16px"}
					onClick={() => setActiveButton("dinein")}
				>
					<IconArmchair width={"24px"} height={"24px"} />
					<Text fontSize={"14px"} fontWeight={600}>
						Dine-in
					</Text>
				</Button>

				<Button
					w={"166px"}
					h={"100px"}
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"center"}
					alignItems={"center"}
					border={"1px solid "}
					sx={
						activeButton == "takeaway"
							? {
									borderColor: "var(--brand-brand-500, #286043)",
									background:
										"var(--semantic-success-success-50, #EAF6EB)",
									color: "var(--brand-brand-500, #286043)",
							  }
							: {
									borderColor: "transparent",
									background: "var(--black-b-20, #F5F5F5)",
							  }
					}
					borderRadius={"16px"}
					onClick={() => setActiveButton("takeaway")}
				>
					<IconPaperBag width={"24px"} height={"24px"} />
					<Text fontSize={"14px"} fontWeight={600}>
						Take-away
					</Text>
				</Button>
			</Flex>

			<Flex gap={"16px"} direction={"column"}>
				<Text>Products</Text>
				<Product
					name={name || "Customer"}
					codeTransaction={randomCode}
				/>
			</Flex>
		</Flex>
	);
};
