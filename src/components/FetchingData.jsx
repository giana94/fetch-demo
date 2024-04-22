import useFetch from '../hooks/useFetch.js';
import Loading from './Loading.jsx';


  const FetchingData = () => {
    const { data, error, loading } = useFetch('posts');
  
    if (loading) {
      return <Loading />;
    }
  
    if (error) {
      return <p>An error occurred</p>;
    }
  
    return (
      <>
        {data?.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.body}</p>
            </div>
          );
        })}
      </>
    );
  };
export default FetchingData;