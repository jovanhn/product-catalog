import {Route, Routes} from "react-router-dom";
import {allRoutes} from "./RoutesList";

const AppRoutes = () => {
    return (
        <div className="content">
            <Routes>
                {allRoutes.map((page) => (
                    <Route key={page.path} path={page.path} element={page.element}/>
                ))}
            </Routes>
        </div>
    )
}

export default AppRoutes;