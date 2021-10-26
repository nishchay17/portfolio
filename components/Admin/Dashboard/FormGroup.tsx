import React, { ReactElement } from "react";
import { Box, Text, Flex } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/react";

interface Props {
  label: string;
  error: boolean;
  onChange: any;
  value?: string;
  name: string;
  helpText?: string;
  showTextArea: boolean;
}

function FormGroup({
  label,
  error,
  value,
  onChange,
  helpText,
  name,
  showTextArea,
}: Props): ReactElement {
  return (
    <Box mt="1rem">
      <Flex alignItems="center">
        <Text as="label">{label}</Text>
        {helpText && (
          <Text ml="1rem" fontSize="sm" color="gray.500">
            {helpText}
          </Text>
        )}
      </Flex>
      {showTextArea ? (
        <Textarea
          mt="0.5rem"
          type="text"
          placeholder={`Enter ${label}`}
          variant="filled"
          isInvalid={error}
          value={value}
          onChange={onChange}
          name={name}
        />
      ) : (
        <Input
          mt="0.5rem"
          type="text"
          placeholder={`Enter ${label}`}
          variant="filled"
          isInvalid={error}
          value={value}
          onChange={onChange}
          name={name}
        />
      )}
    </Box>
  );
}

FormGroup.defaultProps = {
  showTextArea: false,
};

export default FormGroup;
