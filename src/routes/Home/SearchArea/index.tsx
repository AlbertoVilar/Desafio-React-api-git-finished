import "./styels.css"
import PrimaryButton from "../../../compontents/Header/PrimaryButton";
import Search from "../../../compontents/Search";
import SearchAreaComponent from "../../../compontents/SearchAreaComponent";
import { Outlet } from "react-router-dom";

export default function SearchArea() {

    return (
        
        
            <section className="section-area-model area-styeles-search">
                <SearchAreaComponent />
                <Search />
                <PrimaryButton />
                <Outlet />
            </section>              
                      
       
    );
}