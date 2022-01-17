import styles from "./Button.module.scss";

interface ButtonProps {
  dark?: boolean;
}

const Button: React.FC<ButtonProps> = ({ dark, children }) => {
  const darkThemeClassName = dark ? styles["dark"] : "";

  return (
    <button className={[styles["button"], darkThemeClassName].join(" ")}>
      {children}
    </button>
  );
};

export default Button;
