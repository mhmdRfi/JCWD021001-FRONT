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
						width: "2px",
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
									<Image
										src={`${
											import.meta.env.VITE_APP_IMAGE_URL
										}/products/${
											items?.image ||
											"product_ChocolateCreamColdBrew.jpg"
										}`}
										minW={"80px"}
										h={"80px"}
										borderRadius={"16px"}
									/>
								</Flex>
								<Flex direction={"column"} w={"full"} gap={5} pr={"10px"}>
									<Flex w={"full"} justify={"space-between"} gap={"15px"}>
										<Text>
											{items.name} ({items.total}x)
										</Text>
										<Text>
											{toRupiah(items.initialPrice || items.price)}
										</Text>
									</Flex>
									<Flex gap={3} h={"fit-content"}>
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
					onClick={() =>
						navigate("/transaction", { state: props.name })
					}
				>
					Proceed Payment
					<IconArrowRight />
				</Button>
			</Flex>
		</Box>
	);
};
