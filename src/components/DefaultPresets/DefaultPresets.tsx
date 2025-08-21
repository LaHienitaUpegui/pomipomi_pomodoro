import "./DefaultPresetsStyles.css";

type Preset = {
    id: string | number;
    name: string;
    focusTime: number;
    shortBreak: number;
    longBreak: number;
};

function DefaultPresets({
    setSelectedPreset,
    handleTimeConfiguration,
    presets,
    selectedPreset,
}: {
    setSelectedPreset: (preset: string) => void;
    handleTimeConfiguration: (preset: string) => void;
    presets: Preset[];
    selectedPreset: string | null;
}) {
    return (
        <div className="default-presets-container">
            <h2 className="title-of-presets">Default presets</h2>
            <div className="preset-cards-container">
                {presets.map((preset) => (
                    <div className="preset-card" key={preset.id}>
                        <button
                            onClick={() => {
                                setSelectedPreset({
                                    selectedPreset:String preset.name,
                                });
                                handleTimeConfiguration(preset.name);
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            <h3 className="preset-title">{preset.name}</h3>
                            <p>
                                <strong>Focus time: </strong>
                                {Math.floor(preset.focusTime / 60)} minutes
                            </p>
                            <p>
                                <strong>Short break: </strong>
                                {Math.floor(preset.shortBreak / 60)} minutes
                            </p>
                            <p>
                                <strong>Long break: </strong>
                                {Math.floor(preset.longBreak / 60)} minutes
                            </p>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DefaultPresets;
