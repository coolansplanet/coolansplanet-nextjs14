import { getPublications } from "@/helpers/provider";
import Info from "@/components/Publication.page/Info";
import styles from "./layout.module.scss";

const Layout = async ({ children, params }) => {
  let publications = [];
  try {
    const { data } = await getPublications();
    publications = data;
  } catch (error) {
    console.error("Error fetching publication list", error.message);
  }
  return (
    <div className={styles.publication}>
      <div className={styles.content}>
        {children}
        <Info publications={publications} id={params.id} />
      </div>
    </div>
  );
};

export default Layout;
