import React from "react";
function RxItem(props) {
  return (
    <div
      className="rxItem"
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <p>
        <span> </span>
        {props.text}
      </p>
    </div>
  );
}
export default RxItem;
