import { ISearchCriterias } from "../models/search";

export class SearchParamsBuilder {
    private model: ISearchCriterias
    constructor() {
        // Default data
        this.model = {
            destination: "Any",
            from: "01/02/2018",
            to: "01/03/2018",
        }
    }

    forDestination(destination: 'Bali' | 'Miami' | 'Kiev'): SearchParamsBuilder {
        this.model.destination = destination
        return this
    }

    from(from: string): SearchParamsBuilder {
        // Some validation can be done here
        this.model.from = from
        return this
    }

    to(to: string): SearchParamsBuilder {
        // Some validation can be done here
        this.model.to = to
        return this
    }

    build(): ISearchCriterias {
        return this.model
    }

}