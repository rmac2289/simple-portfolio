import { Flex, Box, Text, Heading, Link } from "@chakra-ui/react";
import Contact from "./Contact";

const Bio = () => {
  return (
    <Box
      mb={5}
      maxWidth="700px"
      border="1px solid black"
      bg="rgba(255,255,255,.5)"
    >
      <Flex margin={10} flexDirection="column" justifyContent="flex-start">
        <Heading mb={2} as="h2" size="2xl" color="gray.800">
          Bio
        </Heading>
        <Box mb={3}>
          <Text>
            Currently working as a QA Engineer II at ChowNow, a restaurant tech
            company that's revolutionizing the way people order food and support
            local restaurants. With my expertise, I've contributed to projects
            such as our tablet application, managed delivery with Uber and
            DoorDash, and multi-provider delivery dispatch.
            <br />
            <br />
            Before joining ChowNow, I worked as a QA Engineer at Axos Bank,
            where I honed my skills working on critical projects such as
            internal wires management software and building a data pipeline
            using Elasticsearch to track testing metrics.
            <br />
            <br />
            Before entering the tech world, I served as a 911 dispatcher for
            five years. I'm passionate about leveraging my skills to improve
            technology and enhance the user experience.
          </Text>
        </Box>
        <Contact />
      </Flex>
    </Box>
  );
};
export default Bio;
