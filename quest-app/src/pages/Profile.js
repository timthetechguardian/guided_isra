import React, { Component } from 'react';
import './../Main.css';
import { useHistory } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: ""
        };
    }

    callAPI() {
        fetch("http://localhost:3001/profile")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>
                <p>{this.state.apiResponse}</p>
            </div>
        );
    }
}

function ProfilePage() {
    
    const items = [<App />]; // Replace with your actual data
    const history = useHistory();
    const handleClick = () => history.push('/quest');

    return (
        <div className='ParentWrapper'>
            <div className="TopBarSpacing"/>
            <div className="WrapperContent">
                <div className="LeftSideContent">
                    <div className="Partition_1">
                        <div className="Partition_1_W">
                            <div className="Grid1" style={{alignItems:'center'}}>
                                <div name="ProfilePic">
                                    <button style={{backgroundColor:"transparent", borderColor:"transparent", cursor:'pointer', margin:'0', padding:'0'}}>
                                        <AccountCircleIcon sx={{ fontSize: 50 }}/>
                                    </button>
                                </div>
                            </div>
                            <div className="Grid1">
                                <div className="ProfileName">
                                    <h2 style={{fontWeight:"light", fontSize:"24px", fontFamily:'NRL'}}>Tim Stein</h2>
                                </div>
                            </div>
                            <div className="Grid1"/>
                            <div className="Grid1">
                                <button className="button-17">Log Out</button>
                            </div>
                        </div>
                    </div>
                    <div className="Partition_2"/>
                    <div className="Partition_3">
                        <h2 style={{fontWeight:"regular", fontSize:"30px", fontFamily:'NRL'}}>Questionnaire</h2>
                    </div>
                </div> 
                <div className="RightSideOverlapping">
                    <div className="RightSideContent">
                        {/* <div className="Partition_L_1"/> */}
                        <div className="Partition_L_2">
                            <div className="PL2_TopSpacing">
                            </div>
                            {/* Profile Questionnaire List */}
                            <ul className='P_Q_List'>
                                {items.map((item, index) => (
                                    // Profile Questionnaire List Item
                                    <button  
                                        style={{backgroundColor:"transparent", borderColor:"transparent", cursor:'pointer', margin:'0', padding:'0'}}
                                        type='button'
                                        onClick={handleClick}
                                    >
                                        <li 
                                            key={index} 
                                            className='PGL_Item'
                                        >
                                            <p style={{fontSize:"22px", fontFamily:'NRR'}}>xyz</p>
                                            <link to="/quest"></link>
                                        </li>
                                    </button>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;