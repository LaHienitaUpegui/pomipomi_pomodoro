interface Preset {
    id: number;
    name: string;
    focusTime: number;
    shortBreak: number;
    longBreak: number;
}

export const presets: Preset[] = [
    {
        id: 1,
        name: "Short focus",
        focusTime: 900,
        shortBreak: 300,
        longBreak: 1200,
    },
    {
        id: 2,
        name: "Medium focus",
        focusTime: 1500,
        shortBreak: 300,
        longBreak: 1200,
    },
    {
        id: 3,
        name: "Long focus",
        focusTime: 2400,
        shortBreak: 300,
        longBreak: 1800,
    },
];
