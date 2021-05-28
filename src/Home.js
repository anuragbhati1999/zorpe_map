import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from './components/GoogleMap.js';
import useFetch from './useFetch.js';
const Home =()=>{

const {data:tasks,isPending,error}=useFetch('http://ec2-13-126-90-72.ap-south-1.compute.amazonaws.com:8082/user/1/tasks/');


  return(
  <div classname="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {tasks && tasks.length>0 && <GoogleMap tasks={tasks} title="My Map!"/>}
      {tasks && tasks.length==0 && <h>No Tasks</h>}
  </div>
  );
}

export default Home;