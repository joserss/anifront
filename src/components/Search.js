import React from 'react'


const Search = ({query, handleQuery, onClick}) => {
    return (
      <div>
          <form onSubmit={onClick}>
                <input 
                    value={query}
                    onChange={handleQuery}
                />
                <button type="submit">save</button>
            </form>   
      </div>
    )
  }

export default Search