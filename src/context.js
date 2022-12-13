import React, { useState, useEffect, useContext } from "react";
import { issues } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [currentIssue, setCurrentIssue] = useState(0);
  const [issuesData, setIssuesData] = useState([]);

  useEffect(() => {
    setCurrentIssue(issues.length);
    setIssuesData(issues);
  }, []);

  useEffect(() => {
    if (currentIssue === 0) {
      return;
    }
    const body = document.querySelector("body");
    const issueCurrent = issuesData.find((issue) => issue.id === currentIssue);
    const currentBcg = issueCurrent.bcgColor;
    return body.setAttribute("style", `background-color: ${currentBcg}`);
  }, [currentIssue]);

  return (
    <AppContext.Provider
      value={{ currentIssue, setCurrentIssue, issuesData, setIssuesData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
