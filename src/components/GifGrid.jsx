
import { useState, useEffect } from "react";
import { getGifs } from "../services/getGifs";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        console.log(newImages);
        setImages(newImages);
    }
    useEffect(() => {
        getImages();
    }, [category])


    return (
        <>
            <h3>{category}</h3>
                {
                    images.map(({id,title,url}) => (
                        <div className="card" key={id}>
                            <p>{title}</p>
                            <img src={url} className="card.img" />
                        </div>
                    ))
                }
        </>
    )
}