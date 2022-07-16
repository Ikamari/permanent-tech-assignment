import Image from 'next/image'
import styles from "../../styles/Markets.module.css"

export default function MarketCard({ market }) {
    return (
        <div className={styles.card}>
            {
                market.location.image
                && <div className={styles.imageContainer}>
                    <Image src={market.location.image.src}
                           layout={"fill"}
                           objectFit={"cover"}
                           alt={"market image"} />
                </div>
            }
            <span className={styles.label}>{market.location.name}</span>
        </div>
    )
}