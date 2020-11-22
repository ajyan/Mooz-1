import React from "react"


const Profile = ({name, image, findMatch}) => {

    return(
        <div className="container">
	        <div className="row justify-content-md-center">
                <div className="col-lg-3 ">
                    <div className="card hovercard">
                        <div className="cardheader"/>             
                        <div className="avatar">
                            <img alt="" src={image}/>
                        </div>
                            <div className="name">
                                {name}
                            </div>
                        {/* Display the Find Match button if main user or Join Room if it is a match */}
                        {findMatch ? 
                        (<button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={findMatch} 
                        >
                            Find a Match              
                        </button>) : (
                            <button 
                                type="button" 
                                className="btn btn-primary" 
                                onClick={findMatch} 
                            >
                                <a href="/room">Join Room</a>               
                            </button>
                        )}
                    </div>
                </div>
	        </div>
        </div>
    )
}

export default Profile;

