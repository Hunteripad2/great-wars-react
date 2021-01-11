export interface ScenariosData {
    [scenarioName: string]: Array<Period>;
}

export interface Period {
    storyLine: Array<string>;
    date: string;
    map: string;
    countries: string;
    startingMusic?: Array<Track>;
    events: Array<Event>;
}

export interface Track {
    name?: string;
    src?: string;
    allowed?: boolean;
}

export interface Event {
    name?: string;
    desc?: string;
    image?: string;
    option1?: string;
    option2?: string;
    type?: string;
    icon?: string;
    positionX?: string;
    positionY?: string;
    newMusicName?: string;
    newMusicSrc?: string;
    checked?: boolean;
}
