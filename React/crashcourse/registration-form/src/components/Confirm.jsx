import React, { Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


const Confirm = props => {


    const {
      values: { firstName, lastName, email, occupation, city, bio },
      nextStep, prevStep
    } = props;
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title='Confirm Your Details' />
          <List>
            <ListItem primaryText='First Name' secondaryText={firstName} />
            <ListItem primaryText='Last Name' secondaryText={lastName} />
            <ListItem primaryText='Email' secondaryText={email} />
            <ListItem primaryText='Occupation' secondaryText={occupation} />
            <ListItem primaryText='City' secondaryText={city} />
            <ListItem primaryText='Bio' secondaryText={bio} />
          </List>
          <br />
          <RaisedButton
            label='Confirm'
            primary={true}
            variant='contained'
            //style={style.button}
            onClick={nextStep}
          />
          <RaisedButton
            label='Back'
            primary={false}
            variant='contained'
            //style={style.button}
            onClick={prevStep}
          />
        </Fragment>
      </MuiThemeProvider>
    );
  
}
// const style = {
//     button:{
//         margin:15
//     }
// }
export default Confirm;
