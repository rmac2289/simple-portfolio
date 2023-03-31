import { Flex, Box, Text, Heading, Tag } from "@chakra-ui/react";
import data from "./data.json";
import { isSubcategory } from "../util/helpers";
import React from "react";
const Skills = () => {
  return (
    <Box
      mb={5}
      maxWidth="700px"
      border="1px solid black"
      bg="rgba(255,255,255,.5)"
    >
      <Flex margin={10} flexDirection="column" justifyContent="flex-start">
        <Heading mb={1} as="h2" size="2xl" color="gray.800">
          Skills
        </Heading>
        {data.map((category) => {
          return (
            <Box mb={1} key={category.title}>
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
                    <React.Fragment key={idx}>
                      {isSubheader && idx !== 0 && <br />}
                      <Tag
                        mb={1}
                        bg={isSubheader ? "gray.800" : "white"}
                        color={isSubheader ? "white" : "gray.800"}
                        border={isSubheader ? "none" : "1px solid black"}
                      >
                        {item}
                      </Tag>{" "}
                    </React.Fragment>
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
