function Avatar() {
    return (
        <img className={"object-cover h-32 filter transform transition duration-700 dark:invert"}
             src={process.env.PUBLIC_URL + "/img/am.png"}
             alt={"My avatar"}/>
    )
}

export default Avatar;