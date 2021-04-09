import './App.css';
import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Cover from './cover.js';
import sedanactive from './src1/images/ola-prime-sedan-active.svg';
import suvactive from './src1/images/ola-prime-suv-active.svg';
import autoactive from './src1/images/ola-auto-active.svg';
import bike from './src1/images/ola-bike.svg';
import bikeactive from './src1/images/ola-bike-active.svg';
import share from './src1/images/ola-share.svg';
import shareactive from './src1/images/ola-share-active.svg';
import micro from './src1/images/ola-micro.svg';
import microactive from './src1/images/ola-micro-active.svg';
import mini from './src1/images/ola-mini.svg';
import miniactive from './src1/images/ola-mini-active.svg';
import play from './src1/images/ola-prime-play.svg';
import playactive from './src1/images/ola-prime-play-active.svg';
import lux from './src1/images/ola-lux.svg';
import luxactive from './src1/images/ola-lux-active.svg';
import erick from './src1/images/ola-e-rick.svg';
import erickactive from './src1/images/ola-e-rick-active.svg';
import sedan from './src1/images/ola-prime-sedan.svg';
import suv from './src1/images/ola-prime-suv.svg';
import auto from './src1/images/auto.png';
import eco from './src1/images/eco-friendly.svg';
import value from './src1/images/value-money.svg';
import cashless from './src1/images/cashless.svg';
import playstore from './src1/images/playstore.png';
import appstore from './src1/images/appstore.png';
import windowstore from './src1/images/windowstore.png';
import olabook from './src1/images/ola-booking.png';
import olasupport from './src1/images/ola-support.svg';
import olasuccour from './src1/images/send_out_succour.svg';
import bestdriver from './src1/images/ola-best-driver.svg';
import Typography from '@material-ui/core/Typography';
import Occation from './occation';




