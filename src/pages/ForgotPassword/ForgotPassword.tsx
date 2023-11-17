import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Input, InputGroup, Stack, Text, Image, AbsoluteCenter } from '@chakra-ui/react';
import background from "../../assets/coffee.jpg"
import logo from "../../assets/ee8e2ef267a626690ecec7c84a48cfd4.png"
import axios from "axios";
import * as Yup from "yup";

const EmailScheme = Yup.object().shape({
    email: Yup.string().email("email is invalid").required("email is required"),
  })

function ForgotPassword() {
    const navigate = useNavigate();

    const forgotPassword = async (
        email: string,
      ) => {
        try{ 
          await axios.patch("http://localhost:8080/auth/forgot-password", {
          email,
        });
        alert("Link to reset password has been sent to your email")
        } catch (err){
          console.log(err)
          alert("Email doesn't exist")
        }
      };
    
      const formik = useFormik({
        initialValues:{
        email: "", 
        },
    
        validationSchema: EmailScheme,
        onSubmit: (values, {resetForm}) => {
        forgotPassword(
          values.email, 
          )
          resetForm({values:{ email: ""} })
          navigate('/');
        }
      });


  return (
    <>
        <Box>
      <Box width={'100vw'}
      height={'100vh'}
      backgroundColor={'black'}
      position={'relative'}>
        <Box width={'100vw'}
        opacity={'0.5'}
        padding={'0'}
        backgroundImage={background}
        height={'100vh'}
        backgroundSize={"cover"}></Box>

        <AbsoluteCenter>
            <Box
            maxWidth={'500'}
            overflow={'hidden'}
            marginBottom={'30px'}>
                <Image src={logo} margin={'auto'} boxSize={'100px'}/>
            </Box>

            <Box boxShadow={'0px 1px 5px gray'}
            padding={'30px'}
            borderRadius={'10px'}
            alignItems={'center'}
            backgroundColor={'white'}
            width={'400px'}
            >
              <Text fontWeight={'bold'} fontSize={'24px'} textAlign={'center'}>Forgot Password</Text>
              <Text textAlign={'center'} fontSize={'12px'} color={'gray'} paddingTop={'0px'}>Input your email to reset your password.</Text>

        
        <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4} marginTop={'20px'}>
              <FormControl id="email" marginBottom={'20px'}>
                <FormLabel fontSize={'14px'} color={'gray'} marginBottom={'10px'}>Email</FormLabel>
                <InputGroup>
                  <Input
                    name="email"
                    placeholder='enter email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    required
                    width={'100%'}
                    padding={'12px 20px'}
                    border={'1px solid #6666'}
                    borderRadius={'100px'}
                    fontSize={'16px'}/>
                </InputGroup>
              </FormControl>
              <Stack >
              <Button
                  bg={"#286043"}
                  color={"white"}
                  _hover={{
                    bg: "black",
                    color: "white",
                  }}
                  borderRadius={'100px'}
                  type="submit"
                >
                  Send reset link
                </Button>
                <Link to="/" >
                <Text fontSize={'12px'} color={'blue.500'} marginBottom={'10px'} textAlign={'center'}>
                Back to login
                </Text>
                </Link>
                
              </Stack>
            </Stack>
        </form>
      </Box>

        </AbsoluteCenter>

          

        
      
      </Box>
    </Box>
    </>
  )
}

export default ForgotPassword