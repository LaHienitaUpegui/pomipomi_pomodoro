import ActionButtons from "../ActionButtons/ActionButtons";
import DefaultPresets from "../DefaultPresets/DefaultPresets";
import StateBar from "../StateBar/StateBar";
import Timer from "../Timer/Timer";

function Pomodoro() {
    return (
        <main className="pomodoro">
            <StateBar />

            <Timer />

            <ActionButtons />

            <DefaultPresets />
        </main>
    );
}

export default Pomodoro;
