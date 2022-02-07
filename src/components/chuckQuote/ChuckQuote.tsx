import React from "react";
import s from "./ChuckQoute.module.css";
import chuckIcon from "../../img/chackNorris.svg";

interface IProps {
  qoute: string;
  isLoading: boolean;
}

const ChuckQoute: React.FC<IProps> = ({ qoute, isLoading }) => {
  return (
    <>
      <div className={s.container}>
        <img className={s.svg} src={chuckIcon} />
        <div className={s.wrapper}>
          <p className={s.qouteText}>
            {isLoading ? "Please wait!" : qoute || "Choose a category!"}
          </p>
        </div>
      </div>
    </>
  );
};

export default ChuckQoute;
