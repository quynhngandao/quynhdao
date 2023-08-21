import React from "react";

function CardItem(props) {
  return (
    <ul className="items">
      <li className="cards__item">
      <a
          className="cards__item__link"
          href={props.path}  
          target="_blank"   
          rel="noopener noreferrer" 
        >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              width="400px"
              max-height="250px"
              className="cards__item_img"
              alt="projects"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
    </a>
      </li>
    </ul>
  );
}

export default CardItem;
