const gender = "male";

function ProfilePic() {
    if (gender.toLowerCase() == "male") {
        return (
            <img
                style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                }}
                className="profile-image-main"
                src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image-300x300.jpeg"
            />
        );
    } else if (gender.toLowerCase() == "female") {
        return (
            <img
                style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                }}
                className="profile-image-main"
                src="https://www.gmevents.ae/wp-content/uploads/2019/04/female-placeholder.jpg"
            />
        );
    }
}

export default ProfilePic;
