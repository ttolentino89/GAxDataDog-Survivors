import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import Fade from 'react-reveal/Fade'
import { getItemById, deleteItem } from '../services/items'

class Item extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: null,
            deleted: false
        }
    }

    async componentDidMount() {
        try {
            const item = await getItemById(this.props.match.params.id)
            this.setState({ item })
        } catch (err) {
            console.error(err)
        }
    }

    destroy = () => {
        deleteItem(this.state.item._id)
            .then(() => this.setState({ deleted: true }))
            .catch(console.error)
    }

    render() {
        const { item, deleted } = this.state

        if (!item) {
            return <p>Loading...</p>
        }

        if (deleted) {
            return (
                <Redirect
                    to={{
                        pathname: '/items',
                        state: { msg: 'Item succesfully deleted!' }
                    }}
                />
            )
        }

        return (
            <Layout>
              <Fade>
                <div className="item">
                    <Link to="/items">
                        <span className="back">Back</span>
                    </Link>
                    <h4>{item.title}</h4>
                    <p>Link: {item.link}</p>
                    <div className="buttons">
                        <button className="danger" onClick={this.destroy}>
                            Delete Item
                        </button>
                        <button
                            className="edit"
                            onClick={() =>
                                this.props.history.push(
                                    `/items/${this.props.match.params.id}/edit`
                                )
                            }
                        >
                            Edit
                        </button>
                    </div>
                </div>
                </Fade>
            </Layout>
        )
    }
}

export default Item
