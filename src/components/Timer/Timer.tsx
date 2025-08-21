import "./TimerStyles.css";

function Timer({ time }: { time: number }) {
    // Function to format time like 00:00
    function handleFormatTime(numberOfSeconds: number) {
        const minutes: number = Math.floor(numberOfSeconds / 60);
        const seconds: number = numberOfSeconds % 60;

        const formatedTime = `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;

        return formatedTime;
    }

    return (
        <div className="timer-container">
            <p className="timer">{handleFormatTime(time)}</p>
        </div>
    );
}

export default Timer;
