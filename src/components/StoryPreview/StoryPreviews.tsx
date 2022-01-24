import StoryPreview, { StoryPreviewProps } from "./StoryPreview";
import styles from "./StoryPreview.module.scss";

interface StoryPreviewsProps {
  previews: StoryPreviewProps[];
}

const StoryPreviews: React.FC<StoryPreviewsProps> = ({ previews }) => {
  return (
    <div className={styles["story-previews"]}>
      {previews.map((preview) => (
        <StoryPreview key={preview.title} {...preview} />
      ))}
    </div>
  );
};

export default StoryPreviews;
