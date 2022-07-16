import Image from 'next/image'
import styles from "../../styles/Markets.module.css"

export default function MarketCard({ market }) {
    return <div className={styles.card}>
        {market.location.image && <Image src={market.location.image.src} width={480} height={270} />}
        <span className={styles.label}>{market.location.name}</span>
    </div>
}