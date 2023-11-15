/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Text, Card, Image, Grid } from "@chakra-ui/react";
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

export const Promo: React.FC = () => {
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
	return (
		<Flex
			direction={"column"}
      mt={"40px"}
			mx={"32px"}
			gap={"24px"}
			w={"fit-content"}
			maxW={"872px"}
		>
			<Text fontSize={"18px"} fontWeight={600}>Promo</Text>
			<Flex color={"black"} w={"fit-content"}>
				<Grid
					// mx={"20px"}
					templateColumns="repeat(3, 1fr)"
					alignItems={"flex-start"}
					alignSelf={"stretch"}
					gap={"24px"}
					h={"fit-content"}
				>
					{product?.slice(0, 3).map((items : any, index) => {
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
								<Flex align={"center"}>
									<Image src={CoffeImg} w={"80px"} h={"80px"} />
								</Flex>
								<Flex direction={"column"} gap={"16px"}>
									<Text
										fontWeight={600}
										fontSize={"16px"}
										lineHeight={"18px"}
										m={0}
										h={"36px"}
										display={"flex"}
										alignItems={"center"}
										overflow={"hidden"}
									>
										{items?.name}
									</Text>
									<Text
										fontWeight={400}
										fontSize={"16px"}
										lineHeight={"150%"}
										m={0}
									>
										{toRupiah(items?.price)}
									</Text>
								</Flex>
							</Card>
						);
					})}
				</Grid>
			</Flex>
		</Flex>
	);
};
