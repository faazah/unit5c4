import { Navbar } from "./Navbar"

export const Search = () =>{
    return <>
        <Navbar/>
        <button id="sort-alphabetically">Sort A-Z</button>
        <button id="sort-alphabetically-desc">Sort Z-A</button>
        <button id="sort-by-date">Sort by Date (asc)</button>
        <button id="sort-by-date-desc">Sort by Date (desc)</button>
        <button id="sort-by-quality">Sort by Quality(asc)</button>
        <button id="sort-by-quality-desc">Sort by Quality(desc)</button>
        <button id="filter-explicit">Filter Explicit</button>

    </>
}