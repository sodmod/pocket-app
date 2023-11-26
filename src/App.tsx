import "./App.css";
import { Box } from "@chakra-ui/react";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Body from "./components/body";

function App() {
  return (
    <Box
      as="section"
      bg="#FCFCFC"
      w="100vw"
      minW="100vw"
      minH="100vh"
      color="#001233"
      padding={{ base: "0px", md: "20px" }}
      position="relative"
    >
      <Nav />
      <Body />
      <Footer />
    </Box>
  );
}

export default App;
