import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "Category",
      pathname: "/category",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];
  return (
    <Box
      sx={{
        "& svg": {
          color: "white",
        },
      }}
      className="bg-black px-2 py-10"
    >
      <Container>
        <Box className="w-full text-center">
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <YouTubeIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
          {navItems.map((navItem) => (
            <Link key={navItem} href={navItem.pathname}>
              <Button className="text-white">{navItem.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography color="gray" variant="body2" textAlign="center">
          @2023 Dragon News. Design by Programming Hero
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
