import {
  Box,
  Card,
  CardBody,
  Center,
  Container,
  Flex,
  GridItem,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";

function Budget() {
  return (
    <GridItem w="90%" mx="auto" h="fit-content" px="2rem">
      <Flex>
        <Center gap="1rem">
          <div className="box">
            <div className="group">
              <img className="image" alt="Image" src="src\assets\naira.svg" />
            </div>
          </div>
          <Text
            fontSize="2rem"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="0%"
          >
            Montly Budget
          </Text>
        </Center>
      </Flex>
      <Card mt="20px">
        <CardBody>
          <Text fontSize="40px">&#8358; 120,000</Text>
        </CardBody>
      </Card>
      <Box w="100%" mt="2rem">
        <Flex
          w={{ base: "100%", md: "70%" }}
          justifyContent={{ md: "space-evenly" }}
          p="1rem"
        >
          <Link color="#707480">Last Month</Link>
          <Link color="#0466C8">This Month</Link>
        </Flex>
        <Container textAlign="center">
          <Box position="relative">
            <Text
              position="absolute"
              top={{ base: "130px", md: "100px" }}
              left={{ base: "80px", md: "145px" }}
              fontSize={{ base: "49px", md: "100px" }}
              fontWeight="700"
              fontStyle="none"
              color="#0466C8"
            >
              49%
            </Text>
            <Icon
              xmlns="http://www.w3.org/2000/svg"
              width={{ base: "15rem", md: "350px" }}
              height={{ base: "20rem", md: "350px" }}
              viewBox="0 0 150 150"
              fill="none"
            >
              <circle
                cx="75"
                cy="75"
                r="70"
                stroke="#0466C8"
                stroke-opacity="0.4"
                stroke-width="10"
              />
              <mask id="path-2-inside-1_1_40" fill="white">
                <path d="M75 12.6562C75 10.8441 76.4701 9.36644 78.28 9.45695C94.1376 10.25 109.214 16.7721 120.669 27.873C132.912 39.7368 140.057 55.8992 140.593 72.9387C141.128 89.9782 135.012 106.557 123.538 119.166C112.803 130.965 98.1655 138.421 82.3891 140.208C80.5884 140.412 79.0284 139.029 78.9146 137.221C78.8008 135.412 80.1768 133.863 81.9763 133.649C96.0506 131.975 109.096 125.287 118.684 114.75C129.011 103.402 134.515 88.4803 134.033 73.1448C133.551 57.8093 127.121 43.2631 116.102 32.5857C105.872 22.6715 92.4315 16.8152 78.2799 16.0286C76.4705 15.928 75 14.4684 75 12.6562Z" />
              </mask>
              <path
                d="M75 12.6562C75 10.8441 76.4701 9.36644 78.28 9.45695C94.1376 10.25 109.214 16.7721 120.669 27.873C132.912 39.7368 140.057 55.8992 140.593 72.9387C141.128 89.9782 135.012 106.557 123.538 119.166C112.803 130.965 98.1655 138.421 82.3891 140.208C80.5884 140.412 79.0284 139.029 78.9146 137.221C78.8008 135.412 80.1768 133.863 81.9763 133.649C96.0506 131.975 109.096 125.287 118.684 114.75C129.011 103.402 134.515 88.4803 134.033 73.1448C133.551 57.8093 127.121 43.2631 116.102 32.5857C105.872 22.6715 92.4315 16.8152 78.2799 16.0286C76.4705 15.928 75 14.4684 75 12.6562Z"
                stroke="#0466C8"
                stroke-width="16"
                mask="url(#path-2-inside-1_1_40)"
              />
            </Icon>
          </Box>
          <Text>Amount spent so far</Text>
          <Text color="#0466cb">
            &#8358;50,000
            <span style={{ color: "#67a2dc" }}>/&#8358;120,000</span>
          </Text>
        </Container>
      </Box>
    </GridItem>
  );
}

export default Budget;
