import React, {useState} from 'react';
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

import { useForm } from 'react-hook-form';

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

    const callApi = (data) => {
        fetch('http://localhost:7071/api/space_runner', { method: 'POST' })
          .then(data => data.json()) // Parsing the data into a JavaScript object
          .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
          .catch(error => console.error(error)) // Catching errors

      }

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    // Personal Data Dropdown
    const [dataCat, setdataCat] = React.useState([]);

    // Confidential Business Data Dropdown
    const [confBus, setconfBus] = React.useState([]);

    // Multiple Users Dropdown
    const [usertype, setUsertype] = React.useState("");
    
    // Multiple Users Dropdown
    const [mult, setMult] = React.useState("");

    // Handle Password Complexity Dropdown
    const [passwCom, setPasswCom] = React.useState("");

    // Handle Option MFA Dropdown
    const [mfa, setMfa] = React.useState("");

    // Handle Use MFA Dropdown
    const [umfa, setUmfa] = React.useState("");

    // Handle Password Change Cycle Dropdown
    const [passwChange, setPasswChange] = React.useState("");

    // Handle Use Passwordmanager Dropdown
    const [passwManag, setPasswManag] = React.useState("");

    // React Hook Form
    const { 
        register, 
        handleSubmit, 
    } = useForm();
    const [data, setData] = useState("");

    // Handle Data Picker Dropdown - Personal Data
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setdataCat(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    // Handle Data Picker Dropdown - Confidential Business Data
    const handleChange1 = (event) => {
        const {
          target: { value },
        } = event;
        setconfBus(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      }

    // Handle User Type Dropdown
    const handleUsertype = (event) => {
        setUsertype(event.target.value);
        };

    // Handle Multiple Users Dropdown
    const handleMult = (event) => {
        setMult(event.target.value);
      };

    // Handle Password Complexity Dropdown
    const handlePasswCom = (event) => {
        setPasswCom(event.target.value);
      };

    // Handle Option MFA Dropdown
    const handleMfa = (event) => {
        setMfa(event.target.value);
      };

    // Handle Use MFA Dropdown
    const handleUmfa = (event) => {
        setUmfa(event.target.value);
      };    

    // Handle Password Change Cycle Dropdown
    const handlePasswChange = (event) => {
        setPasswChange(event.target.value);
      };

    // Handle Use Passwordmanager Dropdown
    const handlePasswManag = (event) => {
        setPasswManag(event.target.value);
      };

    return(
        // Parent Wrapper Quest
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
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
                            maxRows={8}
                            variant="filled"
                            {...register('description', { required: true, maxLength: 10.000, RegExp: /^[a-zA-Z0-9]+$/})}
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
                            {...register('features', { required: false, maxLength: 10.000, RegExp: /^[a-zA-Z0-9]+$/})}
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
                            value={dataCat}
                            onChange={handleChange}
                            input={<OutlinedInput id="select-multiple-chip" label="Personal Data Categories" {...register('pData')}/>}
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
                        value={confBus}
                        onChange={handleChange1}
                        input={<OutlinedInput 
                            id="select-multiple-chip" 
                            label="Confidential Business Data Categories"
                            {...register('cData')}
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
                        &nbsp;&nbsp;<FormControlLabel 
                                control={<Checkbox {...register('nData')}/>} 
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
                                value={usertype}
                                defaultValue='User'
                                onChange={handleUsertype}
                                input={<OutlinedInput id="select-multiple-chip" label="Yes or No" {...register('usertype')}/>}
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
                                label='Yes or No'
                                value={mult}
                                onChange={handleMult}
                                input={<OutlinedInput id="select-multiple-chip" label="Yes or No" {...register('sharedUser')}/>}
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
                            maxRows={2}
                            variant="filled"
                            {...register('usercred', { required: true, maxLength: 10.000, RegExp: /^[a-zA-Z0-9]+$/})}
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
                                value={passwCom}
                                defaultValue='User'
                                onChange={handlePasswCom}
                                input={<OutlinedInput id="select-multiple-chip" label="View Choices" {...register('password_complexity', {required: true})}/>}
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
                                value={mfa}
                                onChange={handleMfa}
                                input={<OutlinedInput id="select-multiple-chip" label="Yes or No" {...register('mfa_option', {required: true})}/>}
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
                                value={umfa}
                                onChange={handleUmfa}
                                input={<OutlinedInput id="select-multiple-chip" label="Yes or No" {...register('mfa', { required: true })}/>}
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
                                placeholder='­Microsoft Azure SSO, SMS, E-Mail, Code'
                                {...register('umfaExa')}
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
                                value={passwChange}
                                defaultValue='User'
                                onChange={handlePasswChange}
                                input={<OutlinedInput id="select-multiple-chip" label="View Choices" {...register('password_change', { required: true })}/>}
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
                                value={passwManag}
                                onChange={handlePasswManag}
                                input={<OutlinedInput id="select-multiple-chip" label="Yes or No" {...register('password_manager', { required: true })}/>}
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
                                placeholder='Keepass, Lastpass, 1Password, Bitwarden'
                                sx={{minWidth:'30%'}}
                                {...register('passwManagExa')}
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
                                required control={<Checkbox {...register('submForm', { required: true })}/>} 
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
                            onClick={handleSubmit({data}, callApi)}
                        >
                            Submit
                        </button>
                    </div>
                    <br/><br/>
                    {/* <p>{data}</p> */}
                </div>
            </div>
        </form>
    );
}

export default Quest;