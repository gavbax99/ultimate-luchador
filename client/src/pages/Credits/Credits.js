//Imports
//=================================================
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import "./Credits.css";

//Class
//===============================================
class Credits extends Component {

    goToGh = () => {
        // Goes to our github repo
        window.open("https://github.com/gavbax99/ultimate-luchador");
    };

    render() {
        return (
            <div className="container">
                <div className="box fight-box">

                    {/* FLEX ROW */}
                    <div className="results-text-bar results-defeat-text credits-text">credits</div>

                    {/* FLEX ROW */}
                    <div className="credits-members-bar">
                        <div className="credits-member">
                            <span style={{ textShadow: "1px 1px #000", color: "rgb(82, 208, 247)" }}>Gavin Baxter - <span style={{ fontStyle: "italic" }}>Project Manager</span></span>
                            <div>
                                <a href="https://github.com/gavbax99"><img alt="icon" src="./images/github.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://www.linkedin.com/in/gavinbaxter99/"><img alt="icon" src="./images/linkedin.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://gavbax99.github.io/UCDPortfolio/"><img alt="icon" src="./images/home.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                            </div>
                        </div>
                        <div className="credits-member">
                            <span style={{ textShadow: "1px 1px #000", color: "orange" }}>Justin Redfearn - <span style={{ fontStyle: "italic" }}>Developer</span></span>
                            <div>
                                <a href="https://github.com/Redfearn-Justin"><img alt="icon" src="./images/github.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://www.linkedin.com/in/gavinbaxter99/"><img alt="icon" src="./images/linkedin.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://gavbax99.github.io/UCDPortfolio/"><img alt="icon" src="./images/home.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                            </div>
                        </div>
                        <div className="credits-member">
                            <span style={{ textShadow: "1px 1px #000", color: "rgb(65, 201, 65)" }}>Matt Bower - <span style={{ fontStyle: "italic" }}>Developer</span></span>
                            <div>
                                <a href="https://github.com/mmbower1"><img alt="icon" src="./images/github.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://www.linkedin.com/in/gavinbaxter99/"><img alt="icon" src="./images/linkedin.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://gavbax99.github.io/UCDPortfolio/"><img alt="icon" src="./images/home.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                            </div>
                        </div>
                        <div className="credits-member">
                            <span style={{ textShadow: "1px 1px #000", color: "rgb(255, 151, 158)" }}>Kyle Janssen - <span style={{ fontStyle: "italic" }}>Art Director</span></span>
                            <div>
                                <a href="https://www.instagram.com/kaykoj/"><img alt="icon" src="./images/insta.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                            </div>
                        </div>
                    </div>

                    {/* FLEX ROW */}
                    <div className="credits-tech-bar">

                        <div className="credits-tech-row">
                            <div className="credits-tech-col"><img alt="icon" src="./images/react.png" /></div>
                            <div className="credits-tech-col"><img alt="icon" src="./images/node.png" /></div>
                            <div className="credits-tech-col"><img alt="icon" src="./images/mysql.png" /></div>
                        </div>
                        <div className="credits-tech-row">
                            <div className="credits-tech-col"><img alt="icon" src="./images/redux.png" /></div>
                            <div className="credits-tech-col"><img alt="icon" src="./images/firebase.png" /></div>
                            <div className="credits-tech-col"><img alt="icon" src="./images/heroku.png" /></div>
                        </div>

                    </div>

                    {/* FLEX ROW */}
                    <div className="credits-back-bar">
                        <div className="credits-back">
                            <div className="button" onClick={() => this.props.setPageName("Home")}>back</div>
                            <div className="button" onClick={() => this.goToGh()}>github</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Credits);