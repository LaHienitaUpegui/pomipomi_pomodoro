import { useEffect, useState } from "react";
import ActionButtons from "../ActionButtons/ActionButtons";
import DefaultPresets from "../DefaultPresets/DefaultPresets";
import Timer from "../Timer/Timer";
import StageBar from "../StateBar/StateBar";
import { presets } from "../../consts/consts";

// Add the Preset type import if it exists, or define it here
// import type { Preset } from "../../consts/consts";
type Preset = {
    id: number;
    name: string | null;
    focusTime: number;
    shortBreak: number;
    longBreak: number;
};

export default function Pomodoro() {
    //* State of time preset configuration
    const [timeConfiguration, setTimePresetConfiguration] = useState<Preset>({
        id: 0,
        name: null,
        focusTime: 1800,
        shortBreak: 300,
        longBreak: 1200,
    });

    //* State: status of start and pause buttons
    const [isRunning, setIsRunning] = useState(false);

    //* State: time
    const [time, setTime] = useState(timeConfiguration.focusTime);

    //* State: status of current stage
    const [isWorkTime, setIsWorkTime] = useState(true);
    const [isShortBreak, setIsShortBreak] = useState(false);
    const [isLongBreak, setIsLongBreak] = useState(false);

    //* State: status of preset chosen
    const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

    function handleTimeConfiguration(presetName: string) {
        const preset = presets.find((p) => p.name === presetName);

        if (preset) {
            setTimePresetConfiguration(preset);

            // Update the time based on the selected preset
            if (isWorkTime) setTime(preset.focusTime);
            else if (isShortBreak) setTime(preset.shortBreak);
            else if (isLongBreak) setTime(preset.longBreak);
        }
    }

    //* Function to handle start, pause and reset buttons
    function handleStart() {
        setIsRunning(true);
    }

    function handlePause() {
        setIsRunning(false);
    }

    function setStageTime(stage: "work" | "shortBreak" | "longBreak") {
        if (stage === "work") setTime(timeConfiguration.focusTime);
        else if (stage === "shortBreak") setTime(timeConfiguration.shortBreak);
        else if (stage === "longBreak") setTime(timeConfiguration.longBreak);
    }

    function handleReset() {
        if (isWorkTime) setStageTime("work");
        else if (isShortBreak) setStageTime("shortBreak");
        else if (isLongBreak) setStageTime("longBreak");
        setIsRunning(false);
    }

    //* Function to handle stage changes
    function handleStage(stage: "work" | "shortBreak" | "longBreak") {
        setIsWorkTime(stage === "work");
        setIsShortBreak(stage === "shortBreak");
        setIsLongBreak(stage === "longBreak");
    }

    //* Function to set the interval of time
    useEffect(() => {
        // Defensive statement
        if (!isRunning || time === 0) return handlePause();

        // Interval in case isRunning is true
        const interval = setInterval(() => {
            setTime(time - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [isRunning, time]);

    return (
        <main className="pomodoro">
            <div className="timer-section-container">
                <StageBar
                    isWorkTime={isWorkTime}
                    isShortBreakTime={isShortBreak}
                    isLongBreakTime={isLongBreak}
                    handleStage={handleStage}
                    setTime={setTime}
                    timeConfiguration={timeConfiguration}
                />

                <Timer time={time} />

                <ActionButtons
                    status={isRunning}
                    onStart={handleStart}
                    onPause={handlePause}
                    onRestart={handleReset}
                />
            </div>

            <div className="preset-section-container">
                <DefaultPresets
                    setSelectedPreset={setSelectedPreset}
                    handleTimeConfiguration={handleTimeConfiguration}
                    presets={presets}
                    selectedPreset={selectedPreset}
                />
            </div>
        </main>
    );
}
