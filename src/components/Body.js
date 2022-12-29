import {
  Flex,
  Box,
  Text,
  Heading,
  Tag,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import data from "./data.json";

const Body = () => {
  return (
    <Box mb={5} maxWidth="700px" border="1px solid black">
      <Flex margin={10} flexDirection="column" justifyContent="flex-start">
        <Heading mb={1} as="h2" size="3xl" color="gray.800">
          Skills
        </Heading>
        {data.map((category) => {
          return (
            <Box mb={1}>
              <Box
                display="flex"
                flexDir="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Text fontSize="2xl" color="gray.700">
                  {category.title}
                </Text>
              </Box>
              <Text>
                {category.values.map((item) => {
                  return (
                    <>
                      <Tag mb={1} bg="gray.800" color="white">
                        {item}
                      </Tag>{" "}
                    </>
                  );
                })}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Body;
