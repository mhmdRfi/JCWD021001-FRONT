/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import toRupiah from "@develoka/angka-rupiah-js";
import { useState } from "react";
import axios from "axios";

export const CashPayment = ({
	total,
	setActive,
	setIsPayment,
}: any) => {
	const [payment, setPayment] = useState<number>(0);
	const cart = useSelector(
		(state: RootState) => state.CartReducer.products
	);

	const totalQuantity = useSelector(
		(state: RootState) => state.CartReducer.countCart
	);

	// console.log(totalQuantity)
	// console.log(cart)
	// console.log(transactionPrice)

	const bayar = async (
		totalQuantity: number,
		transactionPrice: number,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		cart: any
	) => {
		try {
			await axios.post(`http://localhost:8080/transaction`, {
				total_quantity: totalQuantity,
				total_price: transactionPrice,
				cashier_id: 1,
				cart,
			});
			alert("Transation Success");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Flex
			w={"full"}
			h={"full"}
			direction={"column"}
			justify={"space-between"}
			// display={"none"}
		>
			<Flex w={"full"} gap={"20px"} direction={"column"}>
				<Button
					display="flex"
					padding="24px 0px"
					flexDirection="column"
					justifyContent="center"
					alignItems={"center"}
					gap="16px"
					alignSelf="stretch"
					borderRadius={"16px"}
					background="var(--black-b-20, #F5F5F5)"
					w={"full"}
					cursor={"pointer"}
					border={"1px solid transparent"}
					_focus={{
						border: "1px solid",
						borderColor: "var(--brand-brand-500, #286043)",
						background: "var(--semantic-success-success-50, #EAF6EB)",
					}}
				>
					Exact Amount
				</Button>
				<Button
					display="flex"
					padding="24px 0px"
					flexDirection="column"
					justifyContent="center"
					alignItems={"center"}
					gap="16px"
					alignSelf="stretch"
					borderRadius={"16px"}
					background="var(--black-b-20, #F5F5F5)"
					w={"full"}
					cursor={"pointer"}
					border={"1px solid transparent"}
					_focus={{
						border: "1px solid",
						borderColor: "var(--brand-brand-500, #286043)",
						background: "var(--semantic-success-success-50, #EAF6EB)",
					}}
					onClick={
						total > 100000 ? () => null : () => setPayment(100000)
					}
				>
					100.000
				</Button>
				<Button
					display="flex"
					padding="24px 0px"
					flexDirection="column"
					justifyContent="center"
					alignItems={"center"}
					gap="16px"
					alignSelf="stretch"
					borderRadius={"16px"}
					background="var(--black-b-20, #F5F5F5)"
					w={"full"}
					cursor={"pointer"}
					border={"1px solid transparent"}
					_focus={{
						border: "1px solid",
						borderColor: "var(--brand-brand-500, #286043)",
						background: "var(--semantic-success-success-50, #EAF6EB)",
					}}
					onClick={
						total > 150000 ? () => null : () => setPayment(150000)
					}
				>
					150.000
				</Button>
				<Button
					display="flex"
					padding="24px 0px"
					flexDirection="column"
					justifyContent="center"
					alignItems={"center"}
					gap="16px"
					alignSelf="stretch"
					borderRadius={"16px"}
					background="var(--black-b-20, #F5F5F5)"
					w={"full"}
					cursor={"pointer"}
					border={"1px solid transparent"}
					_focus={{
						border: "1px solid",
						borderColor: "var(--brand-brand-500, #286043)",
						background: "var(--semantic-success-success-50, #EAF6EB)",
					}}
					onClick={
						total > 200000 ? () => null : () => setPayment(200000)
					}
				>
					200.00
				</Button>
				<Button
					display="flex"
					padding="24px 0px"
					flexDirection="column"
					justifyContent="center"
					alignItems={"center"}
					gap="16px"
					alignSelf="stretch"
					borderRadius={"16px"}
					background="var(--black-b-20, #F5F5F5)"
					w={"full"}
					cursor={"pointer"}
					border={"1px solid transparent"}
					_focus={{
						border: "1px solid",
						borderColor: "var(--brand-brand-500, #286043)",
						background: "var(--semantic-success-success-50, #EAF6EB)",
					}}
				>
					Custom
				</Button>
			</Flex>

			<Flex w={"full"} direction={"column"} gap={"20px"}>
				<Flex justify={"space-between"} w={"full"}>
					<Text>Payment</Text>
					<Text>{toRupiah(payment)}</Text>
				</Flex>
				<Flex justify={"space-between"} w={"full"}>
					<Text>Total</Text>
					<Text>{toRupiah(total)}</Text>
				</Flex>
				<Flex justify={"space-between"} w={"full"}>
					<Text>Total</Text>
					<Text>{payment > 0 ? toRupiah(payment - total) : 0}</Text>
				</Flex>
			</Flex>

			<Flex w={"full"} justify={"center"} gap={5}>
				<Flex w={"50%"}>
					<Button
						w={"full"}
						borderRadius={"100px"}
						border={"1px solid"}
						borderColor={"var(--black-b-200, #666"}
						background={"white"}
						onClick={() => setActive("Payment")}
					>
						Change Payment
					</Button>
				</Flex>

				<Flex w={"50%"}>
					<Button
						onClick={() => {
							setIsPayment(payment);
							bayar(totalQuantity, total, cart);
							setActive("PaymentSuccess");
						}}
						borderRadius={"100px"}
						background={"var(--brand-brand-500, #286043)"}
						color={"var(--black-b-0, #FFF)"}
						w={"full"}
					>
						Pay
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};
