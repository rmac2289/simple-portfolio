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
  Text,
  Code,
  Heading,
} from "@chakra-ui/react";
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
  let currentProjectTechLength = currentProject.tech.length;
  console.log(currentProject);
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
          <ModalHeader fontSize="2xl" color="black">
            <Heading>{modalName}</Heading>
            {currentProject.tech.map((item, idx) => {
              let isLastItem = currentProjectTechLength < idx - 1;
              return (
                <Code fontSize="lg">
                  {item}
                  {isLastItem ? "" : ", "}
                </Code>
              );
            })}
          </ModalHeader>

          <ModalBody>
            <Flex>
              {imageSources.map((image, idx) => {
                return (
                  <Box
                    key={idx}
                    display={isSmallScreen && idx > 0 ? "none" : "initial"}
                  >
                    <Image
                      src={image}
                      w={modalName === "Parkfinder" ? "300px" : "200px"}
                      borderRadius={5}
                      m={1}
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
