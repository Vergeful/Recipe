export default function Recipe({id, imgSrc, title}) {
    return (
      <div className="recipe">
         <h2>{title}</h2>
         <img src={imgSrc}/>
         <button className="recipe-button">SHOW RECIPE</button>
      </div>
    )
  }