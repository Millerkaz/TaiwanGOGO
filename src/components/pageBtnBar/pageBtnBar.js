import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Btn from "../btn";
import history from "../../helper/history";
import { action } from "../../store";

const PageBtnBar = props => {
  const dispatch = useDispatch();
  const btnCountPerRow = 5;
  const totalPageArray = useSelector(state => state.searchData?.totalPage);
  const { city, term, page } = props.hash;

  const renderBtnBar = () => {
    if (!totalPageArray || totalPageArray.length === 0) {
      return "";
    }

    const numberBtn = totalPageArray.map(number => {
      return (
        <Btn
          key={number}
          color="red"
          onClick={() => {
            window.scroll(0, 0);
            history.push(`/spot/${city}/${term}/${Number(number)}`);
          }}
        >
          {number}
        </Btn>
      );
    });

    return (
      <React.Fragment>
        {Number(page) % btnCountPerRow === 1 ? (
          ""
        ) : (
          <Btn
            color="red"
            onClick={() => {
              window.scroll(0, 0);
              history.push(`/spot/${city}/${term}/${Number(page) - 1}`);
            }}
          >
            {"<"}
          </Btn>
        )}
        {numberBtn}
        {totalPageArray.length === 1 || Number(page) === totalPageArray.length ? (
          ""
        ) : (
          <Btn
            color="red"
            onClick={() => {
              window.scroll(0, 0);
              history.push(`/spot/${city}/${term}/${Number(page) + 1}`);
            }}
          >
            {">"}
          </Btn>
        )}
      </React.Fragment>
    );
  };

  return <div className={props.className}>{renderBtnBar()}</div>;
};

export default PageBtnBar;
