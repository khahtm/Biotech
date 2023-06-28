import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class ServiceDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">How It Works</h2>
                                    <p>Transforming Organic Agriculture through Biotech Innovate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>Together, we revolutionize organic agriculture, leveraging biotechnology to drive sustainable practices, increase yields, and create a greener future.</p>
                                                    <p> Join us in transforming the way we grow food and make a positive impact on our planet.</p>
                                                    <h4 className="title">Step 1: Submission</h4>
                                                    <ul className="liststyle">
                                                        <li>Landowners and organic businesses submit their project details and requirements through our user-friendly platform.</li>
                                                        <li>Our experienced team carefully assesses each submission, considering factors such as land size, location, existing practices, and specific objectives.</li>
                                                    </ul>

                                                    <h4 className="title">Step 2: Solution Matching</h4>
                                                    <ul className="liststyle">
                                                        <li>Based on the project requirements, we leverage our extensive network and expertise to match landowners and organic businesses with specialized biotech companies.</li>
                                                        <li>We consider factors like technological expertise, research capabilities, and compatibility to ensure the best possible match for each project.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">Step 3: Collaboration</h4>
                                                    <ul className="liststyle">
                                                        <li>Once the matching process is complete, landowners and organic businesses engage in discussions and collaborations with the selected biotech experts.</li>
                                                        <li>Through these collaborations, tailored biotech solutions are developed and implemented on the land, addressing specific goals and challenges identified during the assessment phase.</li>
                                                        <li>Our team facilitates the exchange of knowledge, resources, and expertise to ensure a successful implementation of sustainable biotech techniques.</li>
                                                    </ul>
                                                    <h4 className="title">Step 4: Monitoring </h4>
                                                    <ul className="liststyle">
                                                        <li>Throughout the implementation phase, Biotech Innovate provides ongoing monitoring and support.</li>
                                                        <li>We track and evaluate key performance indicators, including yield improvements, soil health, water management, and reduced environmental impact.</li>
                                                        <li>Continuous monitoring helps us identify any issues or challenges that may arise, allowing for timely adjustments and optimization of the biotech solutions.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}
                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default ServiceDetails;