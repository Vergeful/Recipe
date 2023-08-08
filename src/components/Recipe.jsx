// Recipe cards show only its name and image:
export default function Recipe({id, imgSrc, title, toggleDetailsModal}) {

    return (
      <div className="recipe">
         <h2>{title}</h2>
         <img src={imgSrc}/>
         <button className="recipe-button" onClick={() => toggleDetailsModal(id)}>SHOW RECIPE</button>
      </div>
    )
  }