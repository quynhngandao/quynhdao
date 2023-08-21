import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/playwme.png'
              text='Connect users with local shelters '
              label='PLAYwME'
              path='https://protected-tundra-96868-dd04b8c05221.herokuapp.com/'
            />
            <CardItem
              src='images/work-in-progress1.png'
              text='Allow users to anonymously express themselves'
              label='Genderstanding'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;