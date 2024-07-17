import { Outlet } from "react-router-dom";
import Header from "../../compontents/Header";

export default function Home() {

    return (
        <>
           <Header />
           
           <Outlet />
        </>
    )
}