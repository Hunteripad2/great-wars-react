// TODO: теги стран и названия сценариев как enum
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

export interface ResourcesData {
    [categoryName: string]: Array<Resource>;
}

export interface Resource {
    name?: string;
    desc?: string;
    image?: string;
}

export interface CountriesData {
    [countryTag: string]: Country;
}

export interface Country {
    name?: string;
    backstory?: string;
    flag?: string;
    icon?: string;
    positionX?: string;
    positionY?: string;
}

export interface StartScreenData {
    [scenarioName: string]: Array<StartScreen>;
}

export interface StartScreen {
    title?: string;
    desc?: string;
}

export type DataName = "resources" | "scenarios" | "countries";
