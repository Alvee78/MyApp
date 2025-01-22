import React, { useState } from "react";
import Category from "./Category";

export default function CategoryPage(params) {
    const [categories, setCategories] = useState([]);
    const [showLoading, setShowLoading] = useState(null);

    const fetchCategories = async ()=>{
        setShowLoading("Loading...");
       fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response)=>response.json())
        .then((data)=>setCategories(data.categories))
        .catch((err)=>console.log(err))
        .finally(()=>{
            setShowLoading(null);
        });
    };
    return(
        <div className="container">
            <div className="row">
                <div className="col-12"> 
                    <button className="btn btn-primary" onClick={fetchCategories}>
                        Fatch category list
                    </button>
                    <button className="btn btn-danger" onClick={()=>setCategories([])}>
                        Clear category list
                    </button>
                </div>
            </div>
            <div>
                <div>
                    {categories.length === 0 && showLoading === null?"click the button to view categorys":null}
                    {showLoading}
                    {
                        categories.map((category, index)=>(
                            <Category category={category} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
