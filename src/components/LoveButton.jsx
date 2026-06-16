import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const LoveButton = () => {
    const [isLoved, setIsLoved] = useState(false)
    const HandleClick = () => {
        setIsLoved(!isLoved)
    }
    return (

        <div className="LoveBTN" onClick={HandleClick}>
            {isLoved ? <FaHeart className="Loveicon" /> : <FaRegHeart className="fullheart" />}
        </div>

    )
}
export default LoveButton;