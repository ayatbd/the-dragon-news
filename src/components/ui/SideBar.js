import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import cardImage from "@/assets/card-img.png";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Grid div xs={12}>
        <Typography variant="h4">Dhaka</Typography>
        <Divider />
        {/* grid 1 */}
        <Card className="my-4">
          <CardActionArea>
            <CardMedia>
              <Image src={cardImage} width={800} alt="News Image" />
            </CardMedia>
            <CardContent className="space-y-3">
              <span className="p-1 rounded-sm bg-[#FF0000]">Technology</span>
              <Typography
                className="font-bold"
                gutterBottom
                variant="body2"
                component="div"
              >
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
              </Typography>
              <Typography variant="body2" color="text.secondary">
                By Awlad Hossain - Mar 18 2023
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout........
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Stack spacing={2}>
        <Grid className="border-t-2" container spacing={2}>
          <Grid item xs={3}>
            <Image className="h-full rounded-md" src={cardImage} alt="" />
          </Grid>
          <Grid item xs={9}>
            <Typography
              className="font-bold"
              gutterBottom
              variant="body2"
              component="div"
            >
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Awlad Hossain - Mar 18 2023
            </Typography>
          </Grid>
        </Grid>
        <Grid className="border-t-2" container spacing={2}>
          <Grid item xs={3}>
            <Image className="h-full rounded-md" src={cardImage} alt="" />
          </Grid>
          <Grid item xs={9}>
            <Typography
              className="font-bold"
              gutterBottom
              variant="body2"
              component="div"
            >
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Awlad Hossain - Mar 18 2023
            </Typography>
          </Grid>
        </Grid>
        <Grid className="border-t-2" container spacing={2}>
          <Grid item xs={3}>
            <Image className="h-full rounded-md" src={cardImage} alt="" />
          </Grid>
          <Grid item xs={9}>
            <Typography
              className="font-bold"
              gutterBottom
              variant="body2"
              component="div"
            >
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Awlad Hossain - Mar 18 2023
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default SideBar;
