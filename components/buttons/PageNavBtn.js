import Link from 'next/link'
import React from 'react'
import styles from './PageNavButton.module.css'
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from "react-icons/tb";

const PageNavButton = ({navDirection, pageNumber}) => {

  return (
    <Link href={`${navDirection === -1 ? pageNumber-1 : pageNumber+1}`} >
      <div className={styles.main}>
        {
          navDirection === -1
          &&
          <TbPlayerTrackPrevFilled />
        }
        <p>
          { navDirection === -1 ? 'Previous' :'Next' }
        </p>
        {
          navDirection === 1
          &&
          <TbPlayerTrackNextFilled />
        }
        
      </div>
    </Link>
  )
}

export default PageNavButton