import {
  Avatar,
  Center,
  Flex,
  Spacer,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

function Nav() {
  return (
    <Flex padding="20px">
      <Center w="40vw">
        <Text w="40vw" fontSize={{ md: "2rem" }} fontWeight="bold">
          Welocome back, Badmus Sodiq Olusola
        </Text>
      </Center>
      <Spacer />
      <Wrap p="4">
        <WrapItem>
          <Avatar />
        </WrapItem>
      </Wrap>
    </Flex>
  );
}

export default Nav;
