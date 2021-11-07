import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchList from "../../../components/searchList/searchList";
import { PTX } from "../../../API";
import { pageCalcHelper } from "../../../helper";

import PageBtnBar from "../../../components/pageBtnBar/pageBtnBar";
import { action } from "../../../store";
import history from "../../../helper/history";

import SearchBar from "../../../components/searchBar/searchBar";

const SpotPage = props => {
  const dispatch = useDispatch();
  const { city, term, page } = props.match.params;

  useEffect(() => {
    const fetchData = async () => {
      const FORM_SEARCH_SUBMIT = "FORM_SEARCH_SUBMIT";

      if (city === "all") {
        const response = await PTX.get(`/v2/Tourism/ScenicSpot?${term === "all" ? "" : `$filter=contains(Name,'${term}')`}`, {
          params: {
            $format: "JSON",
            $top: 100,
          },
        });

        let dataForPageObj = pageCalcHelper(response.data);

        dispatch({
          type: FORM_SEARCH_SUBMIT,
          payload: { data: response.data.length === 0 ? {} : dataForPageObj, totalPage: Object.keys(dataForPageObj) },
        });

        return;
      }

      if (city !== "all") {
        const response = await PTX.get(`/v2/Tourism/ScenicSpot?${term === "all" ? `$filter=contains(city,'${city}') or contains(Address,'${city}')` : `$filter=contains(Name,'${term}') and (contains(city,'${city}') or contains(Address,'${city}'))`}`, {
          params: {
            $format: "JSON",
          },
        });

        let dataForPageObj = pageCalcHelper(response.data);

        dispatch({
          type: FORM_SEARCH_SUBMIT,
          payload: { data: response.data.length === 0 ? {} : dataForPageObj, totalPage: Object.keys(dataForPageObj) },
        });

        return;
      }
    };

    fetchData();
  }, [city, term]);

  return (
    <React.Fragment>
      <div>搜尋結果：{`關鍵字：${term}，城市：${city}`}</div>
      <SearchList className="main__searchList" hash={props.match.params} />
      <PageBtnBar className="main__pageBtnBar" hash={props.match.params} />
    </React.Fragment>
  );
};

export default SpotPage;
