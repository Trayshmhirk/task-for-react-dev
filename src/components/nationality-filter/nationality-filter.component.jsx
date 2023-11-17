import './nationality-filter.style.css';

const NationalityFilter = ({handleNationalityFilter}) => {
   // handle change and pass the value to the nationality filter function
   const handleChange = (e) => {
      const nationality = e.target.value;
      handleNationalityFilter(nationality);
   };
  
   return (
      <div className='nationality-filter'>
         <select id="nationality-filter" onChange={handleChange}>
            <option value="">Nationality</option>
            <option value="AU">Australia</option>
            <option value="BR">Brazil</option>
            <option value="CA">Canada</option>
            <option value="DE">Germany</option>
            <option value="DK">Denmark</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="IN">India</option>
            <option value="IR">Iran</option>
            <option value="IE">Ireland</option>
            <option value="MX">Mexico</option>
            <option value="NL">Netherlands</option>
            <option value="NZ">New Zealand</option>
            <option value="NO">Norway</option>
            <option value="RS">Serbia</option>
            <option value="ES">Spain</option>
            <option value="CH">Switzerland</option>
            <option value="TR">Turkey</option>
            <option value="UA">Ukraine</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States</option>
         </select>
      </div>
   )
}

export default NationalityFilter;