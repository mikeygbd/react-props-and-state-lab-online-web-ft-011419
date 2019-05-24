import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const listPets = this.props.pets.map((pet, index) => {
     return <Pet pet={pet} key={index}
     onAdoptPet={this.props.onAdoptPet}
     isAdopted={this.props.adoptedPets} />
 })
    return <div className="ui cards">{listPets}</div>
  }
}

export default PetBrowser
