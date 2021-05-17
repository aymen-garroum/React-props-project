import Infodata from './Infodata/Infodata'
import myphoto from './aymen-cropped.png'

function profil(){
    return(<Infodata fullname="Garroum Aymen" bio="Born in 1984" profession="Student in Gomycode"><img src={myphoto} alt="FICHIER MANQUANT"/></Infodata>)
}

export default profil