import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getDataContents, getDataUniversty, getDataFaculty, getDataTestimony } from '../redux/actions';

import Header from '../components/Header';
import UnivSlider from '../containers/ListUniversity';
import Testimonials from './Testimonial';

class Home extends Component {

componentDidMount(){
    this.props.getDataContents()
    this.props.getDataUniversty()
    this.props.getDataFaculty()
}

    render(){
        const {contentData, isFetching, universities, faculties} = this.props;
        
        const freshman_program = "<p><strong>Requirements:<\/strong><\/p><ul><li>Indonesian citizen<\/li><li>A first-year student majoring in an eligible major in Sea's partner university<\/li><li>Not having any other scholarships or work commitments with other organizations<\/li><li>Maintain a minimum of 3.5\/4.0 cumulative GPA throughout the study<\/li><\/ul><p><strong>Benefits:<\/strong><\/p><ul><li>Full tuition fee and monthly stipend all the way to the completion of the 4th year of study<\/li><li>Laptop<\/li><li>Internship opportunity in Sea Businesses (Garena, Shopee, Airpay)<\/li><li>Development program<\/li><\/ul>";
        const senior_program = "<p><strong>Requirements:<\/strong><\/p><ul><li>Indonesian citizen<\/li><li>A final-year student majoring in an eligible major in Sea's partner university with a minimum cumulative GPA 3.5\/4.0<\/li><li>Not having any other scholarships or work commitments with other organizations<\/li><\/ul><p><strong>Benefits:<\/strong><\/p><ul><li>Full tuition fee and monthly stipend for final year<\/li><li>Internship opportunity in Sea Businesses (Garena, Shopee, Airpay)<\/li><li>Development program<\/li><\/ul>";

        return(
            <div>
                <Header/>
                <div className="content-container">
                    <section id="home">
                        <div id="home-container">
                            <div className="content">
                                <div className="title-home">
                                    <div className="big">
                                    Congratulations Sea Scholarship 2019 Awardees!
                                    </div>
                                </div>
                                <div className="desc">
                                    <p>
                                    The Sea Scholarship Committee is proud to announce the 2019 Academic Year Sea Scholarship recipients.  Final award email notifications were sent on October 17, 2019.
                                    </p>
                                </div>
                            </div>
                            <div className="home-img">
                                <img src={require('../assets/image/icon-graduate.png')} alt="" />
                            </div>
                        </div>
                    </section>
                
                    <section id="program">
                        <div className="title">Undergraduate Scholarship Program</div>
                        <div className="content">
                            <p>
                                {isFetching && contentData  ? contentData.program_content 
                                    : 
                                    'We are excited to announce that Sea Indonesia is now partnering with five universities in Indonesia and offering a merit-based scholarship to bright Indonesian students. This scholarship is our commitment to give back to the community by empowering youth through education. Through this scholarship, we hope to provide talented students with the opportunity to pursue a bachelor’s degree and solve the talent-gap issue in the technology industry in Indonesia.'
                                }
                            </p>
                            <div className="card-container">
                            <div className="card">
                                <img src={require('../assets/image/icon-freshmen.png')} alt=""/>
                                <div className="title">Sea Freshman Scholarship Program</div>
                                {isFetching && contentData ? 
                                    <div className="prog" dangerouslySetInnerHTML={{__html: contentData.freshman_program}}></div>
                                    :
                                    <div className="prog" dangerouslySetInnerHTML={{__html: freshman_program}}></div>
                                }
                            </div>
                            <div className="card">
                                <img src={require('../assets/image/icon-senior.png')} alt=""/>
                                <div className="title">Sea Senior Scholarship Program</div>
                                {isFetching && contentData  ? 
                                    <div className="prog senior" dangerouslySetInnerHTML={{__html: contentData.senior_program}}></div>
                                    :
                                    <div className="prog senior" dangerouslySetInnerHTML={{__html: senior_program}}></div>
                                    }
                            </div>
                            </div>
                        </div>
                    </section>
                    
                    <section id="partner-universities">
                        <div className="title">Partner Universities</div>
                        <div className="slider">
                            <UnivSlider univ={universities} faculty={faculties}/>
                        </div>
                    </section>
                
                    <section id="timeline">
                        <div className="title">Timeline</div>
                        <div className="content">
                            <div className="step">
                            <div className="step-title">Registration</div>
                            <div className="step-img">
                                <img src={require('../assets/image/Timeline-1.png')} alt="" />
                            </div>
                            <div className="step-date">
                                {isFetching && contentData ? contentData.date_regis : `22 July - 26 August 2019`}
                            </div>
                            <div className="grey-line"></div>
                            </div>
                            <div className="step">
                            <div className="step-title">Essay and CV Screening</div>
                            <div className="step-img">
                                <img src={require('../assets/image/Timeline-2.png')} alt="" />
                            </div>
                            <div className="step-date">
                                {isFetching && contentData ? contentData.date_esay_cvscreen : `29 July - 2 September 2019`
                                }
                            </div>
                            <div className="grey-line"></div>
                            </div>
                            <div className="step">
                            <div className="step-title">On-campus Interview</div>
                            <div className="step-img">
                                <img src={require('../assets/image/Timeline-3.png')} alt="" />
                            </div>
                            <div className="step-date">
                            {
                                isFetching && contentData ? contentData.date_interview : 
                                `4 - 16 September 2019`
                            }
                            </div>
                            <div className="grey-line"></div>
                            </div>
                            <div className="step">
                            <div className="step-title">Announcement of Selected Scholars</div>
                            <div className="step-img">
                                <img src={require('../assets/image/Timeline-4.png')} alt="" />
                            </div>
                            <div className="step-date add">
                                {isFetching && contentData ? contentData.date_announce : `17 September 2019`}
                            </div>
                            </div>
                        </div>
                    </section>

                    <section id="testimonials">
                        <div className="title">Testimonials</div>
                        <div className="slider">
                            <Testimonials testimonials={this.props.testimonials}/>
                        </div>
                    </section>

                    <section id="apply-here">
                        <div className="content">
                            <div className="title">
                            Applications are now closed.
                            <br/>
                            We'll see you again next year.
                            </div>
                        </div>
                    </section>

                    <section id="faq">
                        <div className="title">FAQ</div>
                        <div className="content" dangerouslySetInnerHTML={{__html: contentData.faq_content}}>

                        </div>
                    </section>

                    <footer>
                        <p>For more information about Sea, check out our corporate website <a href="https://www.seagroup.com/home" target="_blank" rel="noopener noreferrer">here</a>.</p>
                        <p>If you have further queries, reach out to us at <a href="mailto:id-scholarships@seagroup.com">id-scholarships@seagroup.com</a></p>
                    </footer>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.isFecthing,
    contentData: state.listContent.contents,
    universities: state.listUniversity.universities,
    faculties: state.listFaculty.faculties,
    testimonials: state.listTestimony.testimonials
});

const mapDispatchToProps = {
    getDataContents,
    getDataUniversty,
    getDataFaculty,
    getDataTestimony
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);