import React, { useState, useEffect } from "react";

import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  table__img: {
    width: 80,
    maxHeight: 60,
    aspectRatio: "16/9",
    marginLeft: 30,
  },
});

export default function Cart(props) {
  const [total, setTotal] = useState(0);
  const classes = useStyles();
  const cartItems = props.history.location.cart?.cartItems;
  //console.log(props.history.location.cart?.cartItems);
  useEffect(() => {
    const priceArray = cartItems?.map((item) => item.qty * item.price);
    setTotal(priceArray?.reduce((a, b) => a + b));
  }, [cartItems]);
  return (
    <Grid container justify="center">
      <Grid item xs={1} />
      <Grid item sm={10}>
        <p>There are {cartItems ? cartItems.length : 0} items in your cart!</p>
        {cartItems && (
          <div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell align="right">Image</TableCell>
                    <TableCell align="right">Qty</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell align="right">
                        <img
                          className={classes.table__img}
                          src={item.image}
                          alt=""
                        />
                      </TableCell>
                      <TableCell align="right">{item.qty}</TableCell>
                      <TableCell align="right">{item.price}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell>Total price: </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">{total}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              style={{
                marginTop: "20px",
              }}
              variant="outlined"
              color="secondary"
            >
              continue to payment
            </Button>
          </div>
        )}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}
