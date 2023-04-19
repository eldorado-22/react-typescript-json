import React from 'react';
import {IPhotoInterface, IUserInterface} from "../../Interfaces/ProductInterfaces";


interface IPhoto {
    photo: IPhotoInterface
}

const ToDos = ({photo}: IPhoto) => {

    return (
        <div>
            <img src={photo.url} alt=""/>
        </div>
    );
};

export default ToDos;