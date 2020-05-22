import React, { Component } from 'react'
import { getItems } from '../services/items'
import { getUsers } from '../services/users'
import { verifyUser } from '../services/auth'
import Routes from '../routes'
import Header from '../screens/Header'

export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            items: [],
            users: []
        }
    }

    async componentDidMount() {
        const items = await getItems()
        this.setState({ items })
        const users = await getUsers()
        this.setState({ users })
        const user = await verifyUser();
        if (user) {
            this.setState({ user })
        }
    }

    addItem = item => this.setState({ items: [...this.state.items, item] })

    setUser = user => this.setState({ user })

    clearUser = () => this.setState({ user: null })

    render() {
        const { user, items, users } = this.state
        return (
            <>
                <Header user={user} />
                <main className="container">
                    <Routes
                        items={items}
                        user={user}
                        users={users}
                        setUser={this.setUser}
                        addItem={this.addItem}
                        clearUser={this.clearUser}
                    />
                </main>
            </>
        )
    }
}
