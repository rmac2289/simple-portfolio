import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Image,
  ModalFooter,
  Box,
  Flex,
  Code,
  Heading,
  Text,
  Tag,
} from "@chakra-ui/react";
import { removeComma } from "../util/helpers";
import projectData from "./projectData.json";
//images
import OThome from "../assets/OThome.png";
import OTnew from "../assets/OTnew.png";
import OTadded from "../assets/OTadded.png";
import safetyAddContact from "../assets/safetyAddContact.png";
import safetyDeptList from "../assets/safetyDeptList.png";
import safetyhome from "../assets/safetyhome.png";
import fyphome from "../assets/fyphome.jpg";

const ProjectDrawer = ({ isOpen, onClose, modalName, isSmallScreen }) => {
  let currentProject = projectData.filter((project) => {
    return project.name === modalName;
  })[0];
  let imageSources = [];
  imageSources =
    modalName === "Overtime Tracker"
      ? [OThome, OTnew, OTadded]
      : modalName === "Parkfinder"
      ? [fyphome]
      : [safetyhome, safetyDeptList, safetyAddContact];
  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size={isSmallScreen ? "sm" : "3xl"}
      >
        <ModalOverlay bg="rgba(255,255,255,0.75)" />
        <ModalContent bg="white" borderRadius={0} border="1px solid black">
          <ModalCloseButton color="black" />
          <ModalHeader pb={0} fontSize="2xl" color="black">
            <Heading>{modalName}</Heading>
          </ModalHeader>

          <ModalBody>
            <Box mb={2}>
              <Tag mr={1} mb={1} bg="gray.800" color="white">
                Tech stack
              </Tag>
              {currentProject.tech.map((item, idx) => {
                return (
                  <Tag
                    key={idx}
                    bg="white"
                    border="1px solid black"
                    color="gray.800"
                    mr={1}
                    mb={1}
                  >
                    {item}
                  </Tag>
                );
              })}
            </Box>
            <Flex>
              {imageSources.map((image, idx) => {
                return (
                  <Box
                    key={idx}
                    display={isSmallScreen && idx > 0 ? "none" : "initial"}
                  >
                    <Image
                      src={image}
                      w={modalName === "Parkfinder" ? "275px" : "175px"}
                      borderRadius={5}
                      mr={1}
                      alt={modalName}
                    />
                  </Box>
                );
              })}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <p>{currentProject.description}</p>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ProjectDrawer;
