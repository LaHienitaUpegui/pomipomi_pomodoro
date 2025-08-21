import "./StylesOfStateBar.css";

interface StateBarProps {
    handleStage: (stage: "work" | "shortBreak" | "longBreak") => void;
    isWorkTime: boolean;
    isShortBreakTime: boolean;
    isLongBreakTime: boolean;
    setTime: (time: number) => void;
    timeConfiguration: {
        id: number;
        name?: string | null;
        focusTime: number;
        shortBreak: number;
        longBreak: number;
    };
}

function StageBar({
    handleStage,
    isWorkTime,
    isShortBreakTime,
    isLongBreakTime,
    setTime,
    timeConfiguration,
}: StateBarProps) {
    return (
        <div className="state-bar">
            <Stage
                stageName="Time to focus"
                onClick={() => handleStage("work")}
                stateOfStage={isWorkTime}
                functionToHandleTime={() => {
                    setTime(timeConfiguration.focusTime);
                }}
            />
            <div className="divider"></div>
            <Stage
                stageName="Short break"
                onClick={() => handleStage("shortBreak")}
                stateOfStage={isShortBreakTime}
                functionToHandleTime={() => {
                    setTime(timeConfiguration.shortBreak);
                }}
            />
            <div className="divider"></div>
            <Stage
                stageName="Long break"
                onClick={() => handleStage("longBreak")}
                stateOfStage={isLongBreakTime}
                functionToHandleTime={() => {
                    setTime(timeConfiguration.longBreak);
                }}
            />
        </div>
    );
}

function Stage({
    stageName,
    onClick,
    stateOfStage,
    functionToHandleTime,
}: {
    stageName: string;
    onClick?: () => void;
    stateOfStage: boolean;
    functionToHandleTime: () => void;
}) {
    return (
        <button
            onClick={() => {
                if (onClick) {
                    onClick();
                }
                functionToHandleTime();
            }}
            className={`stage-button${stateOfStage ? " active" : ""}`}
        >
            {stageName}
        </button>
    );
}

export default StageBar;
