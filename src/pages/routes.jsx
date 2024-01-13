import App from "./App";
import Layout from "./layouts/Layout";
import navSideBar from "../layouts/navSideBar";
import pageDrilldown from "./pageDrillDown";
import pageWishlist from "./pageWishlist";

export default [
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path: "", element: <App /> },
      { path: "drilldown", element: <pageDrilldown /> },
      { path: "wishlist", element: <pageWishlist /> },
    ],
  },
];