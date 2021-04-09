import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const styles = {
    inputRoot: {
        fontSize: 10
    },
    labelRoot: {
        paddingLeft: '40px'
    }
}
function Cover({ classes }) {

    return (
        <div>
            <div className="cover">
                <img src="https://cms-web.olacabs.com/00000000383.jpg" />
                <div className="covertext">
                    <Typography variant="h4"  style={{ fontsize: "38px", color: "#ffffff", fontweight: "600", marginbottom: "10px", padding: "0 20px", position: "relative", zindex: "5" }}>
                        Book a City Taxi to your destination in town
                     </Typography>
                    <lable style={{ fontsize: "20px", color: "#ffffff", fontweight: "300", padding: "0 20px", position: "relative", zindex: "5" }}>Choose from a range of categories and prices</lable>
                </div>
            </div>
            <div className="location">
                <div style={{ fontSize: "16px", fontweight: "500", width: "80%", textAlign: "center" }}>Your everyday travel partner</div>
                <div style={{ fontSize: 14, fontWeight: 400, width: '80%', textAlign: 'center' }}>AC Cabs for point to point travel</div>
                <form noValidate autoComplete="off" style={{ marginLeft: '-25px' }}>

                    <TextField style={{ width: '90%' }} InputProps={{ classes: { root: classes.inputRoot } }}
                        InputLabelProps={{
                            classes: {
                                root: classes.labelRoot

                            }
                        }}
                        label="Current Location" variant="outlined" />



                    <TextField style={{ width: '90%' }} nputProps={{ classes: { root: classes.inputRoot } }}
                        InputLabelProps={{
                            classes: {
                                root: classes.labelRoot

                            }
                        }} label="Enter drop for ride estimate" variant="outlined" />



                    <TextField style={{ width: '90%' }} InputProps={{ classes: { root: classes.inputRoot } }}
                        InputLabelProps={{
                            classes: {
                                root: classes.labelRoot

                            }
                        }} label="WHEN " variant="outlined" />
          <Button variant="contained" color="primary" style={{ width: '90%',marginLeft:'30px' }}>
                    Search Cabs
                            </Button>

                </form>


               

            </div>

            <div className="feature">
                <button type="button" className="prev-btn" aria-disabled="true" />
                <div className="innerfeature">

                    <div className="nestedfeature">
                        <img style={{ width: '42px', height: '42px', paddingLeft: '25px' }} src="https://cms-web.olacabs.com/00000000360.jpeg" />
                        <div className="featuretxt">
                            <Typography variant="h4"style={{ marginBottom: '10px' }}>Upgrade to Ola select</Typography>
                            <Typography  variant="p">Explore the benefits of Ola Select</Typography>
                        </div>
                    </div>
                    <div className="nestedfeature">
                        <img style={{ width: '42px', height: '42px', paddingLeft: '25px' }} src="https://cms-web.olacabs.com/00000000361.jpeg" />
                        <div className="featuretxt">
                            <Typography variant="h4" style={{ marginBottom: '10px' }}>Be entertained with Ola Play</Typography>
                            <Typography  variant="p">Discover movies and music on your daily ride</Typography>
                        </div>
                    </div>
                    <div className="nestedfeature">
                        <img style={{ width: '42px', height: '42px', paddingLeft: '25px' }} src="https://cms-web.olacabs.com/00000000362.jpeg" />
                        <div className="featuretxt">
                            <Typography variant="h4" style={{ marginBottom: '10px' }}>Get yourself a Share Pass</Typography>
                            <Typography variant="p">Enjoy cheapest rides on the go</Typography>
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>
    );
}

export default withStyles(styles)(Cover);