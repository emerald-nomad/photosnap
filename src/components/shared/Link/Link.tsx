import NextLink from "next/link";
import Image from "next/image";
import styles from "./Link.module.scss";

interface LinkProps {
  dark?: boolean;
  href: string;
}

const Link: React.FC<LinkProps> = ({ children, dark, href }) => {
  const darkThemeClassName = dark ? styles["dark"] : "";

  return (
    <NextLink href={href}>
      <a className={[styles["link"], darkThemeClassName].join(" ")}>
        {children}
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
