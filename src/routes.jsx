import Layout from './layouts/Layout.jsx';
import App from "./App";
import PageDrilldown from "./pages/pageDrilldown.jsx";
import PageWishlist from "./pages/pageWishlist.jsx";

export default [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path: "drilldown", 
            element: <PageDrilldown />,
        },
        {
        path: "wishlist",
        element: <PageWishlist />,
        },
      ],
    },
  ];