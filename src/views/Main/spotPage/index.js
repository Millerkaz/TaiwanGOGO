import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../store";
import history from "../../../helper/history";

const Homepage = props => {
  const dispatch = useDispatch();

  return (
    <div>
      <div
        onClick={() => {
          dispatch(action.popWindowShowCreator(null));
          history.push("/spot/C1_315080500H_000068");
        }}
      >
        123
      </div>
    </div>
  );
};

export default Homepage;
