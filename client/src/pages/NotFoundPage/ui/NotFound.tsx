import style from "./NotFound.module.scss";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section className={style["not-found"]}>
        <div className={style["title"]}>
            Object not found! The requested URL was not found on this server. If you
            entered the URL manually please check your spelling and try again.{" "}
        </div>
        <NavLink to="/" className={style["link"]}>На главную</NavLink>
    </section>
  );
};

export default NotFound;
