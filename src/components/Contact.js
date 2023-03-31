import { Flex, Box, Link, Tooltip } from "@chakra-ui/react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineProfile, AiOutlineLinkedin } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
const Contact = () => {
  return (
    <Flex flexDirection="column" justifyContent="flex-start">
      <Box>
        <Flex justifyContent="space-between" alignItems="center" width="100px">
          <Tooltip label="LinkedIn" bg="rgb(10, 102, 194)">
            <Link
              _hover={{ color: "rgb(10, 102, 194)" }}
              href="https://www.linkedin.com/in/rsmacdonald/"
              isExternal
            >
              <AiOutlineLinkedin size={30} />
            </Link>
          </Tooltip>
          <Tooltip label="Github" bg="#c9510c">
            <Link
              _hover={{ color: "#c9510c" }}
              href="https://www.github.com/rmac2289"
              isExternal
            >
              <VscGithubAlt size={30} />
            </Link>
          </Tooltip>
          <Tooltip label="Resumé" bg="purple">
            <Link _hover={{ color: "purple" }} href="#">
              <AiOutlineProfile size={30} />
            </Link>
          </Tooltip>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Contact;
