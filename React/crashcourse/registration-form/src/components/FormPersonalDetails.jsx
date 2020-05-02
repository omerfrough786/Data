import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const FormPersonalDetails = props=> {


    const { values, handleChange , nextStep, prevStep} = props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter Personal Details' />
          <TextField
            hintText='Enter Your Occupation' //placeHolder
            floatingLabelText='Occupation' // label
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText='Enter Your City' //placeHolder
            floatingLabelText='City' // label
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText='Enter Your Bio' //placeHolder
            floatingLabelText='Bio' // label
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label='Continue'
            color='primary'
            style={style.button}
            onClick={nextStep}
          />
          <RaisedButton
            label='Back'
            color='secondary'
            style={style.button}
            onClick={prevStep}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  
}
const style = {
  button: {
    margin: 15
  }
};
export default FormPersonalDetails;
