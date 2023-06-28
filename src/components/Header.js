import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import Bio from "./Bio";
import Skills from "./Skills";
import Projects from "./Projects";
import { Corner } from "./Corner";

const Header = ({ isSmallScreen }) => {
  return (
    <Box width="100%" height="100vh">
      <Box
        marginBottom={5}
        maxWidth="700px"
        border="1px solid black"
        bg="rgba(255,255,255,.5)"
        position="relative"
      >

        <Flex margin={10} flexDirection="column" justifyContent="flex-start">
          <Heading
            as="h1"
            size={isSmallScreen ? "2xl" : "4xl"}
            color="gray.800"
          >
            Ross MacDonald
          </Heading>

          <Text fontSize={isSmallScreen ? "xl" : "4xl"} color="gray.700">
            Software Engineer
          </Text>
        </Flex>
      </Box>
      <Bio />
      <Skills isSmallScreen={isSmallScreen} />
      <Projects isSmallScreen={isSmallScreen} />
    </Box>
  );
};

export default Header;
