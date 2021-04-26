import React from 'react'
import ItemCount from './ItemCount'
export default function ItemDetail({ dataDetail }) {
    return (
        <div>
            <ul>
                <li>  Titulo: {dataDetail.title} </li>
                <li> Precio:{dataDetail.price} </li>
                <li> Descripcion: {dataDetail.descripcion} </li>
                <img src={dataDetail.picture} />
            </ul>


        </div>
    )
}
