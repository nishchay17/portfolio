import React, { ReactElement, useState } from "react";
import {
  Grid,
  Box,
  Text,
  Center,
  Input,
  Heading,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { supabase } from "../../lib/supabase";

function Login(): ReactElement {
  const [show, setShow] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (): void => setShow(!show);
  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <Center height="100vh">
      <Grid
        onSubmit={handleSubmit}
        as="form"
        border="5px solid"
        borderColor="teal.500"
        padding="1rem"
        templateRows="repeat(1, 1fr)"
        gap="1rem"
        width={["90vw", "30vw"]}
        borderRadius="lg"
      >
        <Heading size="lg" textAlign="center" my="1rem">
          Admin Login
        </Heading>
        <Box>
          <Text mb="0.5rem">Email</Text>
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            isInvalid={!!error}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
        </Box>
        <Box>
          <Text mb="0.5rem">Password</Text>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              isInvalid={!!error}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                outline="none"
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Text color="red">{error}</Text>
        <Button
          isLoading={isLoading}
          type="submit"
          mt={!!error ? "0.6rem" : "2rem"}
          variant="solid"
          colorScheme="teal"
          width="100%"
        >
          Login
        </Button>
      </Grid>
    </Center>
  );
}

export default Login;
