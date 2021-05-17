import PropTypes from 'prop-types';

const handleName = (text)=>{alert(text)}

function donnees(people){
    
    return(<div>
        <span>Fullname : {people.fullname}</span> <br/>
        <span>Bio : {people.bio}</span> <br/>
        <span>Profession : {people.profession}</span> <br/>
        {handleName(people.fullname)}       
        {people.children}
    </div>
            )
}

donnees.defaultProps = {
fullname:"Name not entered",
bio:"No Bio",
profession:"Not filled"
}

donnees.propTypes = {
fullname: PropTypes.string,
bio: PropTypes.string,
profession : PropTypes.string
}



export default donnees