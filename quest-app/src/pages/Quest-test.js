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