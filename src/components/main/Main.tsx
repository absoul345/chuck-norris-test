import React, { useEffect, useState } from "react";
import s from "./Main.module.css";
import CategoryList from "../categoryList/CategoryList";
import ChuckQoute from "../chuckQuote/ChuckQuote";
import { fetchCategoryByQuery } from "../../api-services/ApiServices";

const Main: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const [qoute, setQoute] = useState<string>("");
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (!category) {
        setIsloading(false);
        return;
      }
      const response = await fetchCategoryByQuery(category);
      if (response.length === 0) {
        setIsloading(false);
        return setQoute("No qoute's here!");
      }
      const randomIndex = Math.floor(Math.random() * response.length);
      const qouteSplice = response.splice(randomIndex, 1);
      const randomQoute = qouteSplice[0].value;
      setIsloading(false);
      setQoute(randomQoute);
    })();
  }, [category]);

  const setActiveCategory = (str: string): void => {
    setCategory("");
    setQoute("");
    setIsloading(true);
    setCategory(str);
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Categories</h1>
      <CategoryList setActiveCategory={setActiveCategory} category={category} />
      <ChuckQoute qoute={qoute} isLoading={isLoading} />
    </div>
  );
};

export default Main;
