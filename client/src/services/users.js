import api from './apiConfig'

export const getUsers = async () => {
    try {
        const resp = await api.get('/users')
        return resp.data.Users
    } catch (error) {
        throw error
    }
}

export const getUserById = async id => {
    try {
        const resp = await api.get(`/users/${id}`)
        return resp.data.User
    } catch (error) {
        throw error
    }
}

export const createUser = async user => {
    try {
        const resp = await api.post('/users', user)
        console.log(resp.data)
        return resp
    } catch (error) {
        throw error
    }
}

export const updateUser = async (id, user) => {
    try {
        const resp = await api.put(`/users/${id}`, user)
        return resp.data
    } catch (error) {
        throw error
    }
}

export const deleteUser = async id => {
    try {
        const resp = await api.delete(`/users/${id}`)
        return resp.data
    } catch (error) {
        throw error
    }
}
