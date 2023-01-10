import React from "react";
import { FaGithub, FaChrome, FaTwitter, FaWhatsapp } from "react-icons/fa";
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

export function Feed() {
  return (
    <Box maxWidth="82vw" mx="auto">
      <Flex display="flex" justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" mt="10px">
          <Image src="/github_PNG40.png" width="70px" />
          <Box ml="20px">
            <Heading
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="30"
              fontWeight="extrabold"
            >
              GitHub
            </Heading>
            <Text>Most Starred project's on GitHub.</Text>
          </Box>
        </Flex>
        <Stack isInline>
        <Button as="a" href="https://github.com/12saif" target="_blank" leftIcon={<FaGithub />} colorScheme="blue">
            GitHub
          </Button>
          <Button as="a" href="https://web.whatsapp.com/" target="_blank" leftIcon={<FaWhatsapp />} colorScheme="green">
            WhatsApp
          </Button>
          <Button as="a" href="https://google.com" target="_blank" leftIcon={<FaChrome />} colorScheme="red">
            Use Extension
          </Button>
          <Button as="a" href="https://twitter.com/MDSAIF58586703?t=Vecsbsn2ZsjIgBbwNX2E9w&s=09" target="_blank" leftIcon={<FaTwitter />} colorScheme="purple">
            Tweet
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
