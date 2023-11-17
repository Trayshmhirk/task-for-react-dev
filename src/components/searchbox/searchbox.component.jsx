import './searchbox.style.css';
import MagnifyingGlassIcon from '../../assets/icons8-magnifying-glass-30.png'

const SearchBox = ({handleChange, searchField}) => {
   return (
      <div className="search-username">
         <div className="search-bar">
            <input 
               type="text"
               placeholder='Search user by name' 
               value={searchField}
               onChange={handleChange}
            />

            <button className='search-button'>
               <img className="" src={MagnifyingGlassIcon}/> 
            </button>
         </div>
      </div>
      
   )
}

export default SearchBox;