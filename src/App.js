import { Box } from "@chakra-ui/react";
import Bio from "./components/Header";
import me from "./assets/me.png";
import me2 from "./assets/me2.png";
import trees from "./assets/trees.jpg";

function App() {
  return (
    <Box
      margin={10}
      padding={10}
      bg={`linear-gradient( rgba(255, 255, 255, 0.9) 100%, rgba(255, 255, 255, 0.8)100%), url(${me2}) no-repeat fixed center`}
    >
      <Bio />
    </Box>
  );
}

export default App;
