import styles from '@/styles/loading.module.css'

const Loader = () => {
    return (
        <div>
            <div className={styles.loader_container}> 
                <div className={styles.loader}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div></div>
        </div>
    )
}

export default Loader