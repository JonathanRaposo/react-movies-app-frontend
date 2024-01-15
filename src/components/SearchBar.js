
const SearchBar = ({ handleQuery, handleSearch }) => {

    return (
        <div className='SearchBar'>
            <input
                type="text"
                name="search"
                placeholder='Search movie by name or keyword'
                onChange={handleQuery}
            />
            <button onClick={handleSearch} className='search-btn'>Search</button>
        </div>
    );
}

export default SearchBar;