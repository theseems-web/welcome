import './App.css';
import ColorSwitch from "./components/ColorSwitch";
import Avatar from "./components/Avatar";
import Header from "./components/Header";
import Description from "./components/Description";
import IconList from "./components/IconList";
import TextIcon from "./components/icons/TextIcon";
import GithubIcon from "./components/icons/GithubIcon";
import TelegramIcon from "./components/icons/TelegramIcon";
import MailIcon from "./components/icons/MailIcon";
import CvIcon from "./components/icons/CvIcon";
import ProjectsIcon from "./components/icons/ProjectsIcon";

function App() {
    return (
        <div
            className="App dark:bg-gray-900 dark:text-gray-400 transition duration-700 flex justify-center flex-wrap align-middle"
            style={{flexDirection: 'column'}}>
            <ColorSwitch/>
            <div className="p-8 rounded-lg max-w-prose mx-auto">
                <div className="flex flex-wrap align-middle items-center justify-center text-center mx-auto">
                    <Avatar/>
                    <Header/>
                    <IconList>
                        <TextIcon href={"/cv"}>
                            <div className={"bg-blue-500 transition duration-700 dark:bg-green-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"}>
                                <CvIcon className={"inline"}/> CV
                            </div>
                        </TextIcon>

                        <TextIcon href={"/projects"}>
                            <div className={"bg-blue-500 transition duration-700 dark:bg-green-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"}>
                                <ProjectsIcon className={"inline"}/> Projects
                            </div>
                        </TextIcon>
                    </IconList>
                </div>
                <Description/>
            </div>

            <IconList>
                <GithubIcon href={"//theseems.ru/github"}/>
                <TelegramIcon href={"//theseems.ru/telegram"}/>
                <MailIcon href={"mailto:me@theseems.ru"}/>
            </IconList>
        </div>
    )
}

export default App;
