import React from "react";
import {Post} from "../Post/Post";
import styles from './MyPosts.module.css';

export const MyPosts = () => {
    return (
        <div className={styles.myPosts}>
            <div>My post</div>
            <textarea name="" id="" ></textarea>
            <div><button>add post</button></div>
            <Post title='Post1' name='Alex' message='Hi! How are you?' like={8}/>
            <Post title='Post2' name='Anna' message='Hello! My number +231314' like={33}/>
            <Post title='Post3' name='Victor' message='My names Victor' like={15}/>
        </div>
    )
}