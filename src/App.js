import './App.css';
import ColorSwitch from "./components/ColorSwitch";
import Avatar from "./components/Avatar";
import Header from "./components/Header";
import Description from "./components/Description";
import IconList from "./components/IconList";

function App() {
    return (
        <div className="App dark:bg-gray-900 dark:text-gray-400 transition duration-700 flex justify-center flex-wrap align-middle"
             style={{flexDirection: 'column'}}>
            <ColorSwitch/>
            <div className="p-8 rounded-lg max-w-prose mx-auto">
                <div className="flex flex-wrap align-middle justify-center text-center mx-auto">
                    <Avatar/>
                    <Header/>
                </div>
                <Description/>
            </div>
            <IconList/>
        </div>
    )
}

export default App;
