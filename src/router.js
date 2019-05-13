import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/App';
import Loader from "./views/Loader";
import CProductList from "./views/CProductList";
import MProductList from "./views/MProductList";
import MatchList from "./views/MatchList";
import Error from "./views/Error";

Vue.use(VueRouter);
export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: "/", name: "loader", component: Loader },
		{ path: "/cproduct", component: App, children: [
			{ path: "", name: "cproductList", component: CProductList },
		]},
		{ path: "/mproduct", component: App, children: [
			{ path: "", name: "mproductList", component: MProductList },
		]},
		{ path: "/match", component: App, children: [
			{ path: "", name: "matchList", component: MatchList },
		]},
		{ path: "/error", name: "error", component: Error }
	]
});
