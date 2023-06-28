import { Tag } from "@chakra-ui/react";
import React from "react";

const SkillTag = ({ value, idx, isSubheader }) => {
  return (
    <Tag
      key={idx}
      mb={1}
      mr={1}
      bg={isSubheader ? "gray.800" : "white"}
      color={isSubheader ? "white" : "gray.800"}
      border={isSubheader ? "none" : "1px solid black"}
    >
      {value}
    </Tag>
  );
};

export default SkillTag;
