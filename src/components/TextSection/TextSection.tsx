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
      <picture>
        <source srcSet={imgUrls.mobile} media="(max-width: 375px)" />
        <source srcSet={imgUrls.tablet} media="(max-width: 768px)" />
        <img
          src={imgUrls.desktop}
          className={styles["text-section__img"]}
          alt="Earth & Space Background Image"
        />
      </picture>
      <section className={styles["text-section__content"]}>
        <h1>{title}</h1>
        <p>{text}</p>
        {link && (
          <Link dark={dark} href={link.href}>
            {link.text}
          </Link>
        )}
      </section>
    </div>
  );
};

export default TextSection;
