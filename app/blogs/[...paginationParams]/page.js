import axios from "axios"
import styles from './BlogListPage.module.css'
import BlogsMain from "@/components/blogs/BlogsMain"
import BlogPagination from "@/components/pagination/BlogPagination"

const fetchBlogPosts = async (skip, limit) => {
  try {
    const newSkip = (skip-1) * limit
    const api_url = `${process.env.BLOGS_POST_BASE_URL}/fetch-all-posts?skip=${newSkip}&limit=${limit}`
    // console.log("api_url => ", api_url)

    const result = await axios.get(api_url)
    // console.log("fetchBlogPosts result => ", result.data)

    return result.data?.data ?? []
  } catch (err) {
    // console.log("error while fetching blog posts => ", err)
    return []
  }
}

export default async function BlogListPage({ params }) {
  // console.log("params of /blog/[...paginationParams] => ", params)
  const skipParam = parseInt(params.paginationParams[0]) || 1
  const skip = Math.max(1, skipParam);
  const posts = await fetchBlogPosts(skip, 9);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <BlogsMain posts={posts} />
      </div>
      <BlogPagination pageNumber = {skip} />
    </div>
  )
}