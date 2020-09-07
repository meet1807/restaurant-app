import React, { useState, useEffect } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Box,
  Button,
  TextField,
  ButtonGroup,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(1),

    "& > *": {
      // borderTopWidth: 1,
      // borderColor: "red",
      // borderStyle: "solid",
    },
  },
  img__detail: {
    width: "100%",
    height: 400,
    aspectRatio: "16/9",
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  control: {
    padding: theme.spacing(5),
  },
}));

const ItemDetails = ({ itemSelected, addToCart }) => {
  //const { itemSelected } = props.location.state;
  const [qty, setQty] = useState(0);
  const [enable, setEnable] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (qty > 0) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [qty]);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={6}>
        <Box>
          <img
            className={classes.img__detail}
            src={itemSelected.Image}
            alt={itemSelected.Name}
          />
        </Box>
      </Grid>

      <Grid
        item
        container
        direction="column"
        xs={10}
        sm={6}
        className={classes.control}
        style={{ display: "grid" }}
      >
        <Grid item>
          <Typography variant="subtitle1">
            Item : {itemSelected.Name}
          </Typography>
          <Typography variant="subtitle1">Description:</Typography>

          <Typography variant="body2">{itemSelected.Description}</Typography>
          <Typography variant="subtitle1" style={{ marginTop: "30px" }}>
            Price: {itemSelected.Price}
          </Typography>
        </Grid>
        <Grid item style={{ alignSelf: "end" }}>
          <Box component="div">
            <p>Qty:</p>
            <span>
              {/* {enable && (
                <button
                  onClick={() => {
                    setQty(qty - 1);
                  }}
                >
                  &ndash;
                </button>
              )} */}
              <TextField
                id="outlined-basic"
                value={qty}
                label="Quantity"
                variant="outlined"
                readOnly
              />
              <ButtonGroup
                className={classes.button}
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
              >
                <Button
                  onClick={() => {
                    setQty(qty + 1);
                  }}
                >
                  &#xff0b;
                </Button>
                {enable && (
                  <Button
                    style={{ marginTop: "5px" }}
                    onClick={() => {
                      setQty(qty - 1);
                    }}
                  >
                    &ndash;
                  </Button>
                )}
              </ButtonGroup>

              {/* <button
                onClick={() => {
                  setQty(qty + 1);
                }}
              >
                &#xff0b;
              </button> */}
            </span>
          </Box>

          <Button
            style={{ marginTop: "20px" }}
            variant="contained"
            disabled={!qty}
            color="primary"
            onClick={() => addToCart({ itemSelected, qty })}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ItemDetails;
