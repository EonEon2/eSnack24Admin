import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/IndexPage.jsx";
import AdminRouter from "./AdminRouter.jsx";
import ProductRouter from "./ProductRouter.jsx";
import userRouter from "./UserRouter.jsx";
import QNARouter from "./QNARouter.jsx";
import CommunityProductRouter from "./CommunityProductRouter.jsx";
import CommunityAllergyRouter from "./CommunityAllergyRouter.jsx";
import FAQRouter from "./FAQRouter.jsx";
import GraphRouter from "./GraphRouter.jsx";
import ReviewRouter from "./ReviewRouter.jsx";
import ExchangeRateRouter from "./ExchangeRateRouter.jsx";

const MainRouter = createBrowserRouter([
        {
            path: '/',
            element: <IndexPage />
        },
        AdminRouter,
        QNARouter,
        FAQRouter,
        ProductRouter,
        userRouter,
        ExchangeRateRouter,
        CommunityProductRouter,
        CommunityAllergyRouter,
        GraphRouter,
        ReviewRouter

    ]
    )

export default MainRouter;