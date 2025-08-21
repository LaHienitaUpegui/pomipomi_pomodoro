import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Pomodoro from "./components/Pomodoro/Pomodoro";

function App() {
    return (
        <div className="pomodoro-app-container">
            <Navbar />
            <Pomodoro />
        </div>
    );
}

export default App;
