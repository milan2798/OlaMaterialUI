import React from 'react';
import fb from './src1/images/fb-footer-icon.svg';
import yt from './src1/images/youtube-footer-icon.svg';
import insta from './src1/images/insta-footer-icon.svg';
import twitter from './src1/images/twitter-footer-icon.svg';
import indflag from './src1/images/india-flag-icon.png';
import footerlogo from './src1/images/footer-ola-logo.svg';
import Typography from '@material-ui/core/Typography';

function Footer() {

    return (
        <div>
            <div className="footer">
                <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                    <div className="footclass">
                        <Typography variant="p" style={{ fontWeight: 400, fontSize: 16, color: '#fff' }}>Top Visited Cities</Typography>
                    </div>
                    <div className="footclass" >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="p" style={{ fontWeight: 400, fontSize: 16, color: '#fff' }}>Popular Outstation Routes</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="p" style={{ fontWeight: 400, fontSize: 16, color: '#fff' }}>Northern India</Typography>
                                <Typography variant="body1">Delhi to Chandigarh Outstation Cabs</Typography>
                                <Typography variant="body1" >Delhi to Agra Outstation Cabs</Typography>
                                <Typography variant="body1" >Delhi to Jaipur Outstation Cabs</Typography>
                                <Typography variant="body1" >Delhi to Shimla Outstation Cabs</Typography>
                                <Typography variant="body1" >Delhi to Nainital Outstation Cabs</Typography>
                                <Typography variant="body1" >Jaipur to Delhi Outstation Cabs</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography style={{ fontWeight: 400, fontSize: 16, color: '#fff' }}>Southern India</Typography>
                                <Typography variant="body1">Chennai to Pondicherry Outstation Cabs</Typography>
                                <Typography variant="body1">Chennai to Tirupati Outstation Cabs</Typography>
                                <Typography variant="body1">Chennai to Vellore Outstation Cabs</Typography>
                                <Typography variant="body1">Hyderabad to Vijayawada Outstation Cabs</Typography>
                                <Typography variant="body1">Hyderabad to Warangal Outstation Cabs</Typography>
                                <Typography variant="body1">Hyderabad to Tirupati Outstation Cabs</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="p" style={{ fontWeight: 400, fontSize: 16, color: '#fff' }}>East &amp; West India</Typography>
                                <Typography variant="body1" Typography>Mumbai to Pune Outstation Cabs</Typography>
                                <Typography variant="body1">Mumbai to Mahabaleshwar Outstation Cabs</Typography>
                                <Typography variant="body1">Mumbai to Lonavala Outstation Cabs</Typography>
                                <Typography variant="body1">Mumbai to Nashik Outstation Cabs</Typography>
                                <Typography variant="body1">Mumbai to Matheran Outstation Cabs</Typography>
                                <Typography variant="body1">Mumbai to Shirdi Outstation Cabs</Typography>
                            </div>
                        </div>
                        <Typography variant="body1" style={{ textAlign: 'center' }}>+Expand more routes</Typography>
                    </div>
                    <div className="footclass" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="p" style={{ fontWeight: 400, fontSize: 16, color: '#fff' }}>Social links</Typography>
                        <div className="sociallink">
                            <img src={fb} />
                            <img src={insta} />
                            <img src={yt} />
                            <img src={twitter} />
                        </div>
                        <div style={{ display: 'flex', border: '1px solid white', padding: 5 }}>
                            <img style={{ padding: '10px 20px 10px 20px' }} src={indflag} />
                            <Typography variant="p" style={{ padding: 5, fontSize: 15 }}>india</Typography>
                        </div>
                    </div>
                    <div className="footclass" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="p" style={{ fontWeight: 400, fontSize: 16, color: '#fff' }}>Discover Ola</Typography>
                        <div style={{ display: 'flex' }}>
                            <Typography variant="body1"style={{ paddingRight: 10, color: '#ffff' }}>About Ola</Typography>
                            <Typography variant="body1" style={{ paddingRight: 10 }}>Careers</Typography>
                            <Typography variant="body1" style={{ paddingRight: 10 }}>Offers</Typography>
                            <Typography variant="body1" style={{ paddingRight: 10 }}>Contact us</Typography>
                            <Typography variant="body1" style={{ paddingRight: 10 }}>Media Center</Typography>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Typography variant="p" style={{ paddingRight: 10 }}>Become a driver</Typography>
                            <Typography variant="p" style={{ paddingRight: 10 }}>Book a ride</Typography>
                        </div>
                    </div>
                    <div className="footclass" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src={footerlogo} />
                        <div style={{ display: 'flex' }}>
                            <Typography variant="body1" style={{ paddingRight: 20 }}>Notices</Typography>
                            <Typography variant="body1" style={{ paddingRight: 20 }}>Terms &amp; Conditions</Typography>
                            <Typography variant="body1" style={{ paddingRight: 20 }}>Privacy Policy</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;