import Image from 'next/image'
import styles from "../../styles/Markets.module.css"

const blurred = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP0TAYAAPsArqM522sAAAAASUVORK5CYII=";

export default function MarketCard({ market }) {
    return (
        <div className={styles.card}>
            {
                market.location.image
                && <div className={styles.imageContainer}>
                    <Image src={market.location.image.src}
                           layout="fill"
                           objectFit="cover"
                           alt="market image"
                           placeholder="blur"
                           blurDataURL={blurred} />
                </div>
            }
            <span className={styles.label}>{market.location.name}</span>
        </div>
    )
}