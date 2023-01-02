import { Box, useMediaQuery } from "@chakra-ui/react";
import Header from "./components/Header";
import me2 from "./assets/me2.png";

function App() {
  const [isSmallScreen] = useMediaQuery("(max-width: 720px)");
  return (
    <Box
      margin={isSmallScreen ? 2 : 10}
      padding={isSmallScreen ? 2 : 10}
      bg={`linear-gradient( rgba(255, 255, 255, 0.9) 100%, rgba(255, 255, 255, 0.8)100%), url(${me2}) no-repeat fixed ${
        isSmallScreen ? "center" : "right"
      }`}
      overflow="scroll"
    >
      <Header isSmallScreen={isSmallScreen} />
    </Box>
  );
}

export default App;
