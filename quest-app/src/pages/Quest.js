import React, {useState, useEffect} from 'react';
import './../Main.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

import { useParams, useHistory } from 'react-router-dom';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 470,
    },
  },
};

// Variables for Personal Data Dropdown
const names = [
  'Pseudomized Personal Data',
  'General Business Contact',
  'Data Concerning Privacy of a Single Individual',
  'Financial Data',
  'Employment Documents',
  'Special Categories of Personal Data',
];

// Variables for Confidential Business Data Dropdown
const names1 = [
    'Business Plans',
    'Financial Data',
    'Intellectual Property',
    'Trade Secrets',
    'Customer Lists',
    'Marketing Strategies',
    'Product Designs',
    'Product Formulas',
    'Product Manufacturing Processes',
    'Product Research and Development',
];


// Function for Personal Data Dropdown
function getStyles(name, dataCat, theme) {
    return {
      fontWeight:
        dataCat.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

// Function for Confidential Business Data Dropdown
function getStyles1(name, confBus, theme) {
    return {
        fontWeight:
            confBus.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

// Main Function
const Quest= () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [form, setForm] = useState({
        asset_name: "",
        asset_description: "",
        additional_notes: "",
        personal_data_cat: [],
        confidential_business_data_cat: [],
        no_data_cat: false,
        userkind: "",
        shared_user: "",
        usercred: "",
        password_complex: "",
        mfa_opt: "",
        mfa_use: "",
        mfa_name: "",
        passwd_change: "",
        passwdmng_use: "",
        passwdmg_name: "",
        submForm: false,
    });
    const params = useParams();
    const history = useHistory();
    // ???
    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined;
            if (!id) return;
            const response = await fetch(
                `http://localhost:5050/quest/${params.id.toString()}`
            );
            if (!response.ok) {
                const message = `An error occured: ${response.statusText}`;
                console.error(message);
                return;
            }
            const quest = await response.json();
            if (!quest) {
                console.warn(`Document with id ${id} not found!`);
                history.push("/");
                return;
            }
            setForm(quest);
        }
        fetchData();
        return;
    }, [params.id, history]);

    // These methods will update the state properties
    function updateForm(value) {
        return setForm ((prev) => {
            return { ...prev, ...value };        
        });
    }
    
   
    // This function handles the submission of the form
    //                    Argument missing
    async function onSubmit(event) {
        event.preventDefault();
        const quest = { ...form };
        try {
            let response;
                response = await fetch(`http://localhost:5050/quest/${params.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(quest),
                });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error('A problem occured adding or updating a document: ', error);
        } finally {
            setForm({
                asset_name: "",
                asset_description: "",
                additional_notes: "",
                personal_data_cat: [],
                confidential_business_data_cat: [],
                no_data_cat: false,
                userkind: "",
                shared_user: "",
                usercred: "",
                password_complex: "",
                mfa_opt: "",
                mfa_use: "",
                mfa_name: "",
                passwd_change: "",
                passwdmng_use: "",
                passwdmg_name: "",
                submForm: false,
            });
            history.push("/");
        }
    }
    
    // Dropdown Handlers
    const [dataCat, setdataCat] = useState([]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setdataCat(
            typeof value === 'string' ? value.split(',') : value,
        );
        updateForm({ personal_data_cat: value });
    };

    const [confBus, setconfBus] = useState([]);
    const handleChange1 = (event) => {
        const {
            target: { value },
        } = event;
        setconfBus(
            typeof value === 'string' ? value.split(',') : value,
        ); 
        updateForm({ confidential_business_data_cat: value });   
    };

    // Checkbox Handler
    const [checked, setChecked] = useState(false);
    const handleChecked = () => {
        setChecked((prev) => !prev);
        if (checked === true) {
            updateForm({ no_data_cat: true });
        } else {
            updateForm({ no_data_cat: false });
        }
    };

    const [formed, setFormed] = useState(false);
    const handleFormed = () => {
        setFormed((prev) => !prev);
        if (formed === true) {
            updateForm({ submForm: true });
        } else {
            updateForm({ submForm: false });
        }
    };


    return(
        // Parent Wrapper Quest
        <form onSubmit={onSubmit}>
            {/* {handleSubmit((data) => setData(JSON.stringify(data)))} */}
            <div className='PWQ'>
                {/* PWQ */}
                {/* Content Wrapper Quest */}
                <div className='CWQ'>
                    {/* CWQ */}
                    {/* Title */}
                    <div className='CWQ-1' name="Title">
                        <h1>Questionnaire</h1>
                    </div>
                    <br/>

                    {/* Question */}

                    <div className='CWQ-1' name="Description" style={{marginBottom:'1vh'}}>
                        {/* CWQ-1 */}
                        <b style={{color:'red'}}>*</b>
                        <b>Please make a list of use cases. They should answer the question: Why do you use this portal/program?</b>
                        <br/>
                    </div>
                    <div className='CWQ-1' name="FreeSizeTextInput">
                        {/* CWQ-2 */}
                        <TextField
                            id="filled-multiline-flexible"
                            label="Write here"
                            placeholder='- <Name of the use case>: Explanation of the use case'
                            multiline
                            required
                            maxRows={8}
                            variant="filled"
                            value={form.asset_description}
                            onChange={(event) => updateForm({ asset_description: event.target.value })}
                            sx={{
                                minWidth: '100%',
                                fontFamily: 'NRL',
                                ...(isSmallScreen && {
                                    width: '100%',
                                    maxWidth: '100%',
                                }),
                            }}
                        >
                        </TextField>
                    </div>

                    <br/><br/>

                    {/* Question */}
                    
                    <div className='CWQ-1' name="Features" style={{marginTop:'3vh', marginBottom:'1vh'}}>
                        {/* CWQ-1 */}
                        {/* <b style={{color:'red'}}>*</b> */}
                        <b>For additional notes and special features. Please state below :D
                        </b>
                        <br/>
                    </div>
                    <div className='CWQ-1' name="FreeSizeTextInput">
                        {/* CWQ-2 */}
                        <TextField
                            id="filled-multiline-flexible"
                            label="Write here"
                            placeholder='- <Topic>: Explanation of the topic'
                            multiline
                            maxRows={8}
                            variant="filled"
                            value={form.additional_notes}
                            onChange={(event) => updateForm({ additional_notes: event.target.value })}
                            sx={{
                                minWidth: '100%',
                                fontFamily: 'NRL',
                                ...(isSmallScreen && {
                                    width: '100%',
                                    maxWidth: '100%',
                                }),
                            }}
                        />
                    </div>
                    <br/><br/>

                    {/* Data Picker Dropdown - Personal Data */}

                    <div className='CWQ-1' name="Description" style={{marginTop:'3vh', marginBottom:'1vh'}}>
                        {/* CWQ-1 */}
                        <b style={{color:'red'}}>*</b>
                        <b>Please pick one or more suitable data categories. If you are not sure, please ask your data protection officer. It is either Personal Data or Confidential Business Data or none of them..
                        </b>
                        <br/>
                    </div>
                    <div className='CWQ-1' name="Personal Data Dropdown">
                        {/* CWQ-2 */}
                        <FormControl 
                            sx={{ m: 1, width: 470 }}
                        >
                            <InputLabel id="demo-multiple-chip-label">Personal Data Categories</InputLabel>
                            <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            input={
                                <OutlinedInput 
                                    id="select-multiple-chip" 
                                    label="Personal Data Categories"
                                    value={form.personal_data_cat}
                                    onChange={handleChange}
                                />
                            }
                            renderValue={(selected) => (
                                <Box 
                                sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
                                >
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}

                                    style={getStyles(name, dataCat, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <br/>

                    {/* Data Picker Dropdown - Confitential Business Data */}
                    <div className='CWQ-1' name="Description" style={{marginTop:'1vh', marginBottom:'1vh'}}>
                        {/* CWQ-1 */}
                        {/* <b style={{color:'red'}}>*</b> */}
                        {/* <b>Please pick one or more suitable data categories */}
                        {/* </b> */}
                        {/* <br/><br/> */}
                    </div>
                    <div className='CWQ-1' name="Confidential Business Data Dropdown">
                    <FormControl sx={{ m: 1, width: 470 }} >
                        <InputLabel id="demo-multiple-chip-label">Confidential Business Data Categories</InputLabel>
                        <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        input={<OutlinedInput 
                            id="select-multiple-chip" 
                            label="Confidential Business Data Categories"
                            value={form.confidential_business_data_cat}
                            onChange={handleChange1}
                            />}
                        renderValue={(selected) => (
                            <Box 
                            sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
                            >
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                        >
                            {names1.map((name) => (
                                <MenuItem
                                key={name}
                                value={name}
                                style={getStyles1(name, confBus, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select> 
                    </FormControl>
                    </div>
                    <br/>

                    {/* Checkbox - None of the above */}

                    <div className='CWQ-1' name="Description" style={{marginTop:'0vh'}}>
                        &nbsp;&nbsp;
                            <FormControlLabel 
                                control={
                                    <Checkbox
                                        value={form.no_data_cat}
                                        onChange={handleChecked}
                                    />
                                }   
                                label="None of the above" 
                            />  
                    </div>



                    {/* Login SECTION */}
                    {/* Checkbox - Usertype */}
                    <div className='CWQ-1' name="Description" style={{marginTop:'3vh', marginBottom:'1vh'}}>
                        {/* CWQ-1 */}
                        <b style={{color:'red'}}>*</b>
                        <b>What kind of user are you?</b>
                        {/* <br/><br/> */}
                    </div>
                    <div className='CWQ-1' name="Checkboxes">
                        {/* <FormControlLabel control={<Checkbox />} label="Admin" /> */}
                        {/* <FormControlLabel control={<Checkbox />} label="User" /> */}
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl sx={{ width: 160}}>
                                <InputLabel id="demo-simple-select-label">Admin or User?</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label='Yes or No'
                                required
                                defaultValue='User'
                                input={
                                    <OutlinedInput 
                                        id="select-multiple-chip" 
                                        label="Yes or No"
                                        value={form.userkind}
                                        onChange={(event) => updateForm({ userkind: event.target.value })}
                                    />
                                }
                                >
                                    <MenuItem value={'Admin'}>Admin</MenuItem>
                                    <MenuItem value={'User'}>User</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <br/>

                    {/* Question: Multiple users? */}

                    <div className='CWQ-1' name="Description" style={{marginTop:'3vh', marginBottom:'1vh'}}>
                        {/* CWQ-1 */}
                        <b style={{color:'red'}}>*</b>
                        <b>Do you use this as a shared user account with other colleaugues?</b>
                        <br/> 
                    </div>
                    <div className='CWQ-1' name="Checkboxes">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl sx={{ width: 160}}>
                                <InputLabel id="demo-simple-select-label">Yes or No</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                required
                                label='Yes or No'
                                input={
                                    <OutlinedInput 
                                        id="select-multiple-chip" 
                                        label="Yes or No"
                                        value={form.shared_user}
                                        onChange={(event) => updateForm({ shared_user: event.target.value })}
                                    />
                                }
                                >
                                    <MenuItem value={'Yes'}>Yes</MenuItem>
                                    <MenuItem value={'No'}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <br/>

                    {/* Define User Credentials */}

                    <div className='CWQ-1' name="Description" style={{marginTop:'3vh', marginBottom:'1vh'}}>
                        {/* CWQ-1 */}
                        <b style={{color:'red'}}>*</b>
                        <b>Please describe your user-credentials<br/>
                        <i>Username, E-Mail or other... / Password-length</i>
                        </b>
                        <br/> 
                    </div>
                    <div className='CWQ-1' name="FreeSizeTextInput">
                        {/* CWQ-1 */}
                        <TextField
                            id="filled-multiline-flexible"
                            label="Write here"
                            placeholder='- Describe your credentials here'
                            multiline
                            required
                            maxRows={2}
                            variant="filled"
                            value={form.usercred}
                            onChange={(event) => updateForm({ usercred: event.target.value })}
                            sx={{
                                minWidth: '100%',
                                ...(isSmallScreen && {
                                    width: '100%',
                                    maxWidth: '100%',
                                }),
                            }}
                        />
                    </div>
                    <br/><br/>

                    {/* Question: Password Complexity? */}
                    <div className='CWQ-1' name="Description" style={{marginTop:'3vh', marginBottom:'1vh'}}>
                        {/* CWQ-1 */}
                        <b style={{color:'red'}}>*</b>
                        <b>How complex is your password?</b>
                        <br/>
                    </div>
                    <div className='CWQ-1' name="Checkboxes">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl sx={{ width: 160}}>
                                <InputLabel id="demo-simple-select-label">View Choices</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label='View Choices'
                                required
                                defaultValue='User'
                                input={
                                    <OutlinedInput 
                                        id="select-multiple-chip"
                                        label="View Choices"
                                        value={form.password_complex}
                                        onChange={(event) => updateForm({ password_complex: event.target.value })}
                                    />
                                }
                                >
                                    <MenuItem value={'Very Complex'}>Very Complex</MenuItem>
                                    <MenuItem value={'Complex'}>Complex</MenuItem>
                                    <MenuItem value={'Simple'}>Simple</MenuItem>
                                    <MenuItem value={'Very Simple'}>Very Simple</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <br/><br/>

                    {/* Option MFA? */}

                    <div className='CWQ-1' name="MFA" style={{marginTop:'3vh', marginBottom:'1vh'}}>
                        {/* CWQ-1 */}
                        <b style={{color:'red'}}>*</b>
                        <b>Is there an option for a second factor authentication?</b>
                        <br/>
                    </div>
                    <div className='CWQ-1' name="Checkboxes">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl sx={{ width: 160}}>
                                <InputLabel id="demo-simple-select-label">Yes or No</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label='Yes or No'
                                required
                                input={
                                    <OutlinedInput 
                                        id="select-multiple-chip"
                                        label="Yes or No"
                                        value={form.mfa_opt}
                                        onChange={(event) => updateForm({ mfa_opt: event.target.value })}
                                    />
                                }
                                >
                                    <MenuItem value={'Yes'}>Yes</MenuItem>
                                    <MenuItem value={'No'}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <br/><br/>

                    {/* Use MFA? */}

                    <div className='CWQ-1' name="MFA" style={{marginTop:'3vh', marginBottom:'1vh'}}>
                        {/* CWQ-1 */}
                        <b style={{color:'red'}}>*</b>
                        <b>Do you use a second factor authentication?</b>
                        <br/>
                    </div>
                    <div className='CWQ-1' name="Checkboxes">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl sx={{ width: 160}}>
                                <InputLabel id="demo-simple-select-label">Yes or No</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label='Yes or No'
                                required
                                input={
                                    <OutlinedInput
                                        id="select-multiple-chip"
                                        label="Yes or No"
                                        value={form.mfa_use}
                                        onChange={(event) => updateForm({ mfa_use: event.target.value })}
                                    />
                                }
                                >
                                    <MenuItem value={'Yes'}>Yes</MenuItem>
                                    <MenuItem value={'No'}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                            <TextField 
                                id="outlined-basic" 
                                label="Whats the name?" 
                                variant="standard"
                                required 
                                placeholder='­Microsoft Azure SSO, SMS, E-Mail, Code'
                                value={form.mfa_name}
                                onChange={(event) => updateForm({ mfa_name: event.target.value })}
                                sx={{minWidth:'30%'}}
                            />
                    </div>


                    {/* Password Change Cycle? */}

                    <div className='CWQ-1' name="Description" style={{marginTop:'3vh', marginBottom:'1vh'}}>
                        {/* CWQ-1 */}
                        <b style={{color:'red'}}>*</b>
                        <b>How often do you change your password in a year?</b>
                        <br/>
                    </div>
                    <div className='CWQ-1' name="Checkboxes">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl sx={{ width: 160}}>
                                <InputLabel id="demo-simple-select-label">View Choices</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label='View Choices'
                                required
                                defaultValue='User'
                                input={
                                    <OutlinedInput
                                        id="select-multiple-chip"
                                        label="View Choices"
                                        value={form.passwd_change}
                                        onChange={(event) => updateForm({ passwd_change: event.target.value })}
                                    />
                                }
                                >
                                    <MenuItem value={'Every 90 days'}>Every 90 days</MenuItem>
                                    <MenuItem value={'Twice a year'}>Twice a year</MenuItem>
                                    <MenuItem value={'Once a year'}>Once a year</MenuItem>
                                    <MenuItem value={'Never'}>Never</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    {/* Use Passwordmanager? */}

                    <div className='CWQ-1' name="Description" style={{marginTop:'3vh', marginBottom:'1vh'}}>
                        {/* CWQ-1 */}
                        <b style={{color:'red'}}>*</b>
                        <b>Do you use a Password Manager?</b>
                        <br/>
                    </div>
                    <div className='CWQ-1' name="Checkboxes">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl sx={{ width: 160}}>
                                <InputLabel id="demo-simple-select-label">Yes or No?</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label='Yes or No'
                                required
                                input={
                                    <OutlinedInput
                                        id="select-multiple-chip"
                                        label="Yes or No"
                                        value={form.passwdmng_use}
                                        onChange={(event) => updateForm({ passwdmng_use: event.target.value })}
                                    />
                                }
                                >
                                    <MenuItem value={'Yes'}>Yes</MenuItem>
                                    <MenuItem value={'No'}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                            <TextField 
                                id="outlined-basic" 
                                label="Whats the name?" 
                                variant="standard"
                                required
                                placeholder='Keepass, Lastpass, 1Password, Bitwarden'
                                sx={{minWidth:'30%'}}
                                value={form.passwdmg_name}
                                onChange={(event) => updateForm({ passwdmg_name: event.target.value })}
                            />
                    </div>
                    {/* Checkbox to confirm the correctness of the provided information */}
                    
                    <div className='CWQ-1' name="Description" style={{marginTop:'3vh'}}>
                        {/* CWQ-1 */}
                        <b style={{color:'red'}}>*</b>
                        <b>By submitting this form, I confirm that the information provided is correct.</b>
                        <br/>
                    </div>
                    <div className='CWQ-1' name="Checkboxes">
                            <FormControlLabel 
                                name='confirm_terms' 
                                control={
                                    <Checkbox 
                                        required
                                        value={form.submForm}
                                        onChange={handleFormed}
                                    />
                                } 
                                label="Yes" 
                                />
                    </div>
                    <br/><br/>
                    <a href="/faq" style={{ cursor:"pointer" }}>Click here to see the FAQs</a>
                    {/* Submit Button */}
                    <div className='CWQ-1' name="SubmitButton" style={{marginTop:'3vh'}}>
                        <button 
                            className='SSO'
                            style={{minWidth: '20%', maxWidth:'70%', width:'20%'}}
                            type='submit'
                            onSubmit={onSubmit}
                        >
                            Submit
                        </button>
                    </div>
                    <br/><br/>
                </div>
            </div>
        </form>
    );
}

export default Quest;