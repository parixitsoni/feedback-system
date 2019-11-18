import React from "react";

const SliderPage = () => {
  return (
    <div className="my-5">
      <i className="fa fa-thumbs-o-up fa-lg" icon="thumbs-down" />
      <input type="range" className="slider" id="customRange1" />
      <i className="fa fa-thumbs-o-down fa-lg" icon="thumbs-up" />
    </div>
  );
}

export default SliderPage;