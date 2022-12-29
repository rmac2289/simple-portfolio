import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import ProjectDrawer from "./ProjectDrawer";
const Projects = () => {
  return (
    <Box mb={5} maxWidth="700px" border="1px solid black">
      <Flex margin={10} flexDirection="column" justifyContent="flex-start">
        <Heading as="h2" size="3xl" color="gray.800">
          Coding for fun
        </Heading>
        <Box>
          <Text fontSize="3xl" color="gray.700">
            Projects
          </Text>
          <Text>
            Throughout the past few years I've worked on a bunch of fun little
            side projects, mainly in order to solve little problems I've
            encountered in my life.
          </Text>
        </Box>

        <ProjectDrawer />
      </Flex>
    </Box>
  );
};
export default Projects;
