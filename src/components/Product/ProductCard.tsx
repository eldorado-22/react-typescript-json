import React, {useEffect, useState} from 'react';
import axios from "axios";
import Product from "./Product";
import {IUserInterface} from "../../Interfaces/ProductInterfaces";

function ProductCard() {

    const [user, setUser] = useState<IUserInterface[]>([])

    const fetchingProduct = async () => {
        const res = await axios.get<IUserInterface[]>(`https://jsonplaceholder.typicode.com/users`)
        setUser(res.data)
    }
    useEffect(() => {
        fetchingProduct()
    },[])

    return (
        <div >
            {
                user.slice(1,20).map(el => <Product product={el}/>)
            }
        </div>
    );
}

export default ProductCard;
