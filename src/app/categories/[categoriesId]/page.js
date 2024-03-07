import { getCategoryNews } from "@/utils/getCategoryNews";

const DynamicNewsPage = async ({ params, searchParams }) => {
  console.log(searchParams);
  // const { data } = await getCategoryNews();
  return (
    <div>
      <h1>Dynamic News Page</h1>
    </div>
  );
};

export default DynamicNewsPage;
