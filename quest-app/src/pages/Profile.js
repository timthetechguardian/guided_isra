import React, { useEffect, useState } from 'react';
import './../Main.css';
// import FormDialog from './../components/FormDialog';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Item = (props) => (
    <button  
        style={{backgroundColor:"transparent", borderColor:"transparent", cursor:'pointer', margin:'0', padding:'0'}}
        type='button'
        onClick={props.navigateQuest}
    >
        <li 
            key={props.item._id} 
                className='PGL_Item'
        >
                <p style={{fontSize:"22px", fontFamily:'NRR'}}>
                    Questionnaire: {props.item.asset_name}
                </p>
        </li>
    </button>
);

function ProfilePage() {
    const [items, setItems] = useState([]);
    const history = useHistory();

    useEffect(() => {
       async function fetchData() {
              const response = await fetch('http://localhost:5050/profile');
              if (!response.ok) {
                  const message = `An error occured: ${response.statusText}`;
                  console.error(message);
                  return;
              }
              const items = await response.json();
              setItems(items);
       }
       fetchData();
       return;
    }, [items.length]);

    function navigateQuest() {
        history.push(`/quest/${items._id}`);
    }

    function renderItems() {
        return items.map((item) => {
            return (
                <Item 
                    key={item._id}
                    item={item}
                    onClick={navigateQuest}
                />
            );
        });
    }

    return (
        <div className='ParentWrapper'>
            <div className="TopBarSpacing"/>
            <div className="WrapperContent">
                <div className="LeftSideContent">
                    <div className="Partition_1">
                        <div className="Partition_1_W">
                            <div className="Grid1" style={{alignItems:'center'}}>
                                <div name="ProfilePic">
                                    {/* <FormDialog /> */}
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
                        <h2 style={{fontWeight:"regular", fontSize:"30px", fontFamily:'NRL'}}>Profile</h2>
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
                                {renderItems()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;