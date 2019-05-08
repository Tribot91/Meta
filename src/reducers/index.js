import { combineReducers } from "redux";
import authReducer from "./authReducer";
import Products from "./productsReducer";
import Product from "./productReducer";
import Shops from "./shopsReducer";
import Customers from "./customersReducer";
import Categories from "./categoriesReducer";
import Deals from "./dealsReducer";
import UserShops from "./userShopsReducer";
import Currencies from "./currenciesReducer";
import DealCrud from "./dealCrudReducer";
import SearchProducts from "./searchProductsReducer";
import Monetary from "./monetaryReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: Product,
  products: Products,
  shops: Shops,
  customers: Customers,
  categories: Categories,
  deals: Deals,
  userShops: UserShops,
  currencies: Currencies,
  dealCrud: DealCrud,
  searchProducts: SearchProducts,
  monetary: Monetary
});

export default rootReducer;
