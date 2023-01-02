import { Flex, Box, Text, Heading, Tag } from "@chakra-ui/react";
import data from "./data.json";
import { isSubcategory } from "../util/helpers";
const Skills = () => {
  return (
    <Box mb={5} maxWidth="700px" border="1px solid black">
      <Flex margin={10} flexDirection="column" justifyContent="flex-start">
        <Heading mb={1} as="h2" size="2xl" color="gray.800">
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
                {category.values.map((item, idx) => {
                  let isSubheader = isSubcategory(item);
                  return (
                    <>
                      {isSubheader && idx !== 0 && <br />}
                      <Tag
                        mb={1}
                        bg={isSubheader ? "gray.800" : "white"}
                        color={isSubheader ? "white" : "gray.800"}
                        border={isSubheader ? "none" : "1px solid black"}
                      >
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

export default Skills;
