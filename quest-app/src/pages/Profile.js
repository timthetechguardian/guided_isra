import React, { useEffect, useState } from 'react';
import './../Main.css';
import { useHistory } from 'react-router-dom';
import FormDialog from '../components/formDialog';

function ProfilePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
       async function fetchData() {
              const response = await fetch('http://localhost:5050/profile');
              if (!response.ok) {
                  const message = `An error occured: ${response.statusText}`;
                  console.error(message);
                  return;
              }
              const data = await response.json();
              setData(data);
       }
       fetchData();
       return;
    }, [data.length]);


    const history = useHistory();
    const handleClick = () => history.push(`/quest`);

    return (
        <div className='ParentWrapper'>
            <div className="TopBarSpacing"/>
            <div className="WrapperContent">
                <div className="LeftSideContent">
                    <div className="Partition_1">
                        <div className="Partition_1_W">
                            <div className="Grid1" style={{alignItems:'center'}}>
                                <div name="ProfilePic">
                                    {/* Profile Button insert here */}
                                    {/* <button style={{backgroundColor:"transparent", borderColor:"transparent", cursor:'pointer', margin:'0', padding:'0'}}>
                                        <AccountCircleIcon sx={{ fontSize: 50 }}/>
                                    </button> */}
                                    <FormDialog />
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
                                {data.map(item=> (
                                    // Profile Questionnaire List Item
                                    <button  
                                        style={{backgroundColor:"transparent", borderColor:"transparent", cursor:'pointer', margin:'0', padding:'0'}}
                                        type='button'
                                        onClick={handleClick}
                                    >
                                        <li 
                                            key={item._id} 
                                            className='PGL_Item'
                                        >
                                            <p style={{fontSize:"22px", fontFamily:'NRR'}}>Questionnaire: {item.asset_name}</p>
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