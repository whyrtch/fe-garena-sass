import React, { Component } from 'react';
import Slider from 'react-slick';
import Arrow from '../components/Arrow';
import GLOBAL from '../utils/GLOBAL';

class ListUniversity extends Component {
   universities = GLOBAL.UNIVERSITY_HARDCODE
   faculties = GLOBAL.FACULTY_HARDCODE
      
  majorbyId = (id) =>{
    const {faculty} = this.props;
    var data = [];
    var datas = this.faculties;
    if(faculty){ 
      datas = faculty;
    }   
    data = datas.filter(function(fac){
      return parseInt(fac.univ_id,10) === parseInt(id,10);
    })

    if(data){
      data.sort(function(a,b){
        return a.sort - b.sort
      })
    }
    return data
  }

  renderMajorList(isOdd, majors) {
    let middle = Math.ceil(majors.length / 2);
    return (
      <ul>
        {majors.filter((m, i) => (isOdd ? i < middle : i >= middle)).map((major, i) => <li key={i}>{major.name}</li>)}
      </ul>
    )
  }

  render() {
    const {univ} = this.props;
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />
    };
    var datas = this.universities;
    if(univ){
      datas = univ;
    }
    return (
      <Slider {...settings}>
        {
          datas.map((univ, i) => {
            return (
              <div key={i} className="uni">
                <div className="university">
                  <div className="photo">
                    <img src={univ.univ_logo} alt="" />
                  </div>
                  <div className="info">
                    <div className="name">{univ.univ_name}</div>
                    <div className="flex-container">
                      {this.renderMajorList(true, this.majorbyId(univ.id))}
                      {this.renderMajorList(false, this.majorbyId(univ.id))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </Slider>
    )
  }
}

export default ListUniversity;
