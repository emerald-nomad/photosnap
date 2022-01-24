import NextLink from "next/link";
import Image from "next/image";
import styles from "./Link.module.scss";

interface LinkProps {
  href: string;
  dark?: boolean;
  expanded?: boolean;
}

const Link: React.FC<LinkProps> = ({ children, dark, expanded, href }) => {
  const classes = [styles["link"]];

  if (dark) {
    classes.push(styles["dark"]);
  }

  if (expanded) {
    classes.push(styles["expanded"]);
  }

  return (
    <NextLink href={href}>
      <a className={classes.join(" ")}>
        <h4>{children}</h4>
        <Image
          src="/assets/shared/desktop/arrow.svg"
          width={43}
          height={14}
          alt="Arrow Right"
        />
      </a>
    </NextLink>
  );
};

export default Link;
