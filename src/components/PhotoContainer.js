import { useState, useEffect } from "react";
import { usePhotos } from "../hooks/usePhotos";
import Photo from "./Photo";

const PhotoContainer = () => {
    const [photos, setPhotos] = useState([]);
    const { data, nextPage } = usePhotos();

    useEffect(() => {
        setPhotos([...photos, ...data]);
        // eslint-disable-next-line
    }, [data]);

    return (
        <>
            <div className="photo-container">
                {photos.map((photo, key) => (
                    <Photo photo={photo} key={key} />
                ))}
            </div>
            <button onClick={nextPage}>Ver más</button>
        </>
    );
};

export default PhotoContainer;
