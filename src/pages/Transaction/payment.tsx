/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Button } from "@chakra-ui/react";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
// import toRupiah from "@develoka/angka-rupiah-js";

export const Payment = ({ setActive, total, setIsPayment,setTransactionSuccess }: any) => {
	const [isDisableButton, setIsDisableButton] = useState<any>(true);
	const cart = useSelector(
		(state: RootState) => state.CartReducer.products
	);

	const totalQuantity = useSelector(
		(state: RootState) => state.CartReducer.countCart
	);

	const bayar = async (
		totalQuantity: number,
		transactionPrice: number,
		cart: any
	) => {
		try {
			if (total >= transactionPrice) {
				await axios.post(
					`${import.meta.env.VITE_APP_API_BASE_URL}/transaction`,
					{
						total_quantity: totalQuantity,
						total_price: transactionPrice,
						cashier_id: 3,
						cart,
					}
				);
				setTransactionSuccess("success")
			} else {
				setTransactionSuccess("failed")
			}
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
					onClick={() => {
						setIsDisableButton(false),
							setIsPayment(total);
					}}
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
					onClick={() => {
						setIsDisableButton(false), setIsPayment(total);
					}}
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
					onClick={() => {
						setIsDisableButton(false), setIsPayment(total);
					}}
				>
					Starbucks
					<IconChevronRight />
				</Button>
			</Flex>

			<Button
				isDisabled={isDisableButton}
				onClick={() => {
					bayar(totalQuantity, total, cart);
					setActive("PaymentSuccess");
				}}
				borderRadius={"100px"}
				background={"var(--black-b-30, #EBEBEB)"}
			>
				Pay
			</Button>
		</Flex>
	);
};
