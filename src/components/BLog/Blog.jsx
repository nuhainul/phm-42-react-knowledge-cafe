// import React from 'react';
import PropTypes from "prop-types";

// const Blog = () => {
const Blog = ({ blog }) => {
    // console.log(blog);

    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;

    return (
        <div>
            <img src={cover} alt={`cover photo of ${title}`} />

            <div className="flex justify-between mt-4">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className="">
                    <span>{reading_time} min read</span>
                </div>
            </div>

            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>) // এখানে কি={আইডিএক্স} কেন? 
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;