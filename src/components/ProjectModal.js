import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Image,
  ModalFooter,
  Wrap,
  WrapItem,
  useMediaQuery,
  Divider,
} from "@chakra-ui/react";
import OThome from "../assets/OThome.png";
import OTnew from "../assets/OTnew.png";
import OTadded from "../assets/OTadded.png";
import safetyAddContact from "../assets/safetyAddContact.png";
import safetyDeptList from "../assets/safetyDeptList.png";

import safetyhome from "../assets/safetyhome.png";
import fyphome from "../assets/fyphome.jpg";

const ProjectDrawer = ({ isOpen, onClose, modalName }) => {
  const [isMobile] = useMediaQuery("(max-width: 690px)");
  let imageSources = [];
  imageSources =
    modalName === "Overtime Tracker"
      ? [OThome, OTnew, OTadded]
      : modalName === "Parkfinder"
      ? [fyphome]
      : [safetyhome, safetyDeptList, safetyAddContact];
  console.log(isMobile);
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent bg="white">
          <ModalCloseButton color="black" />
          <ModalHeader fontSize="2xl" color="black">
            {modalName}
          </ModalHeader>
          <ModalBody>
            <Wrap>
              {imageSources.map((image, idx) => {
                return (
                  <WrapItem
                    key={idx}
                    display={isMobile && idx > 0 ? "none" : "initial"}
                  >
                    <Image
                      src={image}
                      w={modalName === "Parkfinder" ? "300px" : "200px"}
                      borderRadius={5}
                      m={1}
                    />
                  </WrapItem>
                );
              })}
            </Wrap>
          </ModalBody>
          <ModalFooter>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ProjectDrawer;
