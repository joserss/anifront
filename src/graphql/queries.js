import { gql } from "@apollo/client"


export const SEARCH = gql`
query ($mediaToSearch: String!){
    Page (page:1){
      media(search:$mediaToSearch, type:ANIME){
        title {
         romaji
        }
        id
        type
        seasonYear
        averageScore
        coverImage{
          large
          color
        }
        genres
      }
    }
  }
`





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
    genres
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
`