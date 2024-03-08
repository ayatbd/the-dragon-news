import { getSingleNews } from "@/utils/getSingleNews";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
  const { data } = await getSingleNews(params.newsId);
  // console.log(data);
  return (
    <div>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Image src={data.thumbnail_url} width={800} height={500} alt="" />
            </Grid>
            <Grid item lg={6}></Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default NewsDetailsPage;
