import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import ProjectModal from "./ProjectModal";
import { GoBrowser } from "react-icons/go";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { useState } from "react";
import { Corner } from "./Corner";

const Projects = ({ isSmallScreen }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalName, setModalName] = useState("");

  const onButtonClick = (name) => {
    setModalName(name);
  };

  const handleClick = (name) => {
    onButtonClick(name);
    onOpen();
  };
  return (
    <Box
      mb={5}
      maxWidth="700px"
      border="1px solid black"
      bg="rgba(255,255,255,.5)"
      position="relative"
    >
      <Corner color="#612429" />

      <Flex margin={10} flexDirection="column" justifyContent="flex-start">
        <Heading mb={2} as="h2" size="2xl" color="gray.800">
          Side projects
        </Heading>
        <Box mb={2}>
          <Text>
            Throughout the past few years I've worked on a bunch of fun little
            side projects, mainly in order to solve problems I've encountered in
            my life. Overtime tracker is a personal favorite that I used almost
            daily in my career as a 911 dispatcher. My schedule was so hectic
            that it needed its own app.
          </Text>
        </Box>

        <Button
          bg="white"
          color="gray.800"
          border="1px solid black"
          mb={2}
          w={isSmallScreen ? "75%" : "50%"}
          justifyContent="space-between"
          onClick={() => handleClick("Parkfinder")}
        >
          <Text>Parkfinder</Text>
          <Box display="flex">
            <HiOutlineDevicePhoneMobile size={24} />

            <GoBrowser size={24} />
          </Box>
        </Button>
        <Button
          bg="white"
          color="gray.800"
          border="1px solid black"
          mb={2}
          w={isSmallScreen ? "75%" : "50%"}
          justifyContent="space-between"
          onClick={() => handleClick("Overtime Tracker")}
        >
          <Text>Overtime Tracker</Text>
          <HiOutlineDevicePhoneMobile size={24} />
        </Button>
        <Button
          bg="white"
          color="gray.800"
          border="1px solid black"
          w={isSmallScreen ? "75%" : "50%"}
          justifyContent="space-between"
          onClick={() => handleClick("Safety Blanket")}
        >
          <Text>Safety Blanket</Text>
          <HiOutlineDevicePhoneMobile size={24} />
          {isOpen && (
            <ProjectModal
              isOpen={isOpen}
              onClose={onClose}
              modalName={modalName}
              isSmallScreen={isSmallScreen}
            />
          )}
        </Button>
      </Flex>
    </Box>
  );
};
export default Projects;
