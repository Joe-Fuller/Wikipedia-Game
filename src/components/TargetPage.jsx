import { useEffect, useState } from "react";
import "../styles/target-page.css";
import getPageSummary from "../utils/getPageSummary";

const TargetPage = ({ className, targetPage }) => {
  const [extract, setExtract] = useState(["Loading..."]);

  useEffect(() => {
    if (targetPage !== "No Target Page") {
      getPageSummary(targetPage).then((res) => {
        setExtract(res);
      });
    }
  }, [targetPage]);

  return (
    <div className={className}>
      <ul>
        {extract.map((e) => {
          return <li key={e}>{e}</li>;
        })}
      </ul>
    </div>
  );
};

export default TargetPage;
