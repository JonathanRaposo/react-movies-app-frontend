
const SearchBar = ({ handleQuery, handleSearch }) => {

    return (
        <div className='SearchBar'>
            <input
                type="text"
                name="search"
                placeholder='Search movie'
                onChange={handleQuery}
            />
            <button onClick={handleSearch} className='search-btn'>Search</button>
        </div>
    );
}

export default SearchBar;