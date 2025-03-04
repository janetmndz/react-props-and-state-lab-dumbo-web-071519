import React from 'react'

class Pet extends React.Component {
  // !This is 
  renderButtons = (petStatus) => {
    if(petStatus){
      return <button className = "ui disabled button"> Already adopted </button>
    }
    else{
      return <button className = "ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}> Adopt pet </button>
    }
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name} 
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButtons(this.props.pet.isAdopted)}
        </div>
      </div>
    )
  }
}

export default Pet
