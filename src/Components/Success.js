import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme();

const styles = {
  header: {
    fontFamily: 'Poppins, sans-serif', // Change the font family as needed
    color: 'black', // Change the font color
  },
  paragraph: {
    fontFamily: 'Poppins, sans-serif', // Change the font family as needed
    fontStyle: 'bold',  // Add other styling properties as needed
    color: 'black',
  },
};

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <Dialog open fullWidth maxWidth='sm'>
            <AppBar title="Success" />
            <h1 style={styles.header}>Thank You For Your Submission</h1>
            <p style={styles.paragraph}>You will get an email with further instructions.</p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
