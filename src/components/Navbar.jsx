import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataLoading, getDataSuccess } from "../redux/action";


export const Navbar = () =>{
    const {loading, result, error} = useSelector((store) => store.data)
    const [text, setText] = useState("");
    const [res, setRes] = useState([]);
    const dispatch = useDispatch();
    useEffect(() =>{
        getData();
    },[])

    const getData = () =>{
        dispatch(getDataLoading());
        axios.get("https://fast-reef-22226.herokuapp.com/data").then(({data})=>{
            dispatch(getDataSuccess(data));
        })
    }

    const getRes = () =>{
        axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${text}`).then(({data})=>{
            setRes(data);
        })
    }
    console.log(res);
    return loading ? ("Loading...") :
    <>
    <div id="navbar">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="google"/>
        <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Search"/>
        <button className="search" onClick={() =>{
            getRes();
         }}>Search</button>
    </div>
    <div id="search-result" style={{visibility: res.length>0 ? "visible" : "hidden"}}>Showing Results <br/>
         {res.map((e,i) =>{
            return (
                <div key={i} className="result">
                    <p>{e.url}</p>
                    <h3>{e.title}{e.author}</h3>
                    <p>{e.description}</p>
                    <h6>Explicit: {e.explicit ? "Yes" : "No"}</h6>
                    <h6>Quality: {e.quality}%</h6>
                </div>
             )
         })}
    </div>
    </>      
}