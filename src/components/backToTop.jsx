import { Tooltip } from "@mui/joy";
import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
const BackToTop = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  useEffect(() => {
    const getHeight = () => {
      const height = window.scrollY;
      setScrollHeight(height);
    };
    getHeight();
    window.addEventListener("scroll", getHeight);
    return () => {
      window.removeEventListener("scroll", getHeight);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Tooltip
      title="Back to top"
      placement="left"
      leaveDelay={500}
      variant="plain"
    >
      <button
        className="backBTN"
        id={scrollHeight > 160 ? "showBTN" : "hideBTN"}
        onClick={scrollToTop}
      >
        <FaAngleDoubleUp id="back-to-top" />
      </button>
    </Tooltip>
  );
};
export default BackToTop;
