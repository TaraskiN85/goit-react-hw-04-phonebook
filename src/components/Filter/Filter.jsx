import { Component } from 'react'
import css from './Filter.module.css'

export class Filter extends Component {
  
  handleSearch = (e) => {
    const searchData = e.currentTarget.value
    this.props.handleSearch(searchData)
  }

  render() {
    return (
      <div>
        <p className={css.filterLabel}>Find contacts by name</p>
        <input className={css.filterSearchField} type='search' onChange={this.handleSearch}></input>
      </div>
    )
  }
}
