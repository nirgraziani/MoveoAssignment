import { ReactNode } from "react";
import styles from "./Header.module.css";

interface headerProps {
  children: ReactNode;
}

const Header = ({ children }: headerProps) => {
  return <div className={styles.Header}>{children}</div>;
};

export default Header;
