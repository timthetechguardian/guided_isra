import React from 'react';
import './../Main.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

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

//Script for last Checkbox
document.addEventListener('DOMContentLoaded', function() {
    const prepayForm = document.getElementById('prepay');
    prepayForm.addEventListener('submit', function(event) {
        const confirmTermsCheckbox = document.querySelector('form#prepay input[name=confirm_terms]');
        if (confirmTermsCheckbox.checked) {
            return true;
        } else {
            const confirmTermsHint = document.getElementById('confirm_terms_hint');
            confirmTermsHint.textContent = 'Please try again - you need to check the box to move on';
            confirmTermsHint.style.fontWeight = 'bold';
            event.preventDefault();
            return false;
        }
    });
});

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
function Quest() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    // Personal Data Dropdown
    const [dataCat, setdataCat] = React.useState([]);

    // Confidential Business Data Dropdown
    const [confBus, setconfBus] = React.useState([]);

    // Checkbox - Usertype
    const [state, setState] = React.useState({
        admin: true,
        user: false,
      });

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

    // Handle Checkbox - Usertype
    const handleChange2 = (event) => {
        setState({ ...state, 
            [event.target.name]: event.target.checked,
         });
      };

    // Variables for Checkbox - Usertype, Admin and User, Only one can be selected
    const { admin, user } = state;
    const error = [admin, user].filter((v) => v).length !== 1;

    return(
        // Parent Wrapper Quest
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

                <div className='CWQ-1' name="Description">
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

                {/* Question */}
                
                <div className='CWQ-1' name="Description">
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

                <div className='CWQ-1' name="Description">
                    {/* CWQ-1 */}
                    <b style={{color:'red'}}>*</b>
                    <b>Please pick one or more suitable data categories. If you are not sure, please ask your data protection officer. It is either Personal Data or Confidential Business Data or none of them..
                    </b>
                    <br/>
                </div>
                <div className='CWQ-1' name="Personal Data Dropdown">
                    {/* CWQ-2 */}
                    <FormControl sx={{ m: 1, width: 470 }}>
                        <InputLabel id="demo-multiple-chip-label">Personal Data Categories</InputLabel>
                        <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={dataCat}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Personal Data Categories" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
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
                <div className='CWQ-1' name="Description">
                    {/* CWQ-1 */}
                    {/* <b style={{color:'red'}}>*</b> */}
                    {/* <b>Please pick one or more suitable data categories */}
                    {/* </b> */}
                    {/* <br/><br/> */}
                </div>
                <div className='CWQ-1' name="Confidential Business Data Dropdown">
                <FormControl sx={{ m: 1, width: 470 }}>
                    <InputLabel id="demo-multiple-chip-label">Confidential Business Data Categories</InputLabel>
                    <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={confBus}
                    onChange={handleChange1}
                    input={<OutlinedInput id="select-multiple-chip" label="Confidential Business Data Categories" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
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

                {/* Ckeckbox - None of the above */}

                <div className='CWQ-1' name="Description">
                    &nbsp;<FormControlLabel required control={<Checkbox />} label="None of the above" />  
                </div>
                <br/>

                {/* Login SECTION */}
                {/* Checkbox - Usertype */}
                <div className='CWQ-1' name="Description">
                    {/* CWQ-1 */}
                    <b style={{color:'red'}}>*</b>
                    <b>What kind of user are you?</b>
                    {/* <br/><br/> */}
                </div>
                <div className='CWQ-1' name="Checkboxes">
                    {/* <FormControlLabel control={<Checkbox />} label="Admin" /> */}
                    {/* <FormControlLabel control={<Checkbox />} label="User" /> */}
                    <FormControl
                        required
                        error={error}
                        component="fieldset"
                        sx={{ m: 2 }}
                        variant="standard"
                    >
                            <FormControlLabel
                                control={
                                <Checkbox checked={admin} onChange={handleChange2} name="admin" />
                                }
                                label="Admin"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={user} onChange={handleChange2} name="user" />
                                }
                                label="User"
                            />                            
                        <FormHelperText>You can only select one</FormHelperText>
                    </FormControl>
                </div>
                <br/>

                {/* Question: Multiple users? */}

                <div className='CWQ-1' name="Description">
                    {/* CWQ-1 */}
                    <b style={{color:'red'}}>*</b>
                    <b>Do you use this as a shared user account with other colleaugues?</b>
                    <br/> 
                </div>
                <div className='CWQ-1' name="Checkboxes">
                        <FormControlLabel control={<Checkbox />} label="Yes" />  
                        <FormControlLabel control={<Checkbox />} label="No" />
                </div>
                <br/>

                {/* Define User Credentials */}

                <div className='CWQ-1' name="Description">
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
                <div className='CWQ-1' name="Description">
                    {/* CWQ-1 */}
                    <b style={{color:'red'}}>*</b>
                    <b>How complex is your password?</b>
                    <br/>
                </div>
                <div className='CWQ-1' name="Checkboxes">
                        <FormControlLabel control={<Checkbox />} label="Very Complex" /> 
                        <FormControlLabel control={<Checkbox />} label="Complex" />
                        <FormControlLabel control={<Checkbox />} label="Simple" />
                        <FormControlLabel control={<Checkbox />} label="Very Simple" />
                </div>
                <br/><br/>

                {/* Option 2FA? */}

                <div className='CWQ-1' name="Description">
                    {/* CWQ-1 */}
                    <b style={{color:'red'}}>*</b>
                    <b>Is there an option for a second factor authentication?</b>
                    <br/>
                </div>
                <div className='CWQ-1' name="Checkboxes">
                        <FormControlLabel control={<Checkbox />} label="Yes" />  
                        <FormControlLabel control={<Checkbox />} label="No" />
                </div>
                <br/><br/>

                {/* Use 2FA? */}

                <div className='CWQ-1' name="Description">
                    {/* CWQ-1 */}
                    <b style={{color:'red'}}>*</b>
                    <b>Do you use a second factor authentication?</b>
                    <br/>
                </div>
                <div className='CWQ-1' name="Checkboxes">
                        <FormControlLabel control={<Checkbox />} label="Yes"/>
                        <FormControlLabel control={<Checkbox />} label="No" />
                        <br/>
                        <TextField 
                            id="outlined-basic" 
                            label="Whats the name?" 
                            variant="standard" 
                            placeholder='­Microsoft Azure SSO, SMS, E-Mail, Code'
                            sx={{minWidth:'30%'}}
                        />
                </div>
                <br/><br/>


                {/* Password Change Cycle? */}

                <div className='CWQ-1' name="Description">
                    {/* CWQ-1 */}
                    <b style={{color:'red'}}>*</b>
                    <b>How often do you change your password in a year?</b>
                    <br/>
                </div>
                <div className='CWQ-1' name="Checkboxes">
                        <FormControlLabel control={<Checkbox />} label="Every 90 days" />  
                        <FormControlLabel control={<Checkbox />} label="Twice a year" />
                        <FormControlLabel control={<Checkbox />} label="Once a year" />
                        <FormControlLabel control={<Checkbox />} label="Never" />
                </div>
                <br/><br/>

                {/* Use Passwordmanager? */}

                <div className='CWQ-1' name="Description">
                    {/* CWQ-1 */}
                    <b style={{color:'red'}}>*</b>
                    <b>Do you use a Password Manager?</b>
                    <br/>
                </div>
                <div className='CWQ-1' name="Checkboxes">
                        <FormControlLabel control={<Checkbox />} label="Yes"/>
                        <FormControlLabel control={<Checkbox />} label="No" />
                        <br/>
                        <TextField 
                            id="outlined-basic" 
                            label="Whats the name?" 
                            variant="standard" 
                            placeholder='Keepass, Lastpass, 1Password, Bitwarden'
                            sx={{minWidth:'30%'}}
                        />
                </div>
                <br/><br/>

                {/* Checkbox to confirm the correctness of the provided information */}

                <div className='CWQ-1' name="Description">
                    {/* CWQ-1 */}
                    <b style={{color:'red'}}>*</b>
                    <b>By submitting this form, I confirm that the information provided is correct.</b>
                    <br/>
                </div>
                <div className='CWQ-1' name="Checkboxes">
                        <FormControlLabel name='confirm_terms' required control={<Checkbox />} label="Yes" />
                </div>
                <br/><br/>

                {/* Submit Button */}
                <div className='CWQ-1' name="SubmitButton">
                    <button 
                        className='SSO'
                        style={{minWidth: '20%', maxWidth:'70%', width:'20%'}}
                    >
                        Submit
                    </button>
                </div>
                <br/><br/>


            </div>
        </div>
    );
}

export default Quest;