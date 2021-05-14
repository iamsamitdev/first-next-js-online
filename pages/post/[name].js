import React from 'react'
import { useRouter } from 'next/router'
import styles from './post.module.scss'

const PostName = () => {

    const router = useRouter()

    return (
        <div>
            <h1 className={styles.heading}>This is a post: { router.query.name } </h1>
        </div>
    )
}

export default PostName

// http://localhost:3000/post/xxx