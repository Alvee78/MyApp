import React from "react";
import { Link } from "react-router-dom";

export default function Category({category}) {
    return(
        <div className="row shadow-sm my-4 py-3 bg-light">
            <div className="col-3 margin-bottom-10">
                <img className="w-100" src={category.strCategoryThumb} alt={category.strCategory}/>
            </div>
            <div className="col-9">
                <h2><Link className={"text-decoration-none"} to={"/"+category.strCategory}>{category.strCategory}</Link></h2>
                <p>{category.strCategoryDescription}</p>
            </div>
        </div>
    );
};
