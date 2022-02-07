import React, { useEffect, useMemo, useState } from "react";
import { fetchCategories } from "../../api-services/ApiServices";
import s from "./CategoryList.module.css";
import { v4 as uuidv4 } from "uuid";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { act } from "react-dom/test-utils";

interface IPropCategory {
  setActiveCategory: (str: string) => void;
  category: string;
}

const CategoryList: React.FC<IPropCategory> = ({
  setActiveCategory,
  category,
}) => {
  const [state, setState] = useState<string[] | null>(null);

  useEffect(() => {
    (async () => {
      const ressponse = await fetchCategories();
      setState(ressponse);
    })();
  }, []);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ): void => {
    setActiveCategory(newAlignment);
  };

  return (
    <div className={s.container}>
      <ToggleButtonGroup
        value={category}
        exclusive
        onChange={handleChange}
        className={s.toggleButtonGroup}
        sx={{
          "&& .Mui-selected": {
            backgroundColor: "#422ED4",
            color: "#FFFFFF",
            border: "1px solid #000000",
          },
          "&& .Mui-selected:hover": {
            backgroundColor: "#422ED4",
            color: "none",
          },
          "&& .MuiToggleButtonGroup-grouped": {
            borderRadius: "20px",
            marginLeft: "20px",
          },
        }}
      >
        {state &&
          state.map((item: string) => (
            <ToggleButton
              key={uuidv4()}
              disableRipple
              className={s.categoryButton}
              value={item}
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <span>{item}</span>
            </ToggleButton>
          ))}
        <ToggleButton
          disableRipple
          className={s.categoryButton}
          value="random"
          sx={{
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          Random
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default CategoryList;
