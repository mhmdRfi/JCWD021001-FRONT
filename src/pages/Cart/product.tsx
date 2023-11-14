import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import toRupiah from "@develoka/angka-rupiah-js";
import {
	decrement,
	increment,
	removeFromCart,
} from "../../redux/reducer/transactionReducer";
import { Transaction } from "../Transaction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconTrash } from "@tabler/icons-react";

export const Product = () => {
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
		<Box display={"flex"} flexDirection={"column"}>
			<Box minH={"340px"}>
				{products?.map((items, index) => {
					return (
						<Box
							key={index}
							bgColor={"red"}
							h={"120px"}
							display={"flex"}
							justifyContent={"space-between"}
							flexDirection={"column"}
							justifyItems={"center"}
							alignItems={"flex-start"}
							onClick={() => navigate("/")}
						>
							<Flex
								gap={1}
								align={"center"}
								h={"fit-content"}
							>
								<Flex align={"center"}>
									<Image
										src="https://i.pinimg.com/564x/9a/36/29/9a36294e6670b2d7640cdf2c73c78edd.jpg"
										h={"100px"}
									/>
								</Flex>
								<Flex direction={"column"} w={"full"}>
									<Flex w={"full"}>
										<Text>
											{items.name} ({items.total}x)
										</Text>
										<Text>
											{toRupiah(items.initialPrice || items.price)}
										</Text>
									</Flex>
									<Flex
										justify={"end"}
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

							<Flex></Flex>
						</Box>
					);
				})}
			</Box>
			<Flex direction={"column"}>
				<Flex justify={"end"} alignItems={"end"}>
					{toRupiah(totalPrice)}
				</Flex>
				<Transaction />
			</Flex>
		</Box>
	);
};
