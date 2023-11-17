import './App.css'
import UsersList from './components/userslist/userslist.component'
import SearchBox from './components/searchbox/searchbox.component'
import NationalityFilter from './components/nationality-filter/nationality-filter.component'
import GenderFilter from './components/gender-filter/gender-filter.component'
import AgeFilter from './components/age-filter/age-filter.component'
import WithLoader from './components/with-loading/with-loading.component'

import { useEffect, useState } from 'react'


function App() {
   /*
      on further development, redux toolkit will be used to manage the app state.
      and createAsyncThunk to handle the asynchronous logic
   */
   const [users, setUsers] = useState([])
   const [searchField, setSearchField] = useState('');
   const [ageFilter, setAgeFilter] = useState('');
   const [nationalityFilter, setNationalityFilter] = useState('');
   const [genderFilter, setGenderFilter] = useState('');
   const [isLoading, setIsLoading] = useState(true);

   // wrap users
   const UserListWithLoader = WithLoader(UsersList);


   useEffect(() => {
      const fetchUsers = async () => {
         setIsLoading(true); // set loading state to true before fetching data

         /*
            NOTE: Age range endpoint isn't available in the api doc
            so age range will be filtered based on the users already rendered in the app,
            as is the user's name. 
         */
         // construct the url to fetch users data based on the values passed to the endpoint.
         let url = 'https://randomuser.me/api/?results=32';

         if(nationalityFilter) {
            url += `&nat=${nationalityFilter}`;
         }
         if (genderFilter) {
            url += `&gender=${genderFilter}`;
         }

         await fetch(url)
         .then(res => res.json())
         .then(data => {
            const userResults = data.results;
            setUsers(userResults);
         })
         .catch(error => console.log('Error fetching users:', error))
         .finally(() => {
            setTimeout(() => {
               setIsLoading(false)
            }, 1500);
         }); // set loading state to false after fetching data
      }

      fetchUsers();
   }, [nationalityFilter, genderFilter])

   // set the search input into the searchfield state
   const handleSearchUsername = (e) => {
      setSearchField(e.target.value)
   }

   // search user by their first name or last name
   const filterByFullName = (user) => {
      const firstName = user.name?.first || '';
      const lastName = user.name?.last || '';
      const fullName = `${firstName} ${lastName}`;
      return fullName.toLowerCase().includes(searchField.toLowerCase());
   }

   // filter users by age range
   const filterByAge = (user) => {
      const age = user.dob?.age || 0;

      if (ageFilter === '0-20') {
         return age >= 0 && age <= 20; // if age from data equals the age range, return ages between 0 - 21

      } else if (ageFilter === '21-40') {
         return age >= 21 && age <= 40; // if age from data equals the age range, return ages between 21 - 40

      } else if (ageFilter === '41-60') {
         return age >= 41 && age <= 60; // if age from data equals the age range, return ages between 41 - 60

      } else if (ageFilter === '61+') {
         return age >= 61; // if age from data equals the age range, return all ages above 60
      }

      return true; // if no age filter is selected, return true for all users
   }

   // filter users by the age range or by their fullname
   const filterUsersByNameAndAgeRange = users ? users.filter((user) => filterByFullName(user) && filterByAge(user)) : [];


   // set the nationality value to the nationality state
   const handleNationalityFilter = (nationality) => {
      setNationalityFilter(nationality);
   };

   // set the gender value to the gender state
   const handleGenderFilter = (gender) => {
      setGenderFilter(gender)
   }

   // set the age value its state
   const handleAgeFilter = (age) => {
      setAgeFilter(age)
   }

   
   return (
      <div className='app'>
         <div className='search-and-filter'>
            <SearchBox 
               handleChange={handleSearchUsername}
               searchField={searchField}
            />
            
            <div className='filter-flex'>
               <NationalityFilter handleNationalityFilter={handleNationalityFilter} />
               <GenderFilter handleGenderFilter={handleGenderFilter} />
               <AgeFilter handleAgeFilter={handleAgeFilter}/>
            </div>

         </div>
         
         {
            filterUsersByNameAndAgeRange.length ? (
               <UserListWithLoader isLoading={isLoading} users={filterUsersByNameAndAgeRange} />
            ) : (
               <div>{`"No results found"`}</div>
            )
         }
      </div>
   )
}

export default App
