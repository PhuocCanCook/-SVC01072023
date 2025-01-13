import { ROUTER } from "./utils/router";
import MaterLayout from "./pages/users/homePage/theme/masterLayout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import ProfilePage from "./pages/users/profilePage";
// xử lí đường dẫn
const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTER.USER.HOME,
            Component: <HomePage /> // thằng cha của MarterLayout
        },
        {
            path: ROUTER.USER.PROFILE,
            Component: <ProfilePage /> // thằng cha của MarterLayout
        }
    ]
    return (
        <MaterLayout>
            <Routes>
                {userRouter.map((item, key) => (<Route key={key} path={item.path} element={item.Component} />))}

            </Routes>
        </MaterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;