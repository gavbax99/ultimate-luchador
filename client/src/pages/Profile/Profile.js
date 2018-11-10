import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import ImageUploader from 'react-images-upload';
import Dropzone from 'react-dropzone'
import "./Profile.css";


class Profile extends Component {

    state = {
        src: ""
    }

    onDrop(files) {
        this.setState({
            files
        });
    }

    onCancel() {
        this.setState({
            files: []
        });
    }

    handleFile = (event: SyntheticEvent<HTMLImageElement>) => {
        event.preventDefault();
        if (event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.currentTarget.files[0]);
            reader.onloadend = evt => {
                localStorage.setItem('imgFile', evt.target.result);
                // upload to database to appropriate user

                // -----------------------
                this.setState({
                    src: evt.target.result,
                });
            };
        }
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div className="box fight-box">

                    <div className="results-text-bar results-victory-text profile-text">profile</div>

                    <div className="profile-main-bar">
                        <div className="profile-uploader">
                        </div>
                        <div className="profile-uploader">
                            <div className="profile-picture">
                                <img src={this.state.src}></img>
                                <input onInput={this.handleFile}
                                    type="file"
                                    accept="image/*"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="profile-buttons-bar">
                        <div className="profile-buttons-col">
                            <div className="profile-button">
                                <div onClick={() => this.props.setPageName("Home")}>back</div>
                            </div>
                            <div className="profile-button">
                                <div onClick={() => this.props.setPageName("Credits")}>credits</div>
                            </div>
                        </div>
                        <div className="profile-buttons-col">
                            <div className="profile-button">
                                <div>something</div>
                            </div>
                            <div className="profile-button">
                                <div>log out</div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        );
    };
}


const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Profile);