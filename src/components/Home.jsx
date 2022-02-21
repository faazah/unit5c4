import { Link } from "react-router-dom"


export const Home = () =>{
    return <>
        <Link to="/search"><img src= "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt= "google"/></Link>
        <br/>
        <input className="search-box" type="text" placeholder="Search"/>
    </>
}