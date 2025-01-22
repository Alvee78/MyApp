import React from "react";
import { Link } from "react-router-dom";
export default function Meal({meal}) {
    return(
        <div className="col my-3 shadow">
            <div className="card h-100">
                <img src={meal.strMealThumb} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <Link className="text-decoration-none btn btn-primary" to={"/meal/" + meal.idMeal}>{meal.strMeal}</Link>
                </div>
            </div>
        </div>
        
    );
};
