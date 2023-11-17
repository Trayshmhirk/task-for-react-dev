import './gender-filter.style.css';


const GenderFilter = ({ handleGenderFilter }) => {
   // handle change and pass the value to the gender filter function
   const handleChange = (e) => {
     const gender = e.target.value;
     handleGenderFilter(gender);
   };
 
   return (
     <div className='gender-filter'>
       <select id="gender-filter" onChange={handleChange}>
         <option value="">Gender</option>
         <option value="male">Male</option>
         <option value="female">Female</option>
       </select>
     </div>
   );
};

export default GenderFilter;