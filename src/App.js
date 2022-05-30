import React, {useState} from "react";
import Timer from "./components/Timer";
import TimerButtons from "./components/TimerButtons";
import SettingsButton from "./components/SettingsButton";

import './App.css';
import SettingsModal from "./components/SettingsModal";

function App() {
    const [settingsOpened, setSettingsOpened] = useState(false);

    const openSettingsModal = () => {
        setSettingsOpened(!settingsOpened)
    }

    return (
        <div className="container">
            {settingsOpened ? <SettingsModal /> : (
                <div className="timer-wrapper">
                    <div>
                        <Timer />
                    </div>
                    <div>
                        <TimerButtons />
                        <SettingsButton openSettingsModal={openSettingsModal} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
