import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from './BlogsMain.module.css'

const BlogsMain = ({posts}) => {
//   console.log("posts of blogsMain component => ", posts)

  return (
    posts && posts.length > 0
    ?
    posts.map((post) => (
        <Link href={`/blogs-details/${post._id}`} key={post._id}>
            <div className={styles.card}>
                <div className={styles.cardImg}>
                    <Image src={post.image} loading='lazy' alt='blogImg' width={320} height={200} />
                </div>

                <div className={styles.cardInfo}>
                    <h3>{post.title}</h3>
                    <p>{post.description.slice(0, 39)}...</p>
                </div>
            </div>
        </Link>
    ))
    :
    <div>
      No Blog Posts Found
    </div>
  )
}

export default BlogsMain