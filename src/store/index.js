import { PTX } from "../API";
import { combineReducers } from "redux";

//*---------------- type ---------------- *//

const FETCH_ONE_BUS_DATA = "FETCH_ONE_BUS_DATA";
const FETCH_ROUTE_BUS_DATA = "FETCH_ROUTE_BUS_DATA";

//*---------------- Action ---------------- *//
export const action = {
  fetchOneBusData: (area, busNumber) => {
    return async dispatch => {
      const responseBusNow = await PTX.get(`/v2/Bus/RealTimeNearStop/City/${area}/${busNumber}`);

      dispatch({ type: FETCH_ONE_BUS_DATA, payload: responseBusNow.data });
    };
  },

  fetchRouteBusData: (area, busNumber) => {
    return async dispatch => {
      const responseAllRouteName = await PTX.get(`/v2/Bus/DisplayStopOfRoute/City/${area}/${busNumber}`);

      const go = responseAllRouteName.data[0].Stops.map(stop => {
        return { UID: stop.StopUID, name: { ch: stop.StopName.Zh_tw, en: stop.StopName.En }, position: { lon: stop.StopPosition.PositionLon, lat: stop.StopPosition.PositionLat } };
      });

      const back = responseAllRouteName.data[1].Stops.map(stop => {
        return { UID: stop.StopUID, name: { ch: stop.StopName.Zh_tw, en: stop.StopName.En }, position: { lon: stop.StopPosition.PositionLon, lat: stop.StopPosition.PositionLat } };
      });

      dispatch({ type: FETCH_ROUTE_BUS_DATA, payload: { area, busNumber, go, back } });
    };
  },
};

//*---------------- Reducer ---------------- *//

const oneBusDataReducer = (preState = {}, action) => {
  if (action.type === FETCH_ONE_BUS_DATA) {
    let bus = action.payload.busNumber;
    return { ...preState, [bus]: action.payload.data };
  }
  return preState;
};

const fullBusRouteReducer = (preState = {}, action) => {
  if (action.type === FETCH_ROUTE_BUS_DATA) {
    return { ...preState, ...action.payload };
  }
  return preState;
};

export const reducers = combineReducers({
  oneBus: oneBusDataReducer,
  fullBusRoute: fullBusRouteReducer,
});
