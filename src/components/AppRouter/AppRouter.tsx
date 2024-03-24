import React, { FC, ReactNode, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppGuestRoutes, AppProtectedRoutes } from "../../routes";

const createRoutes = <T extends object>(routes: T, Wrapper?: FC<{ children?: ReactNode }>) => {
    const entries = Object.entries(routes) as [string, string][];
    return entries.map(([page, path]) => {
        const LazyPage = lazy(() =>
            import(`../../pages/${page}`).then((module) => ({ default: module[page] }))
        );

        const route = (
            <Route
                key={path}
                path={path}
                element={
                    Wrapper ? (
                        <Wrapper>
                            <LazyPage />
                        </Wrapper>
                    ) : (
                        <LazyPage />
                    )
                }
            />
        );

        return route;
    });
};

const guestRoutes = createRoutes<typeof AppGuestRoutes>(AppGuestRoutes);
const protectedRoutes = createRoutes<typeof AppProtectedRoutes>(AppProtectedRoutes);

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            {guestRoutes}
            {protectedRoutes}
        </Routes>
    );
};
