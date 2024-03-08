import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
// import Image from "next/image";

const DynamicNewsPage = async ({ params, searchParams }) => {
  console.log(searchParams);
  const { data } = await getCategoryNews(searchParams.category);
  console.log(data);
  return (
    <div>
      <h1>
        Total <span className="font-bold">{searchParams.category}</span> news:{" "}
        {data.length}
      </h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((news) => (
          <Grid key={news._id} item xs={6}>
            {/* grid 1 */}
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "250px",
                    },
                  }}
                >
                  <Image
                    src={news.thumbnail_url}
                    alt=""
                    width={800}
                    height={100}
                  />
                </CardMedia>
                <CardContent className="space-y-3">
                  <span className="p-1 rounded-sm bg-[#FF0000]">
                    {news.category}
                  </span>
                  <Typography
                    className="font-semibold"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {news.title.length
                      ? news.title.slice(0, 30) + "..."
                      : news.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    By {news.author.name} - {news.author.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.details.length
                      ? news.details.slice(0, 200) + "...  see more"
                      : news.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
