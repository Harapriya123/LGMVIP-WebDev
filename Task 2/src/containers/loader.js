import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
  
        <div className='app'>
       <Loader type="BallTriangle" color="#00BFFF" height={180} width={200} />
       </div>
    );
}
export default LoaderComp
