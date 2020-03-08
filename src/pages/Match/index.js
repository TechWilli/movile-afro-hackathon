import React from 'react';
import SwiperMatch from './swiperMatch';
import './index.scss';

function Match() {
  return (
    <div className="Match">
      <h2>Josué, encontramos os seguintes mentores para você</h2>
      <SwiperMatch></SwiperMatch>
      <button>Selecionar Button</button>
    </div>
  );
}

export default Match;