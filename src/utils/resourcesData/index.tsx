interface ResourcesData {
    [categoryName: string]: Array<Resource>;
}

export interface Resource {
    name: string;
    desc: string;
    image: string;
}

// TODO: Enums
export const resourcesData: ResourcesData = {
    books: [
        {
            name: "Ресурс 1",
            desc: "",
            image: "",
        },
        {
            name: "Ресурс 2",
            desc: "",
            image: "",
        },
        {
            name: "Ресурс 3",
            desc: "",
            image: "",
        },
        {
            name: "Ресурс 4",
            desc: "",
            image: "",
        },
        {
            name: "Ресурс 5",
            desc: "",
            image: "",
        },
    ],
    articles: [
        {
            name: "Ресурс 1",
            desc: "",
            image: "",
        },
        {
            name: "Ресурс 2",
            desc: "",
            image: "",
        },
    ],
    films: [
        {
            name: "Ресурс 1",
            desc: "",
            image: "",
        },
        {
            name: "Ресурс 2",
            desc: "",
            image: "",
        },
    ],
};
