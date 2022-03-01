import React from 'react'


const Search = ({query, handleQuery, onClick}) => {
    return (
      <div class="box">
          <form onSubmit={onClick} class=" is-flex is-flex-direction-row">
                <input class="input"
                    value={query}
                    onChange={handleQuery}
                    placeholder="Search Anime"
                />
                <button class="button" type="submit">Search</button>
            </form>   
      </div>
    )
  }

export default Search