import React from "react";
import s from "./Header.module.css";

interface IProps {
  iconURL: string | undefined;
}

const Header: React.FC<IProps> = ({ iconURL }) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <img className={s.icon} src={iconURL} />
        <p className={s.textLabel}>Chuck Norris</p>
      </div>
    </div>
  );
};

export default Header;
