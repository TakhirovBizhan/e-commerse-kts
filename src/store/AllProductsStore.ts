import { makeAutoObservable } from "mobx";
import { IData } from "../config/DataInterfaces";
import { getProducts } from "../config/api";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";


class AllProductsStore {

    allProducts?: IPromiseBasedObservable<IData[]>;

    constructor() {
        makeAutoObservable(this)
    }

     getProductsAction = () => {
        this.allProducts = fromPromise(getProducts())
     }
}

export default new AllProductsStore();