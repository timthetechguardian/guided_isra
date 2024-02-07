import React from 'react';
import './../Main.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ProfilePage() {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']; // Replace with your actual data

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
                                <button className="button-17">Create New</button>
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
                        <div className="Partition_L_1">
                        </div>
                        <div className="Partition_L_2">
                            <div className="PL2_TopSpacing">
                            </div>
                            {/* Profile Questionnaire List */}
                            <ul className='P_Q_List'>
                                {items.map((item, index) => (
                                    // Profile Questionnaire List Item
                                    <button style={{backgroundColor:"transparent", borderColor:"transparent", cursor:'pointer', margin:'0', padding:'0'}} type='button'>
                                        <li key={index} className='PGL_Item'>
                                            <p style={{fontSize:"22px", fontFamily:'NRR'}}>Questionnaire XYZ</p>
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