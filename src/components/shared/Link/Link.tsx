import NextLink from "next/link";
import Image from "next/image";
import styles from "./Link.module.scss";
import Arrow from "assets/shared/desktop/arrow.svg";

interface LinkProps {
  dark?: boolean;
}

const Link: React.FC<LinkProps> = ({ children, dark }) => {
  const darkThemeClassName = dark ? styles["dark"] : "";

  return (
    <NextLink href="/">
      <a className={[styles["link"], darkThemeClassName].join(" ")}>
        {children}
        <Image src={Arrow} alt="Arrow Right" />
      </a>
    </NextLink>
  );
};

export default Link;
