import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import { Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { supabase } from "../../../lib/supabase";

interface Props {
  onProjectAdd: () => void;
}

function AdminNav({ onProjectAdd }: Props): ReactElement {
  const router = useRouter();
  return (
    <Flex justifyContent="space-between" my="1.5rem" alignItems="center">
      <Text fontSize="1.2rem" lineHeight="100%">
        Admin Panel
      </Text>
      <Flex>
        <Button
          size={"sm"}
          colorScheme="teal"
          mr="1rem"
          variant="outline"
          onClick={onProjectAdd}
        >
          Add New Project
        </Button>
        <Button
          size={"sm"}
          colorScheme="red"
          variant="outline"
          onClick={() => {
            supabase.auth.signOut();
            router.push("/");
          }}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}

export default AdminNav;
