function FollowProfile() {
    return (
        <div className="followProfile">
            <img src="https://picsum.photos/200/300" alt="profile" />
            <div className="followProfile__info">
                <div className="username">John Doe</div>
                <div className="usertag">johndoe</div>
            </div>
            <button>Follow</button>
        </div>
    );
}

export default FollowProfile;
