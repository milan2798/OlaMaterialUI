import React from 'react';
import logo from './src1/images/ola-logo.svg';
import Button from '@material-ui/core/Button';

function Header() {
    return (
        <div>
            {/* <!--booking--> */}
            <div class="booking">
                <div class="bookingtab">
                    <a style={{ background: "#CDDC39", borderRadius: "25px" }} href="#">CITY TAXI</a>
                    <a href="#">OUTSTATION</a>
                    <a href="#">RENTALS</a>
                </div>
            </div>
            {/* <!--header--> */}
            <div class="header">
                <div class="innerheader">
                    <div class="header1">
                        <a href="#">Drive with Ola</a>
                        <a href="#">Ola Money</a>
                        <a href="#">Ola Corporate</a>
                        <a href="#">Ola Foundation</a>
                        <a href="#">Share</a>
                        <a href="#">Offers</a>
                        <a href="#">Support</a>
                    </div>
                </div>
                <div class="menu">
                    <img src={logo} />
                    <div class="innerheader2">

                        <div class="header2" style={{ flex: 8 }}>
                            <a href="#">Ola Drive</a>
                            <a href="#">Ola Select</a>
                            <a href="#">Ola Fleet</a>
                            <a href="#">Features</a>
                            <Button variant="contained" color="primary">
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="highlightcolor"></div>

        </div>
    );
}
export default Header;