import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Meal from "./Meal";

export default function MealItems(params) {
    let {category} = useParams();
    let [showloading,setShowloading] = useState(null);
    let [meals, setMeals] = useState([]);
    useEffect(()=>{
        setShowloading("Loading...");
        fetchData(category);
    },[category]);
    const fetchData =  (cat)=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
        .then((res)=>res.json())
        .then((data)=>setMeals(data.meals))
        .catch((err)=>console.log(err))
        .finally(()=>setShowloading(null))
    }
    return(
        <>
            {
                meals?
                <div className="container">
            <div className="row pt-3">
                <div className="col-10">
                    <h2 className="center">View meals for {category}</h2>
                </div>
                <div className="col-2 text-end">
                    <Link className="btn btn-primary" to="/"><i className="bi-arrow-left-circle "></i> Go Back</Link>
                </div>
            </div>
            {showloading}
            {console.log(meals)}
            <div className="row row-cols-2 row-cols-lg-4 row-cols-md-3">
                {
                    meals.map((meal,index) => (
                    <Meal key={index} meal={meal}/>
                ))}
            </div>
        </div>:null
            }
        </>
    );
};
