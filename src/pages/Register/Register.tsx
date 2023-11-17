import { Box, Input, FormControl, FormLabel, Button } from "@chakra-ui/react"


function Register() {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input placeholder="Enter your username" />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" />
      </FormControl>

      <Button colorScheme="blue" mt={4}>
        Login
      </Button>
    </Box>
  )
}

export default Register