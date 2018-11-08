import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import ImageUploader from 'react-images-upload';

import axios from "axios";

import "./Home.css";

class Splash extends Component {

    // componentDidMount = () => {
    //     axios.get('/api/selectone')
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        console.log(picture);
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }



    render() {
        return (
            <div className="container">
                <div className="box home-box">

                    <div className="nav-bar">
                        {/* <div className="home-button">
                            <div onClick={() => this.props.setPageName("NewAbility")}>new ability</div>
                            <div onClick={() => this.props.setPageName("Profile")}>profile</div>
                        </div> */}
                        <span>ultimate luchador</span>
                        {/* <div className="home-button">
                            <div onClick={() => this.props.setPageName("Credits")}>credits</div>
                            <div onClick={() => this.props.setPageName("Splash")}>Log Out</div>
                        </div> */}
                    </div>

                    <div className="profile-bar">

                        <div className="profile-info-bar">
                            <div className="profile-left-icon">

                                {/* IMAGE UPLODARE */}
                                <ImageUploader
                                    withIcon={false}
                                    // buttonText='Choose images'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    maxFileSize={5242880}
                                />

                            </div>
                            <div className="profile-col">
                                <div className="profile-player-info">{this.props.storeData.char_name}</div>
                                <div className="profile-player-info">
                                    <div className="player-stat">{this.props.storeData.lvl}</div>
                                    <div className="player-stat">{this.props.storeData.fame}</div>
                                    {/* <div className="player-stat">hi</div> */}
                                </div>
                            </div>
                        </div>

                        <div className="break-line"></div>


                        <div className="profile-ability-bar">
                            <div className="profile-left-icon">
                                <div className="newab-new-pic-bar w100">
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.props.storeData.ab1_color }}>
                                        <img alt="zap" src="./images/icon1.svg" />
                                    </div>
                                </div></div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar">
                                    <span className="ability-span" style={{ color: this.props.storeData.ab1_color }}>{this.props.storeData.ab1_name}</span>
                                </div>
                                <div className="opponent-stats-bar">
                                    <div>{this.props.storeData.ab1_dlow}-{this.props.storeData.ab1_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></div>
                                    <div>{this.props.storeData.ab1_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></div>
                                    <div>{this.props.storeData.ab1_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></div>
                                </div>
                            </div>
                        </div>


                        <div className="break-line"></div>


                        <div className="profile-ability-bar">
                            <div className="profile-left-icon">
                                <div className="newab-new-pic-bar w100">
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.props.storeData.ab2_color }}>
                                        <img alt="zap" src="./images/icon3.svg" />
                                    </div>
                                </div></div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar"><span className="ability-span" style={{ color: this.props.storeData.ab2_color }}>{this.props.storeData.ab2_name}</span></div>
                                <div className="opponent-stats-bar">
                                    <div>{this.props.storeData.ab2_dlow}-{this.props.storeData.ab2_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></div>
                                    <div>{this.props.storeData.ab2_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></div>
                                    <div>{this.props.storeData.ab2_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></div>
                                </div>
                            </div>
                        </div>


                        <div className="break-line"></div>


                        <div className="profile-ability-bar">
                            <div className="profile-left-icon">
                                <div className="newab-new-pic-bar w100">
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.props.storeData.ab3_color }}>
                                        <img alt="zap" src="./images/icon7.svg" />
                                    </div>
                                </div></div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar"><span className="ability-span" style={{ color: this.props.storeData.ab3_color }}>{this.props.storeData.ab3_name}</span></div>
                                <div className="opponent-stats-bar">
                                    <div>{this.props.storeData.ab3_dlow}-{this.props.storeData.ab3_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></div>
                                    <div>{this.props.storeData.ab3_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></div>
                                    <div>{this.props.storeData.ab3_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></div>
                                </div>
                            </div>
                        </div>

                    </div> {/* profile bar end */}


                    <div className="fight-bar">
                        <div className="fight-buttons">
                            <div className="fight-button" onClick={() => this.props.setPageName("ChooseOpponent")}>Fight</div>
                            <div className="boss-button">Boss</div>
                            <div className="boss-button boss-red" onClick={() => this.props.setPageName("NewAbility")}>Profile</div>
                        </div>

                        <div className="fight-stats">

                            <div className="fight-stats-tickets">
                                <div><img alt="icon" src="./images/ticket.svg" /></div>
                                <div>{this.props.storeData.tickets}/{this.props.storeData.tickets_max}</div>
                            </div>
                            <div className="fight-stats-text">

                            </div>


                            {/* <div>tickets</div>

                            <div className="stats-tickets">{this.props.storeData.tickets}/{this.props.storeData.tickets_max}</div>

                            <div className="stats-refresh">refresh</div> */}
                        </div>
                    </div>

                </div>
            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Splash);