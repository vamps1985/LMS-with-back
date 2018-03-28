import React from 'react';
import Post from "../Post";

const PostList = ({posts}) => {
        return (
            <div className="post-list">
                {posts.map((item, index) =>
                    <Post props={item} index={index} key={item.id}/>
            )}
            </div>
        )
};

export default PostList;