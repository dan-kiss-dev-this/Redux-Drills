import React, { Component } from 'react'

export class PracticeComponentTwo extends Component {
  state = {
    name: 'Arron',
  }

  changeName = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    let { name } = this.state
    return (
      <div>
        <form>
          <input type="text" value={name} onChange={this.changeName} />
          <button>Change name</button>
        </form>

        <p>Your name is {this.state.name}</p>
      </div>
    )
  }
}

export default PracticeComponentTwo

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(PracticeComponentTwo)



