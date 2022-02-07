import React from "react";
import s from "./ChuckQoute.module.css";
import chuckIcon from "../../img/chackNorris.svg";

interface IProps {
  qoute: string;
  isLoading: boolean;
  isFirstRender: boolean;
  randomQuote: string | undefined;
}

const ChuckQoute: React.FC<IProps> = ({
  qoute,
  isLoading,
  randomQuote,
  isFirstRender,
}) => {
  return (
    <div className={s.container}>
      <img className={s.svg} src={chuckIcon} />
      <div className={s.wrapper}>
        {isFirstRender ? (
          <p className={s.qouteText}>{randomQuote}</p>
        ) : (
          <p className={s.qouteText}>
            {isLoading ? "Please wait!" : qoute || "Choose a category!"}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChuckQoute;
