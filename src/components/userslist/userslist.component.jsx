import './userslist.style.css';
import UserCard from '../usercard/usercard.component';


const UsersList = ({users}) => {

   return(
      <div className='users-list'>
         {
            /*
               the user.phone prop is used as the key to identify each card on the map..
               this is because the id.name and id.value prop of some users were the same (they were an empty string '')
               their phone, however were unique. thus passed for the key.
            */
            users?.map(user => (
               <UserCard key={user.phone} user={user} />
            ))
         }
      </div>
   )
}

export default UsersList;