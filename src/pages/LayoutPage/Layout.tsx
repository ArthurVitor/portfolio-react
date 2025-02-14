import { Outlet } from "react-router";
import { NavBarComponent } from "../../components/NavBar/NavBarComponent";
import './Layout.css';

export function Layout() {
    return (
        <>
            <NavBarComponent />

            <main className="content">
                <Outlet />
            </main>
        </>
    )
}