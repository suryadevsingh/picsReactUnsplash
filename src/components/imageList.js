import React from "react";
import ImageCard from "./imageCard";
import './imageList.css';

const ImageList = props =>{
    
    // const images = props.images.map((image)=>{
    //     return (
    //     <img alt={image.description} key={image.id} src={image.urls.regular}/>);
    // })

    // const images = props.images.map(({description,id,urls})=>{
        const images = props.images.map((image)=>{    
    return (
        // <img alt={description} key={id} src={urls.regular}/>);
    <ImageCard key={image.id} image={image}/>
        );
    })

    return <div className="image-list">{images}</div>;
}

export default ImageList;