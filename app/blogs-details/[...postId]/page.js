import React from 'react'
import styles from './BlogPostDetails.module.css'
import axios from 'axios'
import Image from 'next/image'

const fetchSelectedBlogPost = async (id) => {
  try {
    const api_url = `${process.env.BLOGS_POST_BASE_URL}/fetch-post-by-id?post_id=${id}`
    const result = await axios.get(api_url)

    return result.data?.data ?? {}
  } catch (err) {
    // console.log("error while fetching selected blog post => ", err)
    return {}
  }
}


export default async function BlogPostDetails({ params }) {
  // // console.log("params of /blog/[...postId] => ", params)
  const postId = params.postId[0]
  const post = await fetchSelectedBlogPost(postId)
  // // console.log("post of BlogPostDetails => ", post)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        <div className={styles.thumbnail}>
          <h2>Thumbnail</h2>
          <div className={styles.thumbnailImg}>
            <Image src={post.image} loading = 'lazy' alt='post_img' width={700} height={400} />
          </div>
        </div>

        <div className={styles.title}>
          <h2>Title</h2>
          <b>
            {post?.title ? post.title.toUpperCase() : 'N/A'}
          </b>
        </div>

        <div className={styles.description}>
          <h2>Description</h2>
          <p>
            {post?.description ?? 'N?A'}
          </p>
        </div>

      </div>

    </div>
  )
} 