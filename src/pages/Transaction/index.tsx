/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Box,
	Flex,
	Image,
	Text,
	Divider,
	Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import toRupiah from "@develoka/angka-rupiah-js";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import CoffeImg from "../../assets/8485f2f23233df3900caffbd968659b3.png";
import { IconCalendar } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { CashPayment } from "./cashPayment";
import { Payment } from "./payment";
import { useState } from "react";
import { PaymentSuccess } from "./paymentSuccess";
import { IconNumber } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";

export const Transaction = () => {
	const [activePage, setIsActivePage] = useState<string>("Payment");
	const [payment, setPayment] = useState<number>(0);
	const [transactionSuccess, setTransactionSuccess] =
		useState<string>("failed");
	const [cash, setCash] = useState<boolean>(false)
	const navigate = useNavigate();
	const { state } = useLocation();
	const now = new Date();
	const day = now.getDate();
	const month = now.getMonth();
	const year = now.getFullYear();
	const time = new Intl.DateTimeFormat("default", {
		hour12: true,
		hour: "numeric",
		minute: "numeric",
	}).format(now);

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const cart = useSelector(
		(state: RootState) => state.CartReducer.products
	);
	const transactionPrice = useSelector(
		(state: RootState) => state.CartReducer.totalPrice
	);

	return (
		<Flex
			bgColor={"var(--black-b-10, #FAFAFA)"}
			p={"55px 32px 9px 32px"}
			gap={"44px"}
			fontSize={"14px"}
		>
			{activePage == "Payment" || activePage == "Cash" ? (
				<Button
					display={"flex"}
					position={"absolute"}
					top={2}
					left={8}
					fontSize={"14px"}
					size={"xm"}
					p={"8px 14px"}
					borderRadius={"100px"}
					fontWeight={400}
					border={"1px solid black"}
					bgColor={"transparent"}
					gap={1.5}
					onClick={() => navigate("/cashier")}
				>
					<IconX /> Cancel Order
				</Button>
			) : null}

			{/* Left section */}
			<Flex
				direction={"column"}
				w={"50%"}
				bgColor={"white"}
				p={"32px 52px"}
				gap={"34px"}
			>
				<Flex w={"full"} justify={"space-between"}>
					<Flex direction={"column"} gap={"24px"} fontSize={"16px"}>
						<Text display={"flex"} gap={"8px"} alignItems={"center"}>
							<IconNumber /> SBX{state?.transactionCode}
						</Text>
						<Flex alignItems={"center"} gap={"8px"} fontSize={"16px"}>
							<IconUser width={"24px"} height={"24px"} />{" "}
							{state?.name}
						</Flex>
					</Flex>

					<Flex direction={"column"} gap={"24px"}>
						<Flex gap={2} alignItems={"center"} fontSize={"16px"}>
							<IconCalendar />
							<Text>
								{day} {months[month]} {year}
							</Text>
						</Flex>
						<Flex gap={2} alignItems={"center"} fontSize={"16px"}>
							<IconCalendar />
							<Text>{time}</Text>
						</Flex>
					</Flex>
				</Flex>

				{/* Product */}
				<Box
					h={"280px"}
					overflowX={"auto"}
					sx={{
						"::-webkit-scrollbar": {
							display: "none",
						},
					}}
				>
					{cart?.map((items : any, index) => {
						return (
							<Box
								key={index}
								display={"flex"}
								h={"fit-content"}
								justifyContent={"space-between"}
								flexDirection={"column"}
								justifyItems={"center"}
								alignItems={"flex-start"}
								onClick={() => navigate("/")}
							>
								<Flex align={"center"} h={"fit-content"} w={"full"}>
									<Flex
										align={"center"}
										w={"fit-content"}
										h={"fit-content"}
									>
										<Image src={CoffeImg} w={"100px"} h={"80px"} />
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
									</Flex>
								</Flex>
							</Box>
						);
					})}
					{/* <Flex justify={"end"}>{toRupiah(transactionPrice)}</Flex> */}
				</Box>
				<Flex
					w={"full"}
					direction={"column"}
					gap={"16px"}
					fontSize={"14px"}
				>
					<Flex w={"full"} justify={"space-between"}>
						<Text>Subtotal</Text>
						<Text>{toRupiah(transactionPrice)}</Text>
					</Flex>
					<Flex w={"full"} justify={"space-between"}>
						<Text>Discount</Text>
						<Text>-Rp 0,00</Text>
					</Flex>
					<Flex w={"full"} justify={"space-between"}>
						<Text>Total Tax</Text>
						<Text>{toRupiah(transactionPrice * (2 / 100))}</Text>
					</Flex>
					<Divider />
					<Flex w={"full"} justify={"space-between"}>
						<Text fontSize={"20px"} fontWeight={600}>
							Total
						</Text>
						<Text fontSize={"20px"} fontWeight={600}>
							{toRupiah(
								transactionPrice + transactionPrice * (10 / 100)
							)}
						</Text>
					</Flex>
				</Flex>
			</Flex>

			{/* Right Section */}
			<Flex
				w={"50%"}
				bgColor={"white"}
				direction={"column"}
				p={"32px 52px"}
				gap={"34px"}
			>
				<Flex direction={"column"} gap={"30px"} h={"full"}>
					<Text>Payment Methode</Text>
					{activePage == "Payment" && (
						<Payment
							setActive={setIsActivePage}
							setIsPayment={setPayment}
							total={transactionPrice + transactionPrice * (10 / 100)}
							setTransactionSuccess={setTransactionSuccess}
							setCash={setCash}
						/>
					)}
					{activePage == "Cash" && (
						<CashPayment
							total={transactionPrice + transactionPrice * (10 / 100)}
							setActive={setIsActivePage}
							setIsPayment={setPayment}
							setTransactionSuccess={setTransactionSuccess}
						/>
					)}
					{activePage == "PaymentSuccess" && (
						<PaymentSuccess
							name={state?.name}
							total={transactionPrice + transactionPrice * (10 / 100)}
							payment={payment}
							codeTransaction={state?.transactionCode}
							transactionSuccess={transactionSuccess}
							cash={cash}
						/>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
};
