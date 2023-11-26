import { Grid } from "@chakra-ui/react";
import Budget from "./budget";
import Breakdown from "./breakdown";

function Body() {
  return (
    <Grid
      templateColumns={{ md: "repeat(2, 1fr)" }}
      templateRows={{ base: "repeat(2, 1fr)" }}
      gap={6}
      minW="100vw"
    >
      <Budget />
      <Breakdown />
    </Grid>
  );
}

export default Body;
