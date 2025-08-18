function DefaultPresets() {
    const presets = [
        {
            id: 1,
            name: "Short focus",
            focusTime: 15,
            shortBreak: 5,
            longBreak: 20,
        },
        {
            id: 2,
            name: "Medium focus",
            focusTime: 25,
            shortBreak: 5,
            longBreak: 20,
        },
        {
            id: 3,
            name: "Long focus",
            focusTime: 40,
            shortBreak: 5,
            longBreak: 30,
        },
    ];

    return (
        <div className="default-presets">
            <h2>Default presets</h2>
            {presets.map((preset) => (
                <div className="preset-card" key={preset.id}>
                    <h3 className="preset-title">{preset.name}</h3>
                    <p>
                        <strong>Focus time: </strong>
                        {preset.focusTime} minutes
                    </p>
                    <p>
                        <strong>Short break: </strong>
                        {preset.shortBreak} minutes
                    </p>
                    <p>
                        <strong>Long break: </strong>
                        {preset.longBreak} minutes
                    </p>
                </div>
            ))}
        </div>
    );
}

export default DefaultPresets;
