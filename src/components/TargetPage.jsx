import { useEffect, useState } from "react";
import "../styles/target-page.css";
import getPageSummary from "../utils/getPageSummary";

const TargetPage = ({ className, targetPage, getNewTarget }) => {
  const [extract, setExtract] = useState(["Loading..."]);

  useEffect(() => {
    if (targetPage !== "No Target Page") {
      getPageSummary(targetPage).then((res) => {
        if (res.length < 3) {
          getNewTarget();
        } else {
          setExtract(res);
        }
      });
    }
  }, [targetPage, getNewTarget]);

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
