import PropTypes from 'prop-types';

function profil(people){
    
    return( <div style={{display:"flex", flexDirection:"column", width:"30%", border:"solid 1px", borderRadius:"15px"}}>
            <span style={{marginLeft:"1%"}}>Fullname : {people.fullname}</span> <br/>
            <span style={{marginLeft:"1%"}}>Bio : {people.bio}</span> <br/>
            <span style={{marginLeft:"1%"}}>Profession : {people.profession}</span> <br/>      
            {people.children}
            <button style={{width:"30%", marginLeft:"35%", marginBottom:"3%"}} onClick={e => people.name_show(people.fullname)}> Show Name</button>
            </div>)
}

profil.defaultProps = {
fullname:"Name not entered",
bio:"No Bio",
profession:"Not filled"
}

profil.propTypes = {
fullname: PropTypes.string,
bio: PropTypes.string,
profession : PropTypes.string
}

export default profil