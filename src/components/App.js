import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = (type) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      }
    })
  }

  fetchPets = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(res => res.json())
    .then(pets => this.setState({pets}))
  }

  handleOnAdoptPet = (petId) => {
    let updatedPets = this.state.pets.map(pet => {
      if (petId === pet.id) {
        pet.isAdopted = !pet.isAdopted
      }
      return (
        pet
      )
    })
    this.setState({
      pets: updatedPets
    })

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.fetchPets} filters={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets= { this.state.pets} adoptedPets = {this.state.adoptedPets} onAdoptPet={this.handleOnAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
