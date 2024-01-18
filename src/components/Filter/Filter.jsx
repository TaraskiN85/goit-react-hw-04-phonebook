import css from './Filter.module.css'

export const Filter = ({ dataSearch }) => {
  
  const handleSearch = (e) => {
    const searchData = e.currentTarget.value
    dataSearch(searchData)
  }

  return (
    <div>
      <p className={css.filterLabel}>Find contacts by name</p>
      <input className={css.filterSearchField} type='search'
        onChange={handleSearch}></input>
    </div>
  )
}
