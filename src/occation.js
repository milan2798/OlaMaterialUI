import React from 'react';
import ct1 from './src1/images/ct_1.svg';
import ct2 from './src1/images/ct_2.svg';
import ct3 from './src1/images/ct_3.svg';
import os1 from './src1/images/os_1.svg';
import os2 from './src1/images/os_2.svg';
import os3 from './src1/images/os_3.svg';
import rn1 from './src1/images/rental_1.svg';
import rn2 from './src1/images/rental_2.svg';
import rn3 from './src1/images/rental_3.svg';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import sedanactive from './src1/images/ola-prime-sedan-active.svg';
import suvactive from './src1/images/ola-prime-suv-active.svg';
import outstation from './src1/images/ola-outstation-active.svg';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 240,
    },
});

function Occation() {
    const classes = useStyles();
    return (

        <div className="occation">
            <Typography variant="h2" style={{ fontSize: 36, fontWeight: 600, color: 'rgba(0, 0, 0, 0.92)', marginBottom: 5, display: 'block' }}>
                A car for every occasion
           </Typography>
            <lable style={{ fontSize: 18, fontWeight: 300, color: 'rgba(0, 0, 0, 0.92)', opacity: '0.5', display: 'block', lineHeight: '20px' }}>
                Ola offers city taxis, inter-city cabs, and local cabs at hourly packages
           </lable>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', flexWrap: 'wrap' }}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://cms-web.olacabs.com/00000000356.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent style={{ height: '200px' }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                City Taxi
                             </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{ padding: '10px' }}>
                                The perfect way to get through your everyday travel needs. City taxis are available 24/7
                                and you can book and travel in an instant. With rides starting from as low as Rs. 6/km,
                                you can choose from a wide range of options! You can also opt to do your bit for the
                                environment with Ola Share!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <img src={ct1} className="icon-holder" />
                           AC Cabs
                        </Button>
                        <Button size="small" color="primary">
                            <img src={ct2} className="icon-holder" />
                         Pocket Friendly
                        </Button>
                        <Button size="small" color="primary">
                            <img src={ct3} className="icon-holder" />
                         Cashless Rides
                        </Button>
                    </CardActions>
                  </Card>
                  <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://cms-web.olacabs.com/00000000357.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent style={{ height: '200px' }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Out Stations
                         </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{ padding: '10px' }}>
                                Ride out of town at affordable one-way and round-trip fares with Ola’s intercity travel
                                service. Choose from a range of AC cabs driven by top partners, available in 1 hour or
                                book upto 7 days in advance. We have you covered across India with presence in 90+
                                cities and more than that with over 500 one way routes.
                         </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <img src={os1} className="icon-holder" />
                        One Way Trip
                       </Button>
                        <Button size="small" color="primary">
                            <img src={os2} className="icon-holder" />
                         Advance Booking
                        </Button>
                        <Button size="small" color="primary">
                            <img src={os3} className="icon-holder" />
                        Safe Rides
                      </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://cms-web.olacabs.com/00000000380.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent style={{ height: '200px' }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Rentals
                             </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{ padding: '10px' }}>
                                Ride out of town at affordable one-way and round-trip fares with Ola’s intercity travel
                                service. Choose from a range of AC cabs driven by top partners, available in 1 hour or
                                book upto 7 days in advance. We have you covered across India with presence in 90+
                                cities and more than that with over 500 one way routes.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <img src={rn1} className="icon-holder" />
                           Packages
                       </Button>
                        <Button size="small" color="primary">
                            <img src={rn2} className="icon-holder" />
                         Stops
                       </Button>
                        <Button size="small" color="primary">
                            <img src={rn3} className="icon-holder" />
                         Rated Partner
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>

    );
}

export default Occation;