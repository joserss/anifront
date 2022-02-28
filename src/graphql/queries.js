import { gql } from "@apollo/client";

export const DETAILS = gql`
query ($animeId: Int!) {
  Media(id:$animeId) {
    averageScore
    bannerImage
    title {
      romaji
      english
    }
    format
    id
    type
    season
    seasonYear
    description
    status
    isFavourite
    episodes
    volumes
    coverImage{
      large
      color
    }
    studios (isMain:true) {
  	  nodes {
  	    id
        name
  	  }
  	}
    mediaListEntry {
      status
      progress
      progressVolumes
      score
    }
    stats {
      statusDistribution {
        status
        amount
      }
      scoreDistribution {
        score
        amount
      }
    }
    relations {
      edges {
        relationType
        node {
          id
          status
          title{
            romaji
          }
        	format
          coverImage{
      			large
    			}
        }
      }
  	}
    characters (role:MAIN, sort:RELEVANCE) {
    	nodes{
        id
        image {
          large
        }
        name {
          full
        }
      }
  	}
  }
}
`;