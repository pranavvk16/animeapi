import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Login from "./components/Login"
// import Registration from "./components/Registration"
import Search from "./components/Search"
// import Imagelist from "./components/Imagelist"
function App() {
const [login, setlogin] = useState(true)
  const [database, setdatabase] = useState([])
  const animelist = async (querry) => {
    const response = await axios.get(`https://api.aniapi.com/v1/anime`);
    await setdatabase(response.data.data.documents.splice(0, 30))
    await console.log(database);

    // console.log(this.state.images);
    //an api call to get the image
  }

console.log(login);
  return (
    <div className="App">
      {/* login 
search
details */}
      <center className="search-input">
        {/* {login?<Login elogin={login} login={setlogin} />:<></>} */}
        {/* <Registration /> */}
        <Search animelist={animelist} />
      </center>
      <div className="constimner">
        {database.map((x, index) => {
          return (
            <div key={index} className="mvie">
              <dir className="cover"><img alt="iqnwd" src={x.cover_image}/></dir>
              <div className="detailes">
                <span className="title">{x.titles.en}</span>
                <span className="year">{x.season_year}</span>
              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
}

export default App;
