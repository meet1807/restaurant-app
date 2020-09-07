import React, { Component } from "react";
import Rowslider from "./common/Rowslider";
//import data from "./FakeData";
import Navbar from "./common/Navbar";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ItemDetails from "./common/ItemDetails";
import axios from "axios";

class Home extends Component {
  state = {
    data: {},
    itemsCart: [],
    itemSelected: {},
    open: false,
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get("http://localhost:5000/api/getmenu/");
      //console.log(data);
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  mapToViewModel(item) {
    //console.log("maptoview", item.itemSelected.id);
    const { itemSelected } = item;
    return {
      id: itemSelected.id,
      name: itemSelected.Name,
      image: itemSelected.Image,
      price: itemSelected.Price,
      qty: item.qty,
    };
  }

  onItemClicked = (item) => {
    //call the itemDetails component
    //setState are async so use callback method to call the detailed component making sure taht state is already updated
    // this.setState({ itemSelected: item }, () => {
    //   this.props.history.push({
    //     pathname: "/itemDetails",
    //     state: {
    //       itemSelected: this.state.itemSelected,
    //     },
    //   });
    // });
    this.setState({ itemSelected: item, open: true });
  };

  onAddToCart = (item) => {
    const itemObj = this.mapToViewModel(item);
    const itemsCart = [...this.state.itemsCart, itemObj];
    //console.log("added to cart", itemObj);
    this.setState({ itemsCart });
  };

  render() {
    const { open, itemSelected, itemsCart, data } = this.state;
    const category = Object.entries(data);

    return (
      <div>
        <Navbar cartItems={itemsCart} />
        {category.map((i, items) => (
          <Rowslider
            key={i}
            items={category[items]}
            itemClicked={this.onItemClicked}
          />
        ))}
        <Modal open={open} onClose={this.onCloseModal} center>
          <ItemDetails
            itemSelected={itemSelected}
            addToCart={this.onAddToCart}
          />
        </Modal>
      </div>
    );
  }
}

export default Home;
