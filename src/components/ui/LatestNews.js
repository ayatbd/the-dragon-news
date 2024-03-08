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
import { getAllNews } from "@/utils/getAllNews";

const LatestNews = async () => {
  const { data: news } = await getAllNews();
  // console.log(news);
  return (
    <Box className="my-5">
      <Typography variant="h4">National News</Typography>
      <Divider />
      <Card className="my-4">
        <CardActionArea>
          <CardMedia>
            <Image
              src={news[0].thumbnail_url}
              alt=""
              width={800}
              height={500}
            />
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
        {news.map((singleNews) => (
          <Grid key={singleNews.id} item xs={6}>
            {/* grid 1 */}
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={singleNews.thumbnail_url}
                    width={800}
                    height={100}
                    alt=""
                  />
                </CardMedia>
                <CardContent className="space-y-3">
                  <span className="p-1 rounded-sm bg-[#FF0000]">
                    Technology
                  </span>
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
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;
