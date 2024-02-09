import Avatar from "../assets/avatar.png"
import classes from "./AboutMe.module.css"

const AboutMe = () => {


    return (
        <>
            <div className={classes.avatar_card}>
                <img src={Avatar}/>
                <div>
                    我是Z
                </div>
                <p>
                    我来自汕头，金牛男，infj
                </p>
            </div>
        </>
    )
}

export default AboutMe
