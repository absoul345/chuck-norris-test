import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { fetchRandomData } from "./api-services/ApiServices";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { IRandomData } from "./interface/Interface";

const App: React.FC = () => {
  const [state, setState] = useState<IRandomData | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetchRandomData();
      setState(response);
    })();
  }, []);

  const propIcon = state?.icon_url;

  return (
    <StyledEngineProvider injectFirst>
      <div className="container">
        <Header iconURL={propIcon} />
        <Main />
      </div>
    </StyledEngineProvider>
  );
};

export default App;
