/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Flex,
	Text,
	Card,
	Image,
	Grid,
	Button,
	Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import toRupiah from "@develoka/angka-rupiah-js";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { addToCart } from "../../redux/reducer/transactionReducer";
import CoffeImg from "../../assets/8485f2f23233df3900caffbd968659b3.png";

interface Product {
	id: number;
	name: string;
	price: number;
	descriptrion: string;
	quantity: number;
}

export const Category = () => {
	const [product, setProduct] = useState<Product[] | null>(null);
	const dispatch = useDispatch();

	const allProduct = async () => {
		try {
			const response = await axios.get(
				"http://localhost:8080/product"
			);
			setProduct(response.data.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		allProduct();
	}, []);

	const buttonValue = [
		"Popular",
		"Beverages",
		"Food",
		"Bean",
		"Merchandise",
	];

	return (
		<Flex direction={"column"} mx={"32px"} gap={"24px"} maxW={"872px"}>
			<Text fontSize={"18px"} fontWeight={600}>
				Category
			</Text>
			<Flex gap={"16px"}>
				{buttonValue?.map((Items) => {
					return (
						<Button
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							fontSize={"14px"}
							fontWeight={400}
							color={"var(--black-b-80, #949494)"}
							p={"14px 24px"}
							borderRadius={"100px"}
							border={"1px solid var(--black-b-80, #949494)"}
							_focus={{
								background: "var(--brand-brand-500, #286043)",
								color: "var(--black-b-0, #FFF)",
							}}
						>
							{Items}
						</Button>
					);
				})}
			</Flex>

			<Flex>
				<Flex color={"black"} w={"fit-content"}>
					<Grid
						// mx={"20px"}
						templateColumns="repeat(3, 1fr)"
						alignItems={"flex-start"}
						alignSelf={"stretch"}
						gap={"24px"}
						h={"fit-content"}
					>
						{product?.map((items: any, index) => {
							return (
								<Card
									key={index}
									bgColor={"white"}
									display={"flex"}
									p={"24px"}
									gap={"5px"}
									flexDirection={"row"}
									borderRadius={"16px"}
									onClick={() => {
										dispatch(addToCart(items));
									}}
								>
									<Box>
										<Image src={CoffeImg} w={"80px"} h={"80px"} />
									</Box>
									<Flex direction={"column"} justify={"center"} gap={"16px"}>
										<Text
											fontWeight={600}
											fontSize={"16px"}
											lineHeight={"18px"}
											m={0}
											maxH={"36px"}
											maxW={"150px"}
											display={"flex"}
											alignItems={"flex-start"}
											overflow={"hidden"}
										>
											{items.name}
										</Text>
										<Text
											fontWeight={400}
											fontSize={"16px"}
											lineHeight={"150%"}
											m={0}
										>
											{toRupiah(items.price)}
										</Text>
									</Flex>
								</Card>
							);
						})}
					</Grid>
				</Flex>
			</Flex>
		</Flex>
	);
};
