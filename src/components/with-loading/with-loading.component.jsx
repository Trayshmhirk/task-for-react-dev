import './with-loading.style.css';

const WithLoader = (WrappedComponent) => {
   const loader = ({isLoading, ...otherProps}) => {
      return isLoading ? (
         <div className='loader-container'>
            <div className='loader'></div>
         </div>
      ) : (
         <WrappedComponent {...otherProps} />
      )
   }

   return loader;
}

export default WithLoader;