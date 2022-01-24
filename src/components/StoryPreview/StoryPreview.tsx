import { Link } from "components";
import styles from "./StoryPreview.module.scss";

interface StoryPreviewProps {
  backgroundImg: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  author: string;
  title: string;
}

const StoryPreview: React.FC<StoryPreviewProps> = ({
  backgroundImg,
  author,
  title,
}) => {
  return (
    <section className={styles["story-preview"]}>
      <picture className={styles["story-preview__picture"]}>
        <source srcSet={backgroundImg.mobile} media="(max-width: 47em)" />
        <source srcSet={backgroundImg.tablet} media="(max-width: 65em)" />
        <img
          className={styles["story-preview__img"]}
          src={backgroundImg.desktop}
          alt="Story Background Image"
        />
      </picture>

      <div className={styles["story-preview__content"]}>
        <h3>{title}</h3>
        <p>by {author}</p>
        <hr />
        <Link dark expanded href="#">
          Read story
        </Link>
      </div>
    </section>
  );
};

export default StoryPreview;
