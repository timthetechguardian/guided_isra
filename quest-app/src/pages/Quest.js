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
import FormGroup from '@mui/material/FormGroup';
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
]

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


                {/* Question */}

                <div className='CWQ-1' name="Description">
                    {/* CWQ-1 */}
                    <b style={{color:'red'}}>*</b>
                    <b>Please make a list of use cases. They should answer the question: Why do you use this portal/program?</b>
                    <br/><br/>
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

                <br/>

                {/* Question */}
                
                <div className='CWQ-1' name="Description">
                    {/* CWQ-1 */}
                    {/* <b style={{color:'red'}}>*</b> */}
                    <b>For additional notes and special features. Please state below :D
                    </b>
                    <br/><br/>
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
                <br/>

                {/* Data Picker Dropdown - Personal Data */}

                <div className='CWQ-1' name="Description">
                    {/* CWQ-1 */}
                    <b style={{color:'red'}}>*</b>
                    <b>Please pick one or more suitable data categories. If you are not sure, please ask your data protection officer. It is either Personal Data or Confitential Business Data or none of them..
                    </b>
                    <br/><br/>
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
                    {/* <FormControlLabel control={<Checkbox />} label="Admin" />  */}
                    {/* <FormControlLabel control={<Checkbox />} label="User" /> */}
                    <FormControl
                        required
                        error={error}
                        component="fieldset"
                        sx={{ m: 3 }}
                        variant="standard"
                    >
                        <FormGroup>
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
                        </FormGroup>
                        <FormHelperText>You can only select one</FormHelperText>
                    </FormControl>
                </div>
            </div>
        </div>
    );
}

export default Quest;