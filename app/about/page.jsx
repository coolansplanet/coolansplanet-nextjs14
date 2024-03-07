import Markdown from "markdown-to-jsx";
import { getAboutPageData } from "@/helpers/provider";
import styles from "./page.module.scss";
import Image from "@/components/About.page/Image";

const About = async () => {
  let content;
  try {
    const { data } = await getAboutPageData();
    content = data;
  } catch (error) {
    console.error('Error fetching data in the "About" page', error.message);
  }
  const { title, text, imageUrl } = content;
  return (
    <div className={styles.about}>
      {!!title && (
        <>
          <h1 className={styles.title}>{title}</h1>
          <Markdown className={styles.text}>{text}</Markdown>
          {!!imageUrl && <Image url={imageUrl} />}
        </>
      )}
    </div>
  );
};

export default About;
