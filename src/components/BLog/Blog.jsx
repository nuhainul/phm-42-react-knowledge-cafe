// import React from 'react';
import PropTypes from "prop-types";

// const Blog = () => {
const Blog = ({ blog }) => {
    console.log(blog);
    return (
        <div>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;