import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../store";

const BusToolPage = props => {
  const oneBusData = useSelector(state => state.oneBus);
  const fullBusRoute = useSelector(state => state.fullBusRoute);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.fetchOneBusData("taipei", 307));
    dispatch(action.fetchRouteBusData("taipei", 307));
  }, []);

  return (
    <div>
      <div>Loading...</div>
    </div>
  );
};

export default BusToolPage;
