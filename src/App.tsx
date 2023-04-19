import React from 'react';
import ToDosCard from "./components/ToDos/ToDosCard";
import ProductCard from "./components/Product/ProductCard";
import "./App.css";

function App() {

    return (
        <div>
            <ProductCard/>
            <ToDosCard/>
        </div>
    );
}

export default App;
