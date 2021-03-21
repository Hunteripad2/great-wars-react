import { makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore";
import { ResourcesData, Resource } from "../types";

const activeCategoryStyle = { backgroundColor: "#484848", borderTopLeftRadius: "25px", borderTopRightRadius: "25px" };

export class ResourceMenuStore {
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
    rootStore;

    resourcesData: ResourcesData = {};
    currentResourceData: Resource = {};

    booksCategoryIsShown = false;
    articlesCategoryIsShown = false;
    filmsCategoryIsShown = false;

    get anyCategoryIsShown() {
        return this.booksCategoryIsShown || this.articlesCategoryIsShown || this.filmsCategoryIsShown;
    }
    get headerDisplay() {
        return this.anyCategoryIsShown ? { transform: "scale(0, 0)" } : { transform: "scale(1, 1)" };
    }
    get resourcesDisplay() {
        return this.anyCategoryIsShown ? { opacity: "1" } : { opacity: "0" };
    }
    get booksCategoryStyle() {
        return this.booksCategoryIsShown ? activeCategoryStyle : {};
    }
    get articlesCategoryStyle() {
        return this.articlesCategoryIsShown ? activeCategoryStyle : {};
    }
    get filmsCategoryStyle() {
        return this.filmsCategoryIsShown ? activeCategoryStyle : {};
    }

    get currentResourceCategory() {
        return this.booksCategoryIsShown ? "books" : this.articlesCategoryIsShown ? "articles" : "films";
    }
    get currentResourceList() {
        return this.resourcesData[this.currentResourceCategory];
    }

    setResourcesData = (newResourcesData: ResourcesData) => {
        this.resourcesData = newResourcesData;
    };

    chooseBooksCategory = () => {
        this.booksCategoryIsShown = true;
        this.articlesCategoryIsShown = false;
        this.filmsCategoryIsShown = false;
    };
    chooseArticlesCategory = () => {
        this.booksCategoryIsShown = false;
        this.articlesCategoryIsShown = true;
        this.filmsCategoryIsShown = false;
    };
    chooseFilmsCategory = () => {
        this.booksCategoryIsShown = false;
        this.articlesCategoryIsShown = false;
        this.filmsCategoryIsShown = true;
    };

    setCurrentResourceData = (resourceId: number) => {
        this.currentResourceData = this.currentResourceList[resourceId];
    };
}
