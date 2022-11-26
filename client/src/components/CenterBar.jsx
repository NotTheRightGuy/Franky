import "../styles/centerbar.css";
import CookAFranky from "./CookFranky";
import Franky from "./Franky";

function CenterBar() {
    return (
        <div className="centerBar">
            <CookAFranky />
            <div className="frankyContainer">
                <Franky />
                <Franky />
                <Franky />
                <Franky />
                <Franky />
            </div>
        </div>
    );
}

export default CenterBar;
