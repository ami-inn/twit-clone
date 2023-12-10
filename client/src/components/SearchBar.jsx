import search from '../assets/search-gray.svg'

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <img
      src={search}
      alt='search'
      width={24}
      height={24}
      className='object-contain'
      />
      <input type="text" value='search'
      placeholder='search'
      className='no-focus searchbar_input'
      />
    </div>
  )
}

export default SearchBar
