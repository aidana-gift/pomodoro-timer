import React from 'react';

const SettingsInputItem = ({label, name, value}) => {
    return (
        <div>
            <label className="settings-modal__label">{label}</label>
            <input type="number"
                   name={name}
                   value={value}
                   className="settings-modal__input"/>
        </div>
    );
};

export default SettingsInputItem;