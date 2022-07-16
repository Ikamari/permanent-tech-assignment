import client from "../apollo-client";
import marketsQuery from "../graphql/queries/markets";
import styles from "../styles/Markets.module.css"
import MarketCard from "../components/Markets/MarketCard";

export async function getServerSideProps(context) {
    const { data } = await client.query({
        query: marketsQuery
    });

    const showMarketsWithoutImage = context.query.showMarketsWithoutImage
        ? parseInt(context.query.showMarketsWithoutImage) === 1
        : false;

    return {
        props: {
            markets: showMarketsWithoutImage
                ? data.markets
                : data.markets.filter((market) => market.location.image !== null)
        }
    };
}

export default function Markets({ markets }) {
    return (
        <div className={styles.grid}>
            {markets.map((market) => <MarketCard key={market.location.id} market={market} />)}
        </div>
    )
}