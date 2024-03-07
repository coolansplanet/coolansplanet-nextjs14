//import ErrorBoundary from "components/ErrorBoundary";
import ItemList from "@/components/Home.page/ItemList";
import Cover from "@/components/Home.page/Cover";
import { getHomePageCover, getPublications } from "@/helpers/provider";
import styles from "./page.module.scss";

const HomePage = async () => {
  let publications = [];
  let coverImageUrl = "";
  try {
    const [{ data: publicationData }, { data: coverData }] = await Promise.all([
      getPublications(),
      getHomePageCover(),
    ]);
    publications = publicationData;
    coverImageUrl = coverData.imageUrl;
  } catch (error) {
    console.error("Error fetching data in Home page", error.message);
  }

  return (
    <>
      <div className={styles.homepage}>
        {!!coverImageUrl && <Cover imageUrl={coverImageUrl} />}
        <div className={styles.publications}>
          <ItemList data={publications} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
