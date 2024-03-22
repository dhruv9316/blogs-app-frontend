import React from 'react'
import styles from './NavBar.module.css'
import Image from "next/image";
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.logoImg}>
                <Image src={'/BX-logo.png'} width={100} height={100} />
            </div>
            
            <div className={styles.navBtns}>
                {/* <Link href={`/`}> */}
                <Link href={`/blogs/${1}`}>
                    <button className={styles.homeBtn}>
                        Home
                    </button>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default NavBar