import React, { useEffect,useState } from "react";
import { useParams,Link } from "react-router-dom";

export default function MealDes(params) {
    let {id} = useParams();
    let [showLoading, setShowLoading] = useState(null);
    let [meal, setMeal] = useState(null);
    useEffect(()=> {
       setShowLoading("Loading...");
       fetchMeal(id); 
    },[id]);
    const fetchMeal = (id)=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res)=>res.json())
        .then((data)=>setMeal(data.meals[0]))
        .catch((err) => console.log(err))
        .finally(()=> setShowLoading(null))
    }
    return(
        <>  
            
            {meal?<div className="container">
                {showLoading}
                <div className="row my-3">
                    <div className="col-10">
                        <h2>Meal description </h2>
                    </div>
                    <div className="col-2 text-end">
                            <Link to={"/" + meal.strCategory} className="btn btn-primary"> <i className={"bi-arrow-left-circle"}></i> Back</Link>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-3 py-2">
                        <img className="w-100 rounded" src={meal.strMealThumb} alt={meal.strMeal}/>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <h3><b>{meal.strMeal}</b></h3>
                        </div>
                        <div className="row">
                            <p>{meal.strInstructions}</p>
                        </div>
                    </div>
                    <div className="col-3 alert alert-warning">
                        <h5>Ingredients</h5>
                        <ul className="list-unstyled">
                            <li>
                                {Object.keys(meal).map((key , index) => {
                                    if(key.includes("strIngredient") && meal[key]){
                                        return <li key={index}>{meal[key]} - {meal["strMeasure"+key.split("strIngredient")[1]]}</li>
                                    }else return null;
                                })}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>:null}
        </>
    );
};
