import React from 'react'
import Layout from '../components/shared/Layout'
import Fade from 'react-reveal/Fade';

export default function Items(props) {
    const { history, match, user, items } = props
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

    const renderItems = () => {
        if (items) {
            return items.map(item => {
                return (
                  <Fade>
                    <div className="item" key={item._id}>
                        <h4>{item.title}</h4>
                        {renderButton(item._id)}
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
                <h4>Tasks:</h4>
                {!items ? <h3>No Items at this time.</h3> : null}
                <div className="item-container">{renderItems()}</div>
            </Layout>
        )
    } else {
        return (
            <div className="landing">
                <h2>Welcome to BarkPark!</h2>
                <p>For added security, please sign in again</p>
                <div className="main">
                    {!items ? <h3>No cool things to do found at this time.</h3> : null}
                    <div className="item-container">{renderItems()}</div>
                </div>
            </div>
        )
    }
}
