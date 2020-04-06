import React from 'react';
import { Carousel } from 'antd';
import './carrousel.css';
import b1 from './b1.jpg';
import b2 from './b2.jpg';
import b3 from './b3.jpg';







 export default class Carrousel extends React.Component {



render() {
    return (
<Carousel autoplay>
    <div>
      <h3>


	<img src={b1}

							   height={'5%'} 
							   width={'100%'} 

							/>



      </h3>
    </div>
    <div>
      <h3>	<img src={b2}

							   height={'5%'} 
							   width={'100%'} 

							/>

</h3>
    </div>
    <div>
      <h3><img src={b3}

							   height={'5%'} 
							   width={'100%'} 

							/>

      </h3>
    </div>
   
  </Carousel>

    );
  }
}
 
