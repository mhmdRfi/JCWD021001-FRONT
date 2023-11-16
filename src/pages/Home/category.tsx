/* eslint-disable no-mixed-spaces-and-tabs */
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

interface Product {
	id: number;
	name: string;
	price: number;
	descriptrion: string;
	quantity: number;
}

export const Category = ({ productName }: any) => {
	const [product, setProduct] = useState<Product[] | null>(null);
	const [activeButton, setActiveButton] = useState<string>("All");
	const dispatch = useDispatch();
	const [page, setPage] = useState<number>(1);
	const [category, setCatogory] = useState<number>();
	const [totalPage, setTotalPage] = useState<number>();

	const productPage = async (page: number, productName : string) => {
		try {
			const response = await axios.get(
				`${
					import.meta.env.VITE_APP_API_BASE_URL
				}/product/${page}?categoryId=${category}&productName=${productName || ""}`
			);
			setProduct(response.data.data.result);
			setTotalPage(response.data.data.totalPage);
		} catch (err) {
			console.log(err);
		}
	};


	useEffect(() => {
		productPage(page, productName);
	}, [page, category, productName]);

	const buttonValue = [
		"All",
		"Beverages",
		"Food",
		"Bean",
		"Merchandise",
	];

	return (
		<Flex direction={"column"} mx={"32px"} gap={"24px"} w={"872px"}>
			<Text fontSize={"18px"} fontWeight={600}>
				Category
			</Text>
			<Flex gap={"16px"}>
				{buttonValue?.map((Items, index) => {
					return (
						<Button
							key={index}
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							fontSize={"14px"}
							fontWeight={400}
							p={"14px 24px"}
							cursor={"pointer"}
							borderRadius={"100px"}
							border={"1px solid var(--black-b-80, #949494)"}
							sx={
								activeButton == Items
									? {
											background: "var(--brand-brand-500, #286043)",
											color: "var(--black-b-0, #FFF)",
									  }
									: {
											color: "var(--black-b-80, #949494)",
											bgColor: "transparent",
									  }
							}
							onClick={() => {
								setActiveButton(Items),
									setCatogory(index),
									setPage(1);
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
									gap={"20px"}
									p={"24px"}
									flexDirection={"row"}
									borderRadius={"16px"}
									onClick={() => {
										dispatch(addToCart(items));
									}}
									cursor={"pointer"}
								>
									<Box>
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
									</Box>
									<Flex
										direction={"column"}
										justify={"center"}
										gap={"10px"}
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

			<Flex gap={5} justifyContent={"end"} mb={"50px"}>
				<Button
					cursor={"pointer"}
					isDisabled={page > 1 ? false : true}
					onClick={() => {
						setPage(page - 1);
					}}
				>
					Prev
				</Button>
				<Button
					cursor={"pointer"}
					isDisabled={page < Number(totalPage) ? false : true}
					onClick={() => {
						setPage(page + 1);
					}}
				>
					Next
				</Button>
			</Flex>
		</Flex>
	);
};
