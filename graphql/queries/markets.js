import { gql } from "@apollo/client";

export default gql`
query MarketsQuery {
    markets(limit: 100, skip: 0) {
        location {
            id
            name
            image {
                src
            }
        }
        producer {
            id
            name
        }
   }
}
`