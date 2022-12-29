import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import Bio from "./Bio";
import Body from "./Body";
import Contact from "./Contact";
import Projects from "./Projects";

const Header = () => {
  return (
    <Box width="100%" height="100vh">
      <Box marginBottom={5} maxWidth="700px" border="1px solid black">
        <Flex margin={10} flexDirection="column" justifyContent="flex-start">
          <Heading as="h1" size="4xl" color="gray.800">
            Ross MacDonald
          </Heading>

          <Text fontSize="4xl" color="gray.700">
            Software Engineer
          </Text>
        </Flex>
      </Box>
      <Bio />
      <Body />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Header;
