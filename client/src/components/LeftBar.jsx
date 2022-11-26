import "../styles/leftbar.css";
import ProfilePic from "./profilePic";

function LeftBar() {
    return (
        <div className="leftBar">
            <div className="buttonSection">
                <br />
                <div>Home</div>
                <div>Explore</div>
                <div>Notifications</div>
                <div>Messages</div>
                <div>Bookmarks</div>
                <div>Lists</div>
                <div>Profile</div>
                <div>More</div>
                <div className="tweet">Make a Franky</div>
            </div>
            <div className="profile">
                <div className="profile-image">
                    <ProfilePic />
                </div>
                <div className="user-details">
                    <div className="user-name">Janmejay Chatterjee</div>
                    <div className="user-tag">notJanmejay</div>
                </div>
            </div>
        </div>
    );
}

export default LeftBar;
