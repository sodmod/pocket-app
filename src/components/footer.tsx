import { Box, Card, CardFooter, Link } from "@chakra-ui/react";
import { FiBarChart2 } from "react-icons/fi";
import { RiHome4Line } from "react-icons/ri";
import { TbFileReport } from "react-icons/tb";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";

function Footer() {
  return (
    <Box>
      <Card display={{ md: "none" }} width="100vw">
        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
          color="#C1C4CD"
        >
          <Box flex="1" p={2}>
            <Link variant="ghost" fontSize="2rem">
              <RiHome4Line />
            </Link>
            home
          </Box>
          <Box flex="1" p={2}>
            <Link variant="ghost" fontSize="2rem">
              <TbFileReport />
            </Link>
            Reports
          </Box>
          <Box flex="1" p={2}>
            <Link variant="ghost" fontSize="2rem">
              <HiOutlineChatBubbleOvalLeft />
            </Link>
            Chat
          </Box>
          <Box flex="1" p={2} color="#001233">
            <Link variant="ghost" fontSize="2rem" color="#0466C8">
              <FiBarChart2 />
            </Link>
            Budget
          </Box>
          <Box flex="1" p={2}>
            <Link variant="ghost" fontSize="2rem">
              <CiUser />
            </Link>
            Profile
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
}

export default Footer;
