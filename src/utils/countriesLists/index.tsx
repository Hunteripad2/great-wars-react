export interface CountriesLists {
    [countryList: string]: Array<string>;
}

export const countriesLists: CountriesLists = {
    countryList1910: ["FRA_republic", "GBR", "GER_empire", "POR_kingdom", "SPA_kingdom"],
    countryList1934: ["FRA_republic", "GBR", "GER_nazi", "IRE_republic", "POR_kingdom", "SPA_republic"],
};
