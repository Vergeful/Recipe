export default function Search(props) {
    return (
      <div className="search">
        <div className="burger food-icons"><i class="fa-solid fa-burger fa-bounce fa-2xl"></i></div>
        <div className="pizza food-icons"><i class="fa-solid fa-pizza-slice fa-spin-pulse fa-2xl"></i></div>
        <div>
            <h1>Savitur's Recipe Search App</h1>
            <h6>This is powered by the Spoontacular API!</h6>
        </div>
        <form onSubmit={() => props.search} className="form">
            <input type="text" placeholder="Search for any recipe you want!"></input>
            <button className="search-button"> <i class="fa-sharp fa-solid fa-magnifying-glass fa-shake fa-xl"></i> </button>
        </form>
      </div>
    )
  }