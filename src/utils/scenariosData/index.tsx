interface ScenariosData {
	[scenarioName: string]: Array<Period>;
}

export interface Period {
	storyLine: Array<string>;
	date: string;
	map: string;
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

const scenariosData: ScenariosData = {
	'scenarioFirst': [
		{
			storyLine: ["Historical"],
			date: "Январь 1910г.",
			map: "map",
			startingMusic: [
				{
					name: "Музыка 4",
					src: "example1",
					allowed: true,
				},
			],
			events: [
			]
		}
	],

	'scenarioSecond': [
		{
			storyLine: ["Historical"],
			date: "Январь 1922г.",
			map: "map",
			startingMusic: [
				{
					name: "Музыка 2",
					src: "example1",
					allowed: true,
				},
			],
			events: [
			]
		},
	],

	'scenarioThird': [
		{
			storyLine: ["Historical"],
			date: "Январь 1934г.",
			map: "map-1934-01-historical",
			startingMusic: [
				{
					name: "Музыка 1",
					src: "example1",
					allowed: true,
				},
				{
					name: "Музыка 2",
					src: "example2",
					allowed: false,
				},
			],
			events: [
				{
					name: "Название события номер 2",
					desc: "Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание",
					image: "scenario_second",
					option1: "Первая опция",
					type: "info",
					icon: "battle-icon",
					positionX: "450px",
					positionY: "550px",
				},
				{
					name: "Название события номер 3",
					desc: "Описание описание описание описание описание описание описание",
					image: "scenario_second",
					option1: "Первая опция",
					type: "info",
					icon: "red-circle",
					positionX: "600px",
					positionY: "600px",
				},
				{
					name: "Название музыкального события",
					desc: "Описание описание описание описание описание описание описание",
					image: "scenario_second",
					option1: "Первая опция",
					option2: "Добавить в список",
					type: "music",
					icon: "red-circle",
					positionX: "380px",
					positionY: "450px",
					newMusicName: "Музыка 3",
					newMusicSrc: "example2",
				},
			]
		},
		{
			storyLine: ["Historical", "Test"],
			date: "Февраль 1934г.",
			map: "map-1934-01-historical",
			events: [
				{
					name: "Название альтернативного события",
					desc: "Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание",
					image: "scenario_second",
					option1: "Первая опция",
					type: "info",
					icon: "red-circle",
					positionX: "600px",
					positionY: "550px",
				},
			]
		},
		{
			storyLine: ["Historical"],
			date: "Март 1934г.",
			map: "map-1934-01-historical",
			events: [
				{
					name: "Название события номер 4",
					desc: "Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание",
					image: "scenario_second",
					option1: "Первая опция",
					type: "info",
					icon: "red-circle",
					positionX: "600px",
					positionY: "550px",
				},
			]
		},
	],
}

export default scenariosData;