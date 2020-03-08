import React from 'react';
import SwiperMatch from './swiperMatch';
import './index.scss';

function Match() {
  return (
    <div className="Match">
      <div className="container">
        <h1>Encontramos os melhores mentores para você</h1>
        <SwiperMatch></SwiperMatch>
        <div className="text-center">
          <button className="button-primary">Selecionar Mentor</button>
        </div>
      </div>
    </div>
  );
}

export default Match;