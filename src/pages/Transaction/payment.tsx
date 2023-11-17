/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Button } from "@chakra-ui/react";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import axios from "axios"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Payment = ({ setActive, total }: any) => {
	const [isDisableButton, setIsDisableButton] = useState<any>(true);
  const cart = useSelector(
		(state: RootState) => state.CartReducer.products
	);

  const totalQuantity = useSelector(
		(state: RootState) => state.CartReducer.countCart
	);

  const bayar = async (
		totalQuantity: number,
		total: number,
		cart: any
	) => {
		try {
			await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/transaction`, {
				total_quantity: totalQuantity,
				total_price: total,
				cashier_id: 1,
				cart,
			});
		} catch (err) {
			console.log(err);
		}
	};
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
					onClick={() => {
						bayar(totalQuantity, total, cart);
            setActive("PaymentSuccess")
					}}
					borderRadius={"100px"}
					background={"var(--black-b-30, #EBEBEB)"}
				>
					Pay
				</Button>
		</Flex>
	);
};
