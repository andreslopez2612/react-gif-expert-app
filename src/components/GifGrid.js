import React, { useState, useEffect } from 'react'
import { useFecthGifs } from '../hooks/useFecthGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    
    const { data:images, loading } = useFecthGifs( category );

    // const [images, setimages] = useState([]);
    // useEffect(() => {
    //     getGifs( category )
    //     .then( setimages );
    // }, [ category ])

    

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Loading...</p> }

            <div className="card-grid">
                <ol>
                    {
                        images.map( img =>(
                            <GifGridItem
                                key={ img.id }
                                { ...img }
                            />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}
