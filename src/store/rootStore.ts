import AllProductsStore from '../store/AllProductsStore'
import { makeAutoObservable } from 'mobx';

class RootStore {
  allProducts = AllProductsStore;

  constructor() {
    makeAutoObservable(this)
  }

}

export default RootStore;