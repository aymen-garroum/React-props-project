import Profile from "./Profile/Profile"
import myphoto from './aymen-cropped.png'

function App() {

  const handleName = (text)=>{alert(text)}

  return (<div style={{display:"flex", justifyContent:"center"}}>
          <Profile fullname="Garroum Aymen" bio="Born in 1984" profession="Student in Gomycode" name_show={handleName}><img style={{marginBottom:"3%"}} src={myphoto} alt="FICHIER MANQUANT"/></Profile>
          </div>
  );
}

export default App;
