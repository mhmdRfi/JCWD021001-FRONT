import {
	Box,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import toRupiah from "@develoka/angka-rupiah-js";
import axios from "axios";
import { IconArrowRight } from "@tabler/icons-react";

export const Transaction = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cart = useSelector(
		(state: RootState) => state.CartReducer.products
	);
	const transactionPrice = useSelector(
		(state: RootState) => state.CartReducer.totalPrice
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
		<Box>
			<Button
				onClick={onOpen}
				w={"full"}
				p={"14px 30px 12px 28px"}
				borderRadius={"100px"}
				background={"var(--brand-brand-500, #286043)"}
				color={"var(--black-b-0, #FFF)"}
			>
				Proceed Payment
				<IconArrowRight />
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Transaction</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{cart?.map((items, index) => {
							return (
								<Box>
									<Flex key={index} gap={5} justify={"space-between"}>
										<Box>{items?.name}</Box>
										<Box>{items?.total}x</Box>
									</Flex>
								</Box>
							);
						})}
						<Flex justify={"end"}>{toRupiah(transactionPrice)}</Flex>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button
							variant="ghost"
							onClick={() => {
								bayar(totalQuantity, transactionPrice, cart);
							}}
						>
							Bayar
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};
