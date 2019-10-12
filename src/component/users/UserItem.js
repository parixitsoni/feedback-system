import React  from 'react';
import PropTypes from 'prop-types';

const UserItem = ({user: { login, avatar_url, html_url }}) =>  {
        return (
            <div className="card text-center" style={{width:'200px'}}>
                <img src={(avatar_url)} alt="" className="round-img" style={{width:'5rem'}}/>
                <a href="login.js"><h3>{login}</h3></a>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">About</a>
                </div>
            </div>
        )
}

UserItem.prototypes = {
    user: PropTypes.object.isRequired,
    
}
export default UserItem;
