// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () =>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data = console.log(data);)
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Blogs;