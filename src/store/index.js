import { PTX } from "../API";
import { combineReducers } from "redux";
import history from "../helper/history";

const city = {
  臺北市: "Taipei",
  臺中市: "Taichung",
  基隆市: "Keelung",
  臺南市: "Tainan",
  高雄市: "Kaohsiung",
  新北市: "NewTaipei",
  宜蘭縣: "YilanCounty",
  桃園市: "Taoyuan",
  嘉義市: "Chiayi",
  新竹縣: "HsinchuCounty",
  苗栗縣: "MiaoliCounty",
  南投縣: "NantouCounty",
  彰化縣: "ChanghuaCounty",
  新竹市: "Hsinchu",
  雲林縣: "YunlinCounty",
  嘉義縣: "ChiayiCounty",
  屏東縣: "PingtungCounty",
  花蓮縣: "HualienCounty",
  臺東縣: "TaitungCounty",
  金門縣: "KinmenCounty",
  澎湖縣: "PenghuCounty",
  連江縣: "LienchiangCounty",
};

//*---------------- type ---------------- *//

const FETCH_ONE_BUS_DATA = "FETCH_ONE_BUS_DATA";
const FETCH_ROUTE_BUS_DATA = "FETCH_ROUTE_BUS_DATA";

const POP_SHOW = "POP_SHOW";
const POP_HIDE = "POP_HIDE";

const FORM_SEARCH_SUBMIT = "FORM_SEARCH_SUBMIT";

const PAGE_BAR_NUMBER_CHANGE = "PAGE_BAR_NUMBER_CHANGE";

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
        return { UID: stop.StopUID, chName: stop.StopName.Zh_tw, enName: stop.StopName, lon: stop.StopPosition.PositionLon, lat: stop.StopPosition.PositionLat };
      });

      const back = responseAllRouteName.data[1].Stops.map(stop => {
        return { UID: stop.StopUID, chName: stop.StopName.Zh_tw, enName: stop.StopName, lon: stop.StopPosition.PositionLon, lat: stop.StopPosition.PositionLat };
      });

      dispatch({ type: FETCH_ROUTE_BUS_DATA, payload: { area, busNumber, go, back } });
    };
  },

  //-----------------------------------------//

  popWindowShowCreator: component => {
    return {
      type: POP_SHOW,
      payload: component,
    };
  },

  popWindowHideCreator: () => {
    return {
      type: POP_HIDE,
      payload: null,
    };
  },

  //-----------------------------------------//
  //get search data

  formSearchSubmitCreator: ({ term, type, city }) => {
    if (type === "景點") {
      switch (city) {
        case "不分縣市":
          return async dispatch => {
            history.push("/spot");
            const response = await PTX.get("/v2/Tourism/ScenicSpot", {
              params: {
                $filter: `${term ? `contains(Name,'${term}')` : ""}`,
                $format: "JSON",
                $top: 100,
              },
            });

            let dataForPageObj = pageCalcHelper(response.data);

            dispatch({
              type: FORM_SEARCH_SUBMIT,
              payload: response.data.length === 0 ? [] : dataForPageObj,
            });
          };

        default:
          return async dispatch => {
            history.push("/spot");
            const response = await PTX.get("/v2/Tourism/ScenicSpot", {
              params: {
                $filter: `${term ? `contains(Name,'${term}') and` : ``} (contains(city,'${city}') or contains(Address,'${city}'))`,
                $format: "JSON",
              },
            });

            let dataForPageObj = pageCalcHelper(response.data);

            dispatch({
              type: FORM_SEARCH_SUBMIT,
              payload: response.data.length === 0 ? [] : dataForPageObj,
            });
          };
      }
    }

    return { type: FORM_SEARCH_SUBMIT, payload: "can't find" };
  },

  //-----------------------------------------//

  pageBarNumberChangeCreator: page => {
    return {
      type: PAGE_BAR_NUMBER_CHANGE,
      payload: page,
    };
  },
};

const pageCalcHelper = responseDataArray => {
  const cardPerPage = 20;
  let page = !responseDataArray.length % cardPerPage === 0 ? responseDataArray.length / 20 + 1 : responseDataArray.length / 20;

  let dataForPageObj = {};
  for (let i = 1; i <= page; i++) {
    //62筆 = 0~19 20~39 40~59 60~62
    dataForPageObj[i] = responseDataArray.slice((i - 1) * cardPerPage, i * cardPerPage);
  }

  console.log(dataForPageObj);
  return dataForPageObj;
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

const popWindowReducer = (preState = { show: false, component: null }, action) => {
  switch (action.type) {
    case POP_SHOW:
      return { ...preState, show: true, component: action.payload };

    case POP_HIDE:
      return { ...preState, show: false, component: null };

    default:
      return preState;
  }
};

const formSearchSubmitReducer = (preState = null, action) => {
  switch (action.type) {
    case FORM_SEARCH_SUBMIT:
      return { ...action.payload };

    default:
      return preState;
  }
};

const pageBarNumberChange = (preState = 1, action) => {
  if (action.type === PAGE_BAR_NUMBER_CHANGE) {
    return action.payload;
  }
  return preState;
};

export const reducers = combineReducers({
  oneBus: oneBusDataReducer,
  fullBusRoute: fullBusRouteReducer,
  popWindow: popWindowReducer,
  searchData: formSearchSubmitReducer,
  nowPage: pageBarNumberChange,
});
