import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchList from "../../../components/searchList/searchList";
import { PTX } from "../../../API";
import { pageCalcHelper } from "../../../helper";
import SearchBar from "../../../components/searchBar/searchBar";
import PageBtnBar from "../../../components/pageBtnBar/pageBtnBar";

import cloud_big from "../../../img/icon/cloud 1.png";
import cloud_small from "../../../img/icon/cloud 2.png";

const SpotPage = props => {
  const dispatch = useDispatch();
  const { city, term, page } = props.match.params;
  const amount = useSelector(state => state.searchData?.amount);
  let dataObj = useSelector(state => state.searchData?.data);

  useEffect(() => {
    const fetchData = async () => {
      const FORM_SEARCH_SUBMIT = "FORM_SEARCH_SUBMIT";

      if (city === "all") {
        const response = await PTX.get(`/v2/Tourism/ScenicSpot?${term === "all" ? "" : `$filter=contains(ScenicSpotName,'${term}')`}`, {
          params: {
            $format: "JSON",
            $top: 100,
          },
        });

        let dataForPageObj = pageCalcHelper(response.data);

        dispatch({
          type: FORM_SEARCH_SUBMIT,
          payload: { data: response.data.length === 0 ? {} : dataForPageObj, totalPage: Object.keys(dataForPageObj), amount: response.data.length },
        });

        return;
      }

      if (city !== "all") {
        const response = await PTX.get(`/v2/Tourism/ScenicSpot?${term === "all" ? `$filter=contains(city,'${city}') or contains(Address,'${city}')` : `$filter=contains(ScenicSpotName,'${term}') and (contains(city,'${city}') or contains(Address,'${city}'))`}`, {
          params: {
            $format: "JSON",
          },
        });

        let dataForPageObj = pageCalcHelper(response.data);

        dispatch({
          type: FORM_SEARCH_SUBMIT,
          payload: { data: response.data.length === 0 ? {} : dataForPageObj, totalPage: Object.keys(dataForPageObj), amount: response.data.length },
        });

        return;
      }
    };

    fetchData();
  }, [city, term]);

  return (
    <main>
      <div className="main__spotPage">
        <img src={cloud_big} className="main__spotPage--cloudBig" />
        <img src={cloud_small} className="main__spotPage--cloudSmall" />
        <h3>全台景點</h3>
        <SearchBar type="spot" />
        {<p>搜尋結果：{`關鍵字：${term}，城市：${city}，${amount} 個結果`}</p>}
      </div>
      <SearchList className="main__searchList" data={dataObj} hash={props.match.params} />
      <PageBtnBar type="spot" className="main__pageBtnBar" hash={props.match.params} />
    </main>
  );
};

export default SpotPage;
