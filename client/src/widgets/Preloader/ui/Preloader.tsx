import { useState, useEffect } from "react";
import styles from "./Preloader.module.scss";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles["preloader"]}>
        <div className={styles["cubeContainer"]}>
            <div className={styles["cube"]}></div>
            <div className={styles["cube"]}></div>
            <div className={styles["cube"]}></div>
        </div>
    </div>
  );
};

export default Preloader;