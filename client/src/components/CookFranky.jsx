import ProfilePic from "./profilePic";

function CookAFranky() {
    return (
        <div className="cookAFranky">
            <div className="home">Home</div>
            <div className="tweetSection">
                <div className="profile-pic">
                    <ProfilePic />
                </div>
                <div className="makeTweetContainer">
                    <input
                        className="tweetarea"
                        type="text"
                        placeholder="Cook Something"
                    />
                    <button className="tweetBtn">Cook</button>
                </div>
            </div>
        </div>
    );
}

export default CookAFranky;
