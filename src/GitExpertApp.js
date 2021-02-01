import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
    //     // setcategories( [...categories,'HunterXHunter'] );
    //     setcategories( ctg => [...ctg,'HunterXHunter'] );
    // }

    return (
        <div>
            <h1>GitExpertApp</h1>
                <AddCategory setCategories = { setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category  => 
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </div>
    )
        
}

GitExpertApp.propTypes = {
    
}

export default GitExpertApp;