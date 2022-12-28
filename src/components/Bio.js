import { Flex, Box, Text, Heading } from "@chakra-ui/react";
const Bio = () => {
  return (
    <Box marginBottom={5} maxWidth="700px" border="1px solid black">
      <Flex margin={10} flexDirection="column" justifyContent="flex-start">
        <Heading as="h2" size="3xl" color="gray.800">
          Bio
        </Heading>
        <Box>
          <Text fontSize="3xl" color="gray.700">
            About Me
          </Text>
          <Text>
            Currently working as a QA Engineer at ChowNow. Previously worked as
            a QA Engineer for Axos Bank. Prior to breaking into tech, I worked
            as a 911 Dispatcher for 5 years. Experienced in all phases of the
            SDLC.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
export default Bio;
