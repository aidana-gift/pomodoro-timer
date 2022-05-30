import React from "react";
import SettingsInputItem from "./SettingsInputItem";

const SettingsModal = () => {
    const settingsInputs = [
        {
            label: "Pomodoro",
            name: "inputPomodoroLength"
        },
        {
            label: "Short Break",
            name: "inputShortBreakLength"
        },
        {
            label: "Long Break",
            name: "inputLongBreakLength"
        },
        {
            label: "Number of pomodoro between break",
            name: "inputPomodoroBeforeLongBreak"
        },
    ]
    return (
        <div className="settings-modal">
            <div className="settings-modal__content">
                <form className="settings-modal__form">
                    {settingsInputs.map((item, id) => {
                        return (
                            <SettingsInputItem
                                key={id}
                                label={item.label}
                                name={item.name}
                                value={'25'}
                            />
                        )
                    })}
                    <div>
                        <button className="pomodoro-button">Close</button>
                        <button className="pomodoro-button">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SettingsModal