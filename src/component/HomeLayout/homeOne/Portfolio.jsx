import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import {Link} from "react-router-dom";


const PortfolioList = [
    {
        image: 'image-1',
        category: 'Initial Funding Round',
        title: 'Drive the future of organic agriculture through our funding round.'
    },
    {
        image: 'image-2',
        category: 'Project Investments',
        title: ' Invest in specific organic initiatives aligned with your goals.'
    },
    {
        image: 'image-3',
        category: 'Detailed Information',
        title: ' Access comprehensive project details for informed decisions.'
    },
    {
        image: 'image-4',
        category: 'Decentralized Opportunities',
        title: ' Embrace transparent Ethereum-based NFT investments.'
    },
    {
        image: 'image-3',
        category: 'Sustainable Future',
        title: ' Support environmentally friendly and socially responsible farming.'
    },
    {
        image: 'image-4',
        category: 'Impact Investing',
        title: ' Align your portfolio with our mission for regenerative practices.'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Investment Opportunities',
        description = 'Invest in the Future of Organic Agriculture';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4 className="title"><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link className="link-overlay" to="/portfolio-details"></Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;