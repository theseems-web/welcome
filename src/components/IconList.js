import CvIcon from "./icons/CvIcon";
import GithubIcon from "./icons/GithubIcon";
import TelegramIcon from "./icons/TelegramIcon";
import MailIcon from "./icons/MailIcon";

const className = "h-6 w-6 text-blue-500 dark:text-green-500 transition duration-700";

function IconList() {
    return (
        <div className="flex flex-wrap align-middle justify-center text-center mx-auto space-x-6 mt-5">
            <CvIcon href={"//theseems.ru/cv"} className={className}/>
            <GithubIcon href={"//theseems.ru/github"} className={className}/>
            <TelegramIcon href={"//theseems.ru/telegram"} className={className}/>
            <MailIcon href={"mailto:me@theseems.ru"} className={className}/>
        </div>
    )
}

export default IconList;