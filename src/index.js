/* eslint-disable no-undef */
import ReactDOM from "react-dom"
import App from "./App"
import React from "react"

import { 
	ApolloClient, ApolloProvider, HttpLink, InMemoryCache
} from "@apollo/client" 


const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
		uri: "https://graphql.anilist.co/",
	})
})



ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
	,
	document.getElementById("root")
)