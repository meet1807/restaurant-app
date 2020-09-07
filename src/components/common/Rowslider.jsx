import React from "react";
import { Typography } from "@material-ui/core";
import useHorizontalScroll from "./../hooks/useHorizontalScroll";

import "./Rowslider.css";

const Rowslider = ({ items, itemClicked }) => {
  const scrollRef = useHorizontalScroll();

  return (
    <div className="row">
      {items[1].length > 0 && (
        <div>
          <Typography variant="h6">{items[0]}</Typography>
          <div ref={scrollRef} className="row__posters">
            {items[1].map((item) => (
              <img
                key={item.id}
                className="row__poster"
                src={item.Image}
                alt={item.Name}
                onClick={() => itemClicked(item)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Rowslider;
