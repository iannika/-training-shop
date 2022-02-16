import React from "react";

import "./blog.css";

const Blog = () => {
    return (
        <div className="container-blog">
            <div className="blog-title">
                <span className="title">LATEST FROM BLOG</span>
                <button>SEE ALL</button>
            </div>
            <div className="blog-img">
                <div className="card-one">
                    <div className="blog-text">
                        <span className="sub-title">The Easiest Way to Break</span>
                        <span className="text">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</span>
                    </div>
                </div>
                <div className="card-two">
                    <div className="blog-text">
                        <span className="sub-title">Wedding Season</span>
                        <span className="text">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</span>
                    </div>
                </div>
                <div className="card-three">
                    <div className="blog-text">
                        <span className="sub-title">Recent Favorites On Repeat</span>
                        <span className="text">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Blog}