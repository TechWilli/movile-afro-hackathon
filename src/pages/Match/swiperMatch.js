import React from 'react';
import Swiper from 'react-id-swiper';
import './index.scss';
import 'swiper/css/swiper.css';

function SwiperMatch() {
    const params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerColumn: 1, 
        loop: true
      }
  return (

      <Swiper {...params}>
        <div className="box-match">
            <div className="box-match--image">
            <img
              src={require("../../assets/foto-mentor.png")}
              className="m-0-auto img-responsive"
            />
            </div>
            <div className="box-match--content">
                <h3>Fabio Silva</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ....</p>
                <a href="">Ver Perfil</a>
            </div>
        </div>
        <div className="box-match">
            <div className="box-match--image">
            <img
              src={require("../../assets/foto-mentor.png")}
              className="m-0-auto img-responsive"
            />
            </div>
            <div className="box-match--content">
                <h3>Orlando de Oliveira</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ....</p>
                <a href="">Ver Perfil</a>
            </div>
        </div>
        <div className="box-match">
            <div className="box-match--image">
            <img
              src={require("../../assets/foto-mentor.png")}
              className="m-0-auto img-responsive"
            />
            </div>
            <div className="box-match--content">
                <h3>Orlando de Oliveira</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ....</p>
                <a href="">Ver Perfil</a>
            </div>
        </div>
      </Swiper>
    
  );
}

export default SwiperMatch;