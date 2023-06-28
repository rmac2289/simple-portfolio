import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import data from "./data.json";
import React from "react";
import SkillTag from "./SkillTag";
const Skills = () => {
  return (
    <Box
      mb={5}
      maxWidth="700px"
      border="1px solid black"
      bg="rgba(255,255,255,.5)"
      position="relative"
    >
      <Flex margin={10} flexDirection="column" justifyContent="flex-start">
        <Heading mb={1} as="h2" size="2xl" color="gray.800">
          Skills
        </Heading>
        {data.map((category) => {
          console.log(category);
          return (
            <Box mb={1} key={category.header}>
              <Box
                display="flex"
                flexDir="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Text fontSize="2xl" color="gray.700">
                  {category.header}
                </Text>
              </Box>
              <Text>
                {category.subheaders.map((item, idx) => {
                  let subheader = item.name;
                  let values = item.values;
                  return (
                    <React.Fragment key={idx}>
                      <SkillTag
                        isSubheader={true}
                        value={subheader}
                        key={idx}
                      />
                      {values.map((value, idx) => {
                        return (
                          <SkillTag
                            isSubheader={false}
                            value={value}
                            key={idx}
                          />
                        );
                      })}
                      <br />
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
