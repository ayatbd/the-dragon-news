import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/The Dragon News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="py-5">
      <Container>
        <div className="space-y-3">
          <Image
            src={headingImage}
            width={500}
            height={500}
            className="mx-auto"
            alt="heading image"
          />
          <Typography color="gray" variant="body2" textAlign="center">
            Journalism Without Fear or Favour
          </Typography>
          <Typography textAlign="center">{currentDate}</Typography>
        </div>
      </Container>
    </Box>
  );
};

export default Header;
