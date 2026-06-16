import {  useNavigate } from "react-router-dom";
import notFound from "../images/Gemini_Generated_Image_5qwr8x5qwr8x5qwr.png";
const NotFound = () => {
    const nav=useNavigate()
  return (
    <div className="notFound">
      <img src={notFound} alt="" />
      <div id="notFoundConatiner">
        <span>page not found</span>
        <button onClick={()=>nav("/")}>back to home page</button>
      </div>
    </div>
  );
};

export default NotFound;
