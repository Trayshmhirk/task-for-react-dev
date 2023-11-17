import './age-filter.style.css';


const AgeFilter = ({ handleAgeFilter }) => {
   // handle change and pass the value to the age filter function
   const handleChange = (e) => {
      const ageRange = e.target.value;
      handleAgeFilter(ageRange);
   };
 
   return (
      <div className='age-filter'>
         <select id="age-filter" onChange={handleChange}>
            <option value="">Age Range</option>
            <option value="0-20">0-20</option>
            <option value="21-40">21-40</option>
            <option value="41-60">41-60</option>
            <option value="61+">61+</option>
         </select>
      </div>
   );
};

export default AgeFilter;