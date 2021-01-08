interface CountriesData {
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

// TODO: теги стран как enum
export const countriesData: CountriesData = {
    GBR: {
        name: "Соединённое королевство Великобритании и Северной Ирландии",
        backstory: "Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание",
        flag: "GBR",
        icon: "GBR",
        positionX: "345px",
        positionY: "450px",
    },
    GER: {
        name: "Германское государство (Третий рейх)",
        backstory: "Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание",
        flag: "GER",
        icon: "GER",
        positionX: "550px",
        positionY: "490px",
    },
};
