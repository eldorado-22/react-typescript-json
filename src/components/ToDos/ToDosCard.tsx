import React, {useEffect, useState} from 'react';
import axios from "axios";
import ToDos from "./ToDos";
import {IPhotoInterface} from "../../Interfaces/ProductInterfaces";


const ToDosCard = () => {
    const [photo, setPhoto] = useState([])
    const getPhoto = async () =>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
        setPhoto(res.data)
    }

    useEffect(() => {
        getPhoto()
    },[])
    return (
        <div>
            {
                photo.slice(0,10).map(el => <ToDos photo={el}/>)
            }
        </div>
    );
};

export default ToDosCard;