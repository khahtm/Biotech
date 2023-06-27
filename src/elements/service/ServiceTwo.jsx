import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Submit Your Project',
        description: ' Landowners and businesses with available land can submit their project details to Biotech Innovate through our user-friendly online form.'
    },
    {
        icon: <FiLayers />,
        title: 'Solution Matching',
        description: 'Our platform carefully analyzes your project requirements and matches you with suitable biotech companies that specialize in organic agriculture solutions.'
    },
    {
        icon: <FiUsers />,
        title: 'Collaborate and Innovate',
        description: 'Collaborate with biotech experts for sustainable farming practices. Boost organic product output together.'
    },
    {
        icon: <FiMonitor />,
        title: 'Verified Carbon Credits',
        description: 'Cut carbon emissions, earn verified credits for trading. Partnered organizations ensure highest standards.'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'How It Works',
        description = 'Connecting Organic Businesses and Biotech Experts';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/service"><span className="text">Request Custom Service</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
