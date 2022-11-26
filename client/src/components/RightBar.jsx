import "../styles/rightbar.css";
import SearchBar from "./searchBar";
import WhatsHappening from "./WhatsHappening";
import WhoToFollow from "./WhoToFollow";

function RightBar() {
    return (
        <div className="rightBar">
            <SearchBar />
            <WhatsHappening />
            <WhoToFollow />
        </div>
    );
}

export default RightBar;
