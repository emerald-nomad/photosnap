import { Link } from "components";
import styles from "./TextSection.module.scss";

interface TextSectionProps {
  imgUrls: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
  text: string;
  dark?: boolean;
  link?: {
    text: string;
    href: string;
  };
}

const TextSection: React.FC<TextSectionProps> = ({
  dark,
  imgUrls,
  title,
  text,
  link,
}) => {
  const darkThemeClassName = dark ? styles["dark"] : "";

  return (
    <div className={[styles["text-section"], darkThemeClassName].join(" ")}>
      <picture className={styles["text-section__picture"]}>
        <source srcSet={imgUrls.mobile} media="(max-width: 47em)" />
        <source srcSet={imgUrls.tablet} media="(max-width: 65em)" />
        <img src={imgUrls.desktop} alt="Earth & Space Background Image" />
      </picture>
      <section className={styles["text-section__content"]}>
        <h1>{title}</h1>
        <p>{text}</p>
        {link && (
          <Link dark={dark} href={link.href}>
            <h4>{link.text}</h4>
          </Link>
        )}
      </section>
    </div>
  );
};

export default TextSection;
