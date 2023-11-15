/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Flex, Text } from "@chakra-ui/react";
import toRupiah from "@develoka/angka-rupiah-js";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IconCheck } from "@tabler/icons-react";
import { useNavigate } from "react-router";
// import { useDispatch } from "react-redux";
// import { removeItemsCart } from "../../redux/reducer/transactionReducer";

export const PaymentSuccess = ({ name, payment }: any) => {
	const transactionPrice = useSelector(
		(state: RootState) => state.CartReducer.totalPrice
	);

  const removeItemsCart = useSelector((state : RootState) => state.CartReducer.products = [])
  const removeTotalPrice = useSelector((state : RootState) => state.CartReducer.totalPrice = 0)
  const removeTotalQuantity = useSelector((state : RootState) => state.CartReducer.countCart = 0)


	// const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<Flex
			justify={"space-between"}
			align={"center"}
			h={"full"}
			w={"full"}
			direction={"column"}
		>
			<Flex
				direction={"column"}
				justify={"center"}
				align={"center"}
				h={"full"}
				w={"full"}
				gap={"56px"}
			>
				<Flex
					direction={"column"}
					justify={"center"}
					align={"center"}
					gap={"32px"}
				>
					<Flex
						w={"104px"}
						h={"104px"}
						borderRadius={"50%"}
						background={"var(--semantic-success-success-50, #EAF6EB)"}
						align={"center"}
						justify={"center"}
					>
						<IconCheck
							width={"56px"}
							height={"56px"}
							color={"#2CA538"}
						/>
					</Flex>
					<Text>Payment Successful</Text>
				</Flex>

				<Flex direction={"column"} gap={"24px"} w={"full"}>
					<Flex justify={"space-between"}>
						<Text>Order ID</Text>
						<Text>No SBX1316513</Text>
					</Flex>
					<Flex justify={"space-between"}>
						<Text>Customer</Text>
						<Text>{name}</Text>
					</Flex>
					<Flex justify={"space-between"}>
						<Text>Payment</Text>
						<Text>{toRupiah(payment)}</Text>
					</Flex>
					<Flex justify={"space-between"}>
						<Text>Total</Text>
						<Text>
							{toRupiah(
								transactionPrice + transactionPrice * (10 / 100)
							)}
						</Text>
					</Flex>
					<Flex justify={"space-between"}>
						<Text>Exchange</Text>
						<Text>SBX12345</Text>
					</Flex>
				</Flex>
			</Flex>

			<Button
				w={"full"}
				h={"44px"}
				borderRadius={"100px"}
				background={"var(--brand-brand-500, #286043)"}
				color={"var(--black-b-0, #FFF)"}
				p={"0px 24px"}
				onClick={() => {
					navigate("/cashier");
          removeItemsCart;
          removeTotalPrice;
          removeTotalQuantity;
				}}
			>
				Back to Menu
			</Button>
		</Flex>
	);
};