function App() {
  return (
    <div className="App">

      <Header />

      <Cover />
      <Occation />


      <div className="olaride" style={{ marginTop: '30px' }}>
        <Typography variant="h2" style={{ fontSize: 36, fontWeight: 600, color: 'rgba(0, 0, 0, 0.92)', marginBottom: 5 }}>Why ride with Ola?</Typography>
        <lable style={{ fontSize: 18, fontWeight: 300, color: 'rgba(0, 0, 0, 0.92)', opacity: '0.5', display: 'block', lineHeight: '20px' }}>
          The best way to travel to your destination
    </lable>
        <div className="rideblock"style={{ marginTop: '30px' }}>
          <div className="innerrideblock">
            <div className="rideitem">
              <img style={{ maxHeight: 110 }} src="https://cms-web.olacabs.com/00000000368.jpg" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 10, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" style={{ fontSize: 24, fontWeight: 400, marginBottom: '10px', color: '#000000' }}>
                  Cabs for Every Pocket
            </Typography>
                <Typography variant="p" style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 300, lineHeight: '24px' }}>
                  From Sedans and SUVs to Luxury cars for <br />special occasions, we have cabs to suit
              every<br /> pocket
            </Typography>
              </div>
            </div>
            <div className="rideitem">
              <img style={{ maxHeight: 110 }} src="https://cms-web.olacabs.com/00000000370.jpg" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 10, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" style={{ fontSize: 24, fontWeight: 400, marginBottom: '10px', color: '#000000' }}>
                  Secure and Safer Rides
            </Typography>
                <Typography variant="p" style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 300, lineHeight: '24px' }}>
                  Verified drivers, an emergency alert button, and live ride tracking are some of the features
                  that we have in place to ensure you a safe travel experience.
            </Typography>
              </div>
            </div>
          </div>
          <div className="innerrideblock">
            <div className="rideitem">
              <img style={{ maxHeight: 110 }} src="https://cms-web.olacabs.com/00000000374.jpg" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 10, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" style={{ fontSize: 24, fontWeight: 400, marginBottom: '10px', color: '#000000' }}>
                  Ola Select
            </Typography>
                <Typography variant="p" style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 300, lineHeight: '24px' }}>
                  A membership program with Ola that lets you ride a Prime Sedan at Mini fares, book cabs
                  without peak pricing and has zero wait time
            </Typography>
              </div>
            </div>
            <div className="rideitem">
              <img style={{ maxHeight: 110 }} src="https://cms-web.olacabs.com/00000000371.jpg" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 10, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" style={{ fontSize: 24, fontWeight: 400, marginBottom: '10px', color: '#000000' }}>
                  In Cab Entertainment
            </Typography>
                <Typography variant="p" style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 300, lineHeight: '24px' }}>
                  Play music, watch videos and a lot more with Ola Play! Also stay connected even if you are
                  travelling through poor network areas with our free wifi facility.
            </Typography>
              </div>
            </div>
          </div>
          <div className="innerrideblock">
            <div className="rideitem">
              <img style={{ maxHeight: 110 }} src="https://cms-web.olacabs.com/00000000382.jpg" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 10, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" style={{ fontSize: 24, fontWeight: 400, marginBottom: '10px', color: '#000000' }}>
                  Share and Express
            </Typography>
                <Typography variant="p" style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 300, lineHeight: '24px' }}>
                  To travel with the lowest fares choose Ola Share. For a faster travel experience we have
                  Share Express on some fixed routes with zero deviations. Choose your ride and zoom away!
            </Typography>
              </div>
            </div>
            <div className="rideitem">
              <img style={{ maxHeight: 110 }} src="https://cms-web.olacabs.com/00000000372.jpg" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 10, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" style={{ fontSize: 24, fontWeight: 400, marginBottom: '10px', color: '#000000' }}>
                  Cashless Rides
            </Typography>
                <Typography variant="p" style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 300, lineHeight: '24px' }}>
                  Now go cashless and travel easy. Simply recharge your Ola money or add your credit/debit
                  card to enjoy hassle free payments.
            </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fleet"style={{marginTop:'20px'}}>
        <Typography variant="h2" style={{ fontSize: 36, fontWeight: 600, color: 'rgba(0, 0, 0, 0.92)', marginBottom: 5 }}>Meet our Awesome Fleet</Typography>
        <lable style={{ fontSize: 18, fontWeight: 300, color: 'rgba(0, 0, 0, 0.92)', opacity: '0.5', display: 'block', lineHeight: '20px' }}>
        The widest variety of cars to choose from</lable>
        <div className="taxitype">
          <div className="taxiitem">
            <div className="taxicircle rollover" style={{ backgroundColor: '#CDDC39' }}>
              <img src={autoactive} />
            </div>
            <Typography variant="body1">Auto</Typography>
          </div>
          <div className="taxiitem">
            <div className="taxicircle rollover">
              <img className="normalimg" src={bike} />
              <img className="activeimg" src={bikeactive} />
            </div>
            <Typography variant="body1">Bike</Typography>
          </div>
          <div className="taxiitem">
            <div className="taxicircle rollover">
              <img className="normalimg" src={share} />
              <img className="activeimg" src={shareactive} />
            </div>
            <Typography variant="body1">Share</Typography>
          </div>
          <div className="taxiitem">
            <div className="taxicircle rollover">
              <img className="normalimg" src={micro} />
              <img className="activeimg" src={microactive} />
            </div>
            <Typography variant="body1">Micro</Typography>
          </div>
          <div className="taxiitem">
            <div className="taxicircle rollover">
              <img className="normalimg" src={mini} />
              <img className="activeimg" src={miniactive} />
            </div>
            <Typography variant="body1">Mini</Typography>
          </div>
          <div className="taxiitem">
            <div className="taxicircle rollover">
              <img className="normalimg" src={sedan} />
              <img className="activeimg" src={sedanactive} />
            </div>
            <Typography variant="body1">Prime Sedan</Typography>
          </div>
          <div className="taxiitem">
            <div className="taxicircle rollover">
              <img className="normalimg" src={play} />
              <img className="activeimg" src={playactive} />
            </div>
            <Typography variant="body1">Prime Play</Typography>
          </div>
          <div className="taxiitem">
            <div className="taxicircle rollover">
              <img className="normalimg" style={{ paddingTop: 30 }} src={suv} />
              <img className="activeimg" style={{ paddingTop: 30 }} src={suvactive} />
            </div>
            <Typography variant="body1">Prime SUV</Typography>
          </div>
          <div className="taxiitem">
            <div className="taxicircle rollover">
              <img className="normalimg" src={lux} />
              <img className="activeimg" src={luxactive} />
            </div>
            <Typography variant="body1">LUX</Typography>
          </div>
          <div className="taxiitem">
            <div className="taxicircle rollover">
              <img className="normalimg" src={erick} />
              <img className="activeimg" src={erickactive} />
            </div>
            <Typography variant="body1">E-Rick</Typography>
          </div>
        </div>
      </div>

      <div className="autobox">
        <div className="boxitem">
          <img className="autoimg" src={auto} />
          <div className="boxtxt">
            <Typography variant="h4" style={{ fontWeight: 600, fontSize: 34, marginBottom: 5 }}>Auto</Typography>
            <Typography variant="p" style={{ fontWeight: 400, marginBottom: 10, fontSize: 18 }}>Get an Auto at your doorstep</Typography>
            <Typography variant="p" style={{ fontWeight: 300, marginTop: 20, marginBottom: 20, lineHeight: '24px', width: '80%', fontSize: 16 }}>
              The all too familiar auto ride, minus the hassle <br />of waiting and haggling for price. A convenient
          way to travel everyday.
        </Typography>
            <div className="carfeature">
              <img src={eco} />
              <img src={value} />
              <img src={cashless} />
            </div>
          </div>
        </div>
      </div>

      <div className="autobox">
        <div className="boxitem" style={{ padding: 100 }}>
          <div className="boxtxt">
            <Typography variant="h2" style={{ fontWeight: 600, fontSize: 34, marginBottom: 5 }}>Book an Ola from the App</Typography>
            <Typography variant="p" style={{ fontWeight: 400, marginBottom: 10, fontSize: 18 }}>Download the app for exclusive deals and ease of booking</Typography>
            <div className="carfeature1">
              <img src={playstore} />
              <img src={appstore} />
              <img src={windowstore} />
            </div>
          </div>
          <img style={{ width: '35%', height: '100%' }} src={olabook} />
        </div>
      </div>

      <div className="ola-feature">
        <div className="feature-item">
          <img style={{ width: 45, padding: 10 }} src={olasupport} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h2" style={{ fontSize: 18, fontWeight: 400, color: '#000000', marginBottom: 2 }}>24/7 Customer Support</Typography>
            <Typography variant="p" style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.6)', lineHeight: '24px', fontWeight: 300 }}>A dedicated 24x7 customer<br />
          support team always at your<br />
          service to help solve any problem</Typography>
          </div>
        </div>
        <div className="feature-item">
          <img style={{ width: 45, padding: 10 }} src={olasuccour} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h2" style={{ fontSize: 18, fontWeight: 400, color: '#000000', marginBottom: 2 }}>Your Safety First</Typography>
            <Typography variant="p" style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.6)', lineHeight: '24px', fontWeight: 300 }}>Keep your loved ones informed<br />
          about your travel routes or call<br />
          emergency services when in need</Typography>
          </div>
        </div>
        <div className="feature-item">
          <img style={{ width: 45, padding: 10 }} src={bestdriver} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h2" style={{ fontSize: 18, fontWeight: 400, color: '#000000', marginBottom: 2 }}>Top Rated Driver-Partners</Typography>
            <Typography variant="p" style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.6)', lineHeight: '24px', fontWeight: 300 }}>All our driver-partners are<br />
          background verified and trained to<br />
          deliver only the best experience</Typography>
          </div>
        </div>
      </div>

      <Footer />



    </div>
  );
}

export default App;
