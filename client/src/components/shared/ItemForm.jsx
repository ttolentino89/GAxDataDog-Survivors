import React from 'react'

const ItemForm = ({
    item,
    handleSubmit,
    handleChange,
    cancelPath,
    history
}) => (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    placeholder='Event/Team/Project Name'
                    value={item.title}
                    name='title'
                    required
                    onChange={handleChange}
                />

                <label>Link</label>
                <input
                    placeholder='http://facebook.com/events/partytime'
                    value={item.link}
                    name='link'
                    required
                    onChange={handleChange}
                />

                <button type='submit'>Submit</button>
                <button className='danger' onClick={() => history.push(cancelPath)}>
                    Cancel
			</button>
            </form>
        </div>
    )

export default ItemForm
