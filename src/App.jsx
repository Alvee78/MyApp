import React from "react";
import Navber from "./pages/Navber";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import MealItems from "./pages/MealItems";
import MealDes from "./pages/MealDes";

function App() {
  return (
    <BrowserRouter>
      <Navber/>
      <Routes>
        <Route index="true" element={<CategoryPage/>}/>
        <Route path="/:category" element={<MealItems/>}/>
        <Route path="/meal/:id" element={<MealDes/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
