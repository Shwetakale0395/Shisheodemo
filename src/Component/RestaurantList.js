import React, { Component } from "react";
import offer from "../Icons/offer.svg";
import {
  Grid,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  withStyles,
} from "@material-ui/core/";
import Rating from "@material-ui/lab/Rating";

class RestaurantList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    const restaurants = this.props.restaurants;
    const listItems = restaurants.map((restro) => (
      <Grid item xs={12} md={4} lg={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={restro.restoimg}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Grid container>
                <Grid item xs={7} sm={7}>
                  <Typography>
                    <Box fontWeight="fontWeightBold" fontSize={18}>
                      {restro.RestaurantName}
                    </Box>
                  </Typography>
                </Grid>
                <Grid
                  xs={5}
                  sm={5}
                  item
                  container
                  direction="column"
                  alignItems="flex-end"
                  justify="flex-start"
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={restro.AggregateRating}
                    precision={0.5}
                    readOnly
                  />
                </Grid>
                <Grid item xs={7} sm={7}>
                  <Typography component="p">{restro.Address}</Typography>
                </Grid>
                <Grid
                  xs={5}
                  sm={5}
                  item
                  container
                  direction="column"
                  alignItems="flex-end"
                  justify="flex-start"
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Delivery with {restro.DeliveryTime} Min
                  </Typography>
                </Grid>
                <Grid item xs={7} sm={7}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Delivery: {restro.Cost} AED
                  </Typography>
                </Grid>
                <Grid
                  xs={5}
                  sm={5}
                  item
                  container
                  direction="column"
                  alignItems="flex-end"
                  justify="flex-start"
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {restro.PaymentMethod}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <WhiteTextTypography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    m={1}
                  >
                    <img src={offer} width="16" height="16" />
                    &nbsp;{restro.Off}% Off Selected items
                  </WhiteTextTypography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </Grid>
    ));
    return (
      <Grid container spacing={3}>
        {listItems}
      </Grid>
    );
  }
}

const styles = {
  media: {
    height: 0,
    paddingTop: "56.25%",
    marginTop: "30",
    borderRadius: "8%",
  },
};
const WhiteTextTypography = withStyles({
  root: {
    color: "#32bfc9",
  },
})(Typography);
export default withStyles(styles)(RestaurantList);
