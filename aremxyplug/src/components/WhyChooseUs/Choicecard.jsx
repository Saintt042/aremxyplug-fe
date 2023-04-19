import React from 'react';
import { Container } from './ChoicecardStyle';


const Choicecard = ({ header, details }) => {
  return (
    <Container>
        <section className='info'>
				<div>
					<h3 className='headder'>{ header }</h3>
                    <p className='details'>{ details }</p>
				</div>
			</section>
    </Container>
  )
}

export default Choicecard