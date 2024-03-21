import Link from 'next/link';
import * as React from 'react';
import styles from './BlogPagination.module.css'
import PageNavButton from '../buttons/PageNavBtn';

export default function BlogPagination({pageNumber}) {
  const totalBlogPosts = 21;  //we can get it from an API also
  const limit = 9;  //fixed according to need of frontend
  const pageCount = Math.ceil(totalBlogPosts / limit)

  const paginationLinks = [];
  for (let i = 1; i <= pageCount; i++) {
    paginationLinks.push(
      <Link href={`/blogs/${i}`} key={i}>
        <p className={` ${styles.pageBtn} ${i === pageNumber ? styles.active : ''} `}>{i}</p>
      </Link>
    );
  }

  return (
    <div className={styles.container}>
      {
        pageNumber > 1
        &&
        <PageNavButton
          navDirection = {-1}
          pageNumber = {pageNumber}
        />
      }

      <div className={styles.paginationTab}>
        { 
          paginationLinks
        }
      </div>

      {
        pageNumber < pageCount
        &&
        <PageNavButton
          navDirection = {1}
          pageNumber = {pageNumber}
        />
      }
      
    </div>
  );
}