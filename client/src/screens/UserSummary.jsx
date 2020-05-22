import React, { Component } from 'react'

class UserSummary extends Component {
  constructor() {
    super()
    this.state = {
      showMore: false
    }
  }
  handleClick = (event) => {
    event.preventDefault()
    this.setState(prevState => ({
      showMore: !prevState.showMore
    }));
  }

  render() {
    const data = this.props.userData
    let fill = <div></div>
    if (data === null) {
       fill = <div>no user data</div>
    } else if (!this.state.showMore){
       fill = (
          <div>
            Name: {data.name.first} {data.name.last}
            <br></br>
            Email: {data.email}
          </div>
        )
    } else {
       fill = (

          <div>
             Name: {data.name.first} {data.name.last}
             <br></br>
             Email: {data.email}
             <br></br>
             Address: {data.location.street.number} {data.location.street.name}
             {data.location.city}, {data.location.state}
             <br></br>
             Username: {data.login.username}
             <div>
               <img src={data.picture.medium}/>
             </div>
           </div>
        )
    }
    return (
      <div>
        <div>{fill}</div>
       <form>
            <button onClick={this.handleClick}>toggle</button>
      </form>
      </div>

    )


  }
}

export default UserSummary
