import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import beefNoodle from '../../assets/img/beef-noodle.jpg'
import friedRice from '../../assets/img/fried-rice.jpg'
import springRoll from '../../assets/img/spring-roll.jpg'
import summerRoll from '../../assets/img/summer-roll.jpg'
import classes from './Slider.module.css';

class SlideView extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider className={classes.Slider}
        {...settings}>
          <div>
            <img src={beefNoodle} alt="beefNoodle" />
          </div>
          <div>
            <img src={friedRice} alt="friedRice" />
          </div>
          <div>
            <img src={springRoll} alt="springRoll" />
          </div>
          <div>
            <img src={summerRoll} alt="summerRoll" />
          </div>
          
        </Slider>
      );
    }
  }
 
export default SlideView;