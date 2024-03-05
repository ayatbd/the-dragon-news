import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import cardImage from "@/assets/card-img.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <Box className="my-5">
      <Typography variant="h4">National News</Typography>
      <Divider />
      <Card className="my-4">
        <CardActionArea>
          <CardMedia>
            <Image src={cardImage} alt="" width={800} />
          </CardMedia>
          <CardContent className="space-y-3">
            <span className="p-1 rounded-sm bg-[#FF0000]">Technology</span>
            <Typography
              className="font-semibold"
              gutterBottom
              variant="h5"
              component="div"
            >
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Awlad Hossain - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <hr />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          {/* grid 1 */}
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={cardImage} alt="" width={800} />
              </CardMedia>
              <CardContent className="space-y-3">
                <span className="p-1 rounded-sm bg-[#FF0000]">Technology</span>
                <Typography
                  className="font-semibold"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
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
        <Grid item xs={6}>
          {/* grid 1 */}
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={cardImage} alt="" width={800} />
              </CardMedia>
              <CardContent className="space-y-3">
                <span className="p-1 rounded-sm bg-[#FF0000]">Technology</span>
                <Typography
                  className="font-semibold"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
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
        <Grid item xs={6}>
          {/* grid 1 */}
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={cardImage} alt="" width={800} />
              </CardMedia>
              <CardContent className="space-y-3">
                <span className="p-1 rounded-sm bg-[#FF0000]">Technology</span>
                <Typography
                  className="font-semibold"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
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
        <Grid item xs={6}>
          {/* grid 1 */}
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={cardImage} alt="" width={800} />
              </CardMedia>
              <CardContent className="space-y-3">
                <span className="p-1 rounded-sm bg-[#FF0000]">Technology</span>
                <Typography
                  className="font-semibold"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
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
      </Grid>
    </Box>
  );
};

export default LatestNews;
