import classes from "./profile.module.scss";

const PutImage = () => {
    const user = {
        firstname: "Алексей",
        lastName: "Торопов",
        imageUrl: "/vite.svg",
    }

    return (
        <div className={classes.profile}>
            <img className={classes.profile__img} src={user.imageUrl} alt="vite" />
            <span className="userInfo">{ user.firstname + " " + user.lastName[0] + "."}</span>
        </div>
    )
}
export default PutImage;