/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import toRupiah from "@develoka/angka-rupiah-js";
import {
	decrement,
	increment,
	removeFromCart,
} from "../../redux/reducer/transactionReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconTrash } from "@tabler/icons-react";
import { IconArrowRight } from "@tabler/icons-react";
import CoffeImg from "../../assets/8485f2f23233df3900caffbd968659b3.png";

export const Product = (props: any) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const products = useSelector(
		(state: RootState) => state.CartReducer.products
	);
	const totalPrice = useSelector(
		(state: RootState) => state.CartReducer.totalPrice
	);

	const handleIncrement = (productId: number) => {
		dispatch(increment(productId));
	};
	const handleDecrement = (productId: number) => {
		dispatch(decrement(productId));
	};
	const handleRemove = (productId: number) => {
		dispatch(removeFromCart(productId));
	};
	return (
		<Box display={"flex"} flexDirection={"column"} w={"420px"}>
			<Box
				h={"340px"}
				overflowX={"auto"}
				sx={{
					"::-webkit-scrollbar": {
						display: "none",
					},
				}}
			>
				{products?.map((items, index) => {
					return (
						<Box
							key={index}
							display={"flex"}
							bgColor={"white"}
							h={"fit-content"}
							justifyContent={"space-between"}
							flexDirection={"column"}
							justifyItems={"center"}
							alignItems={"flex-start"}
							// onClick={() => navigate("/")}
						>
							<Flex align={"center"} h={"fit-content"} w={"full"}>
								<Flex align={"center"} w={"130px"} h={"110px"}>
									<Image src={CoffeImg} h={"full"} w={"full"} />
								</Flex>
								<Flex direction={"column"} w={"full"} gap={5}>
									<Flex w={"full"} justify={"space-between"}>
										<Text>
											{items.name} ({items.total}x)
										</Text>
										<Text>
											{toRupiah(items.initialPrice || items.price)}
										</Text>
									</Flex>
									<Flex
										// justify={"end"}
										// align={"center"}
										gap={3}
										h={"fit-content"}
										// bgColor={"green"}
									>
										<Button
											size={"xm"}
											w={"30px"}
											h={"30px"}
											onClick={() => handleDecrement(items.id)}
										>
											-
										</Button>
										<Text>{items.total}</Text>
										<Button
											size={"xm"}
											w={"30px"}
											h={"30px"}
											onClick={() => handleIncrement(items.id)}
										>
											+
										</Button>
										<Button
											size={"xm"}
											w={"30px"}
											h={"30px"}
											onClick={() => handleRemove(items.id)}
										>
											<IconTrash />
										</Button>
									</Flex>
								</Flex>
							</Flex>
						</Box>
					);
				})}
			</Box>
			<Flex direction={"column"}>
				<Flex justify={"end"} alignItems={"end"}>
					{toRupiah(totalPrice)}
				</Flex>
				<Button
					w={"full"}
					p={"14px 30px 12px 28px"}
					borderRadius={"100px"}
					background={"var(--brand-brand-500, #286043)"}
					color={"var(--black-b-0, #FFF)"}
					onClick={() => navigate("/transaction", {state: props.name})}
				>
					Proceed Payment
					<IconArrowRight />
				</Button>
			</Flex>
		</Box>
	);
};
