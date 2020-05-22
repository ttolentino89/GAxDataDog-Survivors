import React from 'react'
import Layout from '../components/shared/Layout'
import Fade from 'react-reveal/Fade';

export default function Users(props) {
    const { history, match, user, users } = props
    const renderButton = id => {
        if (user) {
            return (
                <button onClick={() => history.push(`${match.url}/${id}`)}>
                    See More
                </button>
            )
        } else {
            return null
        }
    }

    const renderUsers = () => {
        if (users) {
            return users.map(user => {
                return (
                  <Fade>
                    <div className="item" key={user._id}>
                        <h4>{user.username}</h4>
                        {renderButton(user._id)}
                    </div>
                    </Fade>
                )
            })
        } else {
            return null
        }
    }

    if (user) {
        return (
            <Layout>
                <h4>Pack Members:</h4>
                {!users ? <h3>No friends at this time.</h3> : null}
                <div className="item-container">{renderUsers()}</div>
            </Layout>
        )
    } else {
        return (
            <div className="landing">
                <h2>Welcome to BarkPark!</h2>
                <div className="main">
                    {!users ? <h3>No teammates found at this time.</h3> : null}
                    <div className="item-container">{renderUsers()}</div>
                </div>
            </div>
        )
    }
}
