import pause_icon from "../../assets/icons/pause_icon.svg";
import play_icon from "../../assets/icons/play_icon.svg";
import reset_icon from "../../assets/icons/reset_icon.svg";
import "./ActionButtonsStyles.css";

interface ActionButtonsProps {
    status: boolean;
    onStart: () => void;
    onPause: () => void;
    onRestart: () => void;
}

const icons: Record<string, string> = {
    Start: play_icon,
    Pause: pause_icon,
    Reset: reset_icon,
};

function ActionButtons({
    status,
    onStart,
    onPause,
    onRestart,
}: ActionButtonsProps) {
    return (
        <div className="action-buttons-container">
            {!status ? (
                <Button label="Start" onClick={onStart} stateOfStage={status} />
            ) : (
                <Button label="Pause" onClick={onPause} stateOfStage={status} />
            )}

            <Button label="Reset" onClick={onRestart} stateOfStage={status} />
        </div>
    );
}

interface ButtonProps {
    label: string;
    onClick?: () => void;
    stateOfStage: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, stateOfStage }) => {
    return (
        <button
            className={`action-button ${
                stateOfStage && label === "Pause"
                    ? " active"
                    : !stateOfStage && label === "Start"
                    ? " notActive"
                    : " reset"
            }`}
            onClick={onClick}
        >
            {icons[label] && (
                <img src={icons[label]} alt={label} className={label} />
            )}
            <span>{label}</span>
        </button>
    );
};

export default ActionButtons;
