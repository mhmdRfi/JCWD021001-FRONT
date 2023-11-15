/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Button } from "@chakra-ui/react";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

export const Payment = ({ setActive }: any) => {
	const [isDisableButton, setIsDisableButton] = useState<any>(true);
	return (
		<Flex direction={"column"} justify={"space-between"} h={"100%"}>
			<Flex w={"full"} gap={"30px"} direction={"column"}>
				<Button
					display="flex"
					padding="32px"
					justifyContent="space-between"
					alignItems="center"
					alignSelf="stretch"
					borderRadius="16px"
					border="1px solid var(--black-b-30, #EBEBEB)"
					background="var(--black-b-0, #FFF)"
					w={"full"}
					cursor={"pointer"}
					onClick={() => setActive("Cash")}
				>
					Cash
					<IconChevronRight />
				</Button>
				<Button
					display="flex"
					padding="32px"
					justifyContent="space-between"
					alignItems="center"
					alignSelf="stretch"
					borderRadius="16px"
					border="1px solid var(--black-b-30, #EBEBEB)"
					background="var(--black-b-0, #FFF)"
					w={"full"}
					cursor={"pointer"}
					_focus={{
						border: "1px solid",
						borderColor: "var(--brand-brand-500, #286043)",
						background: "var(--semantic-success-success-50, #EAF6EB)",
					}}
					onClick={() => setIsDisableButton(false)}
				>
					EDC
					<IconChevronRight />
				</Button>
				<Button
					display="flex"
					padding="32px"
					justifyContent="space-between"
					alignItems="center"
					alignSelf="stretch"
					borderRadius="16px"
					border="1px solid var(--black-b-30, #EBEBEB)"
					background="var(--black-b-0, #FFF)"
					w={"full"}
					cursor={"pointer"}
					_focus={{
						border: "1px solid",
						borderColor: "var(--brand-brand-500, #286043)",
						background: "var(--semantic-success-success-50, #EAF6EB)",
					}}
					onClick={() => setIsDisableButton(false)}
				>
					E-wallet
					<IconChevronRight />
				</Button>
				<Button
					display="flex"
					padding="32px"
					justifyContent="space-between"
					alignItems="center"
					alignSelf="stretch"
					borderRadius="16px"
					border="1px solid var(--black-b-30, #EBEBEB)"
					background="var(--black-b-0, #FFF)"
					w={"full"}
					cursor={"pointer"}
					_focus={{
						border: "1px solid",
						borderColor: "var(--brand-brand-500, #286043)",
						background: "var(--semantic-success-success-50, #EAF6EB)",
					}}
					onClick={() => setIsDisableButton(false)}
				>
					Starbucks
					<IconChevronRight />
				</Button>
			</Flex>

				<Button
					isDisabled={isDisableButton}
					// onClick={() => {
					// 	bayar(totalQuantity, transactionPrice, cart);
					// }}
					borderRadius={"100px"}
					background={"var(--black-b-30, #EBEBEB)"}
				>
					Pay
				</Button>
		</Flex>
	);
};
