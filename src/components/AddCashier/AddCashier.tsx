
import { FC } from 'react';
import { 
    Button, 
    Input, 
    useDisclosure,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    FormControl,
    FormLabel, 
    Text,
    Icon,
    FormErrorMessage} from '@chakra-ui/react'
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from 'axios';
import { IconPlus } from '@tabler/icons-react';

const CashierScheme = Yup.object().shape({
  email: Yup.string().email("email is invalid").required("email is required"),
  username: Yup.string().required("Tanggal tiket wajib diisi"),
  password: Yup.string().required("Password tiket wajib diisi"),
})

interface AddCashierProps {
    onCashierAdded: () => void;
}
const AddCashier: FC<AddCashierProps> = ({onCashierAdded}) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const token = localStorage.getItem("token");
  
//   const [addCashier, setAddCashier] = useState();


  const addCashier = async (
    email: string,
    username: string,
    password: string,
  ) => {
    try{ 
      await axios.post("http://localhost:8080/auth/addcashier", {
      email,
      username,
      password
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    onCashierAdded();

    alert("Add cashier is successful")
    onClose();
    } catch (err){
      console.log(err)
      alert("Add cashier failed")
    }
  };
  
  const formik = useFormik({
    initialValues:{
    email: "", 
    username: "",
    password: "pass123",
    },

    validationSchema: CashierScheme,
    onSubmit: (values, {resetForm}) => {
    addCashier(
      values.email, 
      values.username,
      values.password,
      )
      resetForm({values:{ email: "", username: "", password: "pass123" } })
    }
  });

  return (
    <>
      <Button 
        onClick={onOpen}
        bg={"#286043"}
        color={"white"}
        _hover={{
            bg: "white",
            color: "#286043",
            border: "2px solid #286043"
        }}
        borderRadius={'100px'}
        display={'flex'}
        gap={'6px'}
        alignItems={'center'}
        justifyContent={'center'}
        padding={'14px 24px 12px 24px'}>
            <Text>Add New</Text>
            <Icon as={IconPlus} color={'#FFFFF'}/>
                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  
                  <ModalOverlay />
                  <form onSubmit={formik.handleSubmit}>
                  <ModalContent>
                    <ModalHeader>Add Cashier</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                      <FormControl isInvalid={!!(
                      formik.touched.email && formik.errors.email)}>
                        <FormLabel>Email</FormLabel>
                        <Input name="email"
                        placeholder='Enter email'
                        type='email'
                        value={formik.values.email}
                        onChange={formik.handleChange} />

                        {formik.touched.email && formik.errors.email && (
                          <FormErrorMessage>
                            {formik.errors.email}
                          </FormErrorMessage>
                        )}
                      </FormControl>

                      <FormControl isInvalid={!!(
                      formik.touched.username && formik.errors.username)}>
                        <FormLabel>Username</FormLabel>
                        <Input name="username"
                        placeholder='Enter username'
                        value={formik.values.username}
                        onChange={formik.handleChange} />

                        {formik.touched.username && formik.errors.username && (
                          <FormErrorMessage>
                            {formik.errors.username}
                          </FormErrorMessage>
                        )}
                      </FormControl>

                      <FormControl isInvalid={!!(
                      formik.touched.password && formik.errors.password)}>
                        <FormLabel>Password</FormLabel>
                        <Input name="password"
                        placeholder='pass123'
                        value={formik.values.password}
                        disabled= {true}
                        onChange={formik.handleChange} />

                        {formik.touched.password && formik.errors.password && (
                          <FormErrorMessage>
                            {formik.errors.password}
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      
                      
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme='blue' mr={3} type='submit'>
                        Save
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                  </form>
                </Modal>

        {/* <Tiket display='none' buatTicket={buatTicket}/>   */}
        </Button>
    </>
  )
}

export default AddCashier