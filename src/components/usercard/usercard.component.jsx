import './usercard.style.css'


const UserCard = ({user}) => {
   // deconstruct the props from the user
   const { dob, gender, name, picture, phone, location } = user;
   
   return(
      <div className='user-card'>
         <div className="user-image">
            <img src={picture.medium} alt="User Image" />
         </div>
         <div className="user-details">
            <h2 className="user-name">{`${name.first} ${name.last}`}</h2>
            <p className="user-info">{`Age: ${dob.age}`}</p>
            <p className="user-info">{`Gender: ${gender}`}</p>
            <p className="user-info">{`Phone: ${phone}`}</p>
            <p className="user-info">{`Location: ${location.state}, ${location.country}`}</p>
         </div>
      </div>
   )
}

export default UserCard;