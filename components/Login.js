import { Box, Button, Center, Stack } from "@chakra-ui/react";

function Login() {
    return (
        <div title="Login">
            <Center h="100vh" w="100%">
                <Stack
                    align="center"
                    bgColor="green.600"
                    p={16}
                    rounded="3xl"
                    spacing={12}
                    boxShadow="lg"
                >
                    <Box
                        bgColor="blue.500"
                        w="fit-content"
                        p={16}
                        rounded="3xl"
                        boxShadow="md"
                    >
                    </Box>
                    <Button boxShadow="md">Entrar com a conta Google</Button>
                </Stack>
            </Center>
        </div>
    )
}

export default Login;
