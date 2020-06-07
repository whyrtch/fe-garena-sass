import React, { Component } from 'react';
import Slider from 'react-slick';
import Arrow from '../components/Arrow';
import { getDataTestimony } from '../redux/actions';
import {connect} from 'react-redux';


export class ListTetimony extends Component {
  testimonials = []


  componentDidMount(){
    this.props.getDataTestimony()
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />
    };
    
    const {testimonials} = this.props;
    var data = this.testimonials;
    if(testimonials){
      data = testimonials;
    }

    return (
      <Slider {...settings}>
        {
          data.map((testimonial, i) => {
            return(
              <div key={i} className="testi">
                <div className="testimonial">
                  <div className="photo">
                    <img src={testimonial.image} alt="" />
                  </div>
                  <div className="desc">
                    <div className="text">{testimonial.story}</div>
                    <div className="person-info">{testimonial.name}</div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
    )
  }
}


const mapStateToProps = (state) => ({
    isFetching : state.isFecthing,
    testimonials : state.listTestimony.testimonials,
});

const mapDispatchToProps = {
    getDataTestimony
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTetimony);