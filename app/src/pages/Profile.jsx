import React, { Component } from 'react';
import Oyes from "../images/Oyes.png";
import "./profile.css";
import Button from "react-bootstrap/Button";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", email: "", points: 0, teaching_feedback: 0, tags: ""
        }
        document.title = "Profile";
    }

    

    componentWillMount() {
        fetch('/users/profile').then(res => {
            try {
                res.json().then(val => {
                    console.log(val);
                    this.setState({ username: val.username, email: val.email, points: val.points, teaching_feedback: val.teaching_feedback, tags: val.tags });
                })
            } catch (err) {
                throw err;
            }
        });
    }

    renderTags = () => {
        let tagsDisplay = [];
    let tagList = this.state.tags.split(" ");
            for (let i = 0; i < tagList.length; i++) {
            tagsDisplay.push( <Button className="disabled text-xs me-1 rounded" variant="outline-primary">
        {tagList[i]}
      </Button>);
        }
            return tagsDisplay;
};




    render() {
        return (<>
            <div className="profile-container">
                <img src={Oyes} alt="Profile pic" className="profile-pic" />
                <div>
                     <div className="profile-header">
                            Modules
                        </div>
                    {this.renderTags()}
                    </div>
                <div>
                <div className="profile-layer">
                    <div>
                        <div className="profile-header">Username</div>
                        <div>{this.state.username}</div>
                    </div>
                    <div>
                        <div className="profile-header">Email</div>
                        <div>{this.state.email}</div>
                    </div>
                </div>
                <div className="profile-layer">
                    <div>
                        <div className="profile-header">
                            Upvotes
                        </div>
                        <div>
                            {this.state.points} points
                        </div>
                    </div>
                    <div>
                        <div className="profile-header">
                            Teaching feedback
                        </div>
                        <div>
                            {this.state.teaching_feedback} increase (up to a maximum of 5.0)
                        </div>
                    </div>
                </div>

                </div>
            </div>

        </>)

    }
}

export default Profile;

