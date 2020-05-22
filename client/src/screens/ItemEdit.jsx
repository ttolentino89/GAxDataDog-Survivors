import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ItemForm from '../components/shared/ItemForm'
import { getItemById, updateItem } from '../services/items'

class ItemEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: {
                title: '',
                link: ''
            },
            updated: false
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

    handleChange = event => {
        const updatedField = { [event.target.name]: event.target.value }

        const editedItem = Object.assign(this.state.item, updatedField)

        this.setState({ item: editedItem })
    }

    handleSubmit = event => {
        event.preventDefault()

        updateItem(this.props.match.params.id, { ...this.state.item })
            .then(() => this.setState({ updated: true }))
            .catch(console.error)
    }

    render() {
        const { item, updated } = this.state
        const { handleChange, handleSubmit } = this
        const { history } = this.props

        if (updated) {
            return <Redirect to={`/items/${this.props.match.params.id}`} />
        }

        return (
            <>
                <ItemForm
                    history={history}
                    item={item}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    cancelPath={`/items/${this.props.match.params.id}`}
                />
            </>
        )
    }
}
export default ItemEdit
