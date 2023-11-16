/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Text, Card, Image, Grid } from "@chakra-ui/react";
// import { useState, useEffect } from "react";
// import toRupiah from "@develoka/angka-rupiah-js";
// import axios from "axios";
// import { useDispatch } from "react-redux/es/exports";
// import { addToCart } from "../../redux/reducer/transactionReducer";
import promo1 from "../../assets/promo1.jpg";
import promo2 from "../../assets/promo2.jpg";
import promo3 from "../../assets/promo3.jpg";

export const Promo: React.FC = () => {
	// const [product, setProduct] = useState<Product[] | null>(null);
	// const dispatch = useDispatch();

	const promo: any = [
		{
			name: "Buy 1 get 1",
			date: "Every Tuesdy",
			image: promo1,
		},
		{
			name: "Christmas Special Beverages",
			date: "17-31 Desember",
			image: promo2,
		},
		{
			name: "Tumbler Day",
			date: "14-21 November",
			image: promo3,
		},
	];

	return (
		<Flex
			direction={"column"}
			mt={"40px"}
			mx={"32px"}
			gap={"24px"}
			w={"fit-content"}
			maxW={"872px"}
		>
			<Text fontSize={"18px"} fontWeight={600}>
				Promo
			</Text>
			<Flex color={"black"} w={"fit-content"}>
				<Grid
					templateColumns="repeat(3, 1fr)"
					alignItems={"flex-start"}
					alignSelf={"stretch"}
					gap={"24px"}
					h={"fit-content"}
				>
					{promo?.map((item: any, index: number) => {
						return (
							<Card
								key={index}
								bgColor={"white"}
								display={"flex"}
								p={"24px"}
								gap={"20px"}
								flexDirection={"row"}
								borderRadius={"16px"}
							>
								<Flex align={"center"}>
									<Image
										src={item.image}
										minW={"80px"}
										h={"80px"}
										borderRadius={"16px"}
									/>
								</Flex>
								<Flex
									direction={"column"}
									gap={"10px"}
									justify={"center"}
									w={"full"}
								>
									<Text
										fontWeight={600}
										fontSize={"16px"}
										lineHeight={"18px"}
										m={0}
										maxH={"36px"}
										maxW={"150px"}
										display={"flex"}
										alignItems={"flex-start"}
										whiteSpace={"nowrap"}
										overflow={"hidden"}
										textOverflow={"ellipsis"}
									>
										{item?.name}
									</Text>
									<Text
										fontWeight={400}
										fontSize={"14px"}
										lineHeight={"150%"}
										m={0}
									>
										{item.date}
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
