import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RecipeList />}></Route>
          <Route path="/recipes/:id" element={<RecipeDetail />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
