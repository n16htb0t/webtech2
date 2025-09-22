import Users from './components/Users'
import Post from './components/props/Post'
import {Data} from './components/Data'
function App() {
  return (
    <>
    <Users/>
    {
      Data.map((x)=>{
      return (
        <Post key={x.id} image={x.image} name={x.name} job={x.job}/>
      )
      })
    }
     </>
    
  );
}

export default App;
