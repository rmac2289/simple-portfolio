import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Contact from "./Contact";

const Bio = () => {
  const [showMoreCaret, setShowMoreCaret] = useState(true);
  const toggleMoreCaret = () => {
    setShowMoreCaret(false);
  };
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
          <Text
            height={380}
            overflow="scroll"
            position="relative"
            onScroll={toggleMoreCaret}
          >
            I'm a detail-oriented Software Engineer with a strong background in
            quality assurance and software development dedicated to delivering
            the best possible solutions to end users. I have a proven track
            record of success in developing and testing software applications,
            ensuring their optimal performance and functionality.
            <br /> <br />
            In my current role as a QA Engineer II at ChowNow, I've worked on
            several high impact projects. I played a pivotal role in the
            development and testing of a new tablet application, benefiting our
            network of 20,000+ restaurants. I led the testing efforts for
            crucial implementations, including a partnership with Uber as a
            delivery provider and the introduction of a multi-provider delivery
            dispatch system. Through my expertise, we were able to maximize
            delivery revenue by selecting the most cost-efficient delivery
            partner for each order. Currently, I'm leading the testing effort
            for the implementation of phone-based authentication for diner
            login. I also provide valuable support to cross-functional team
            members and contribute to minor development work, making significant
            contributions to production releases.
            <br />
            {showMoreCaret && (
              <span style={{ position: "absolute", right: 0, bottom: 0 }}>
                ▼
              </span>
            )}
            <br />
            Prior to that, as a Software Development Engineer in Test at Axos
            Bank, I demonstrated my skills in designing and implementing a
            Node.js API for collecting testing data and metadata. I successfully
            executed automated regression tests and actively participated in the
            various phases of the Software Development Lifecycle. Additionally,
            I played a key role in ensuring the continued functionality of an
            internal wire transfer application responsible for processing
            millions of dollars annually. I also led the automation efforts of
            the QA team, providing guidance and support to enhance the
            efficiency and effectiveness of our testing processes.
            <br />
            <br />
            Before transitioning into the software industry, I gained valuable
            experience as a Public Safety Dispatcher, handling critical
            communications for both the City of Mountain View and the County of
            Marin. This experience honed my ability to manage high-pressure
            situations, work collaboratively in a team environment, and maintain
            strong attention to detail.
            <br />
          </Text>
        </Box>
        <Contact />
      </Flex>
    </Box>
  );
};
export default Bio;
