import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { action } from '../../store';

const Popup = props => {
  const renderComponent = () => {
    switch (props.component) {
      default:
        return null;
    }
  };

  return ReactDOM.createPortal(
    <div
      className={`popup__overlay ${props.show ? '' : 'hidden'}`}
      onClick={() => {
        // if (!e.target.classList.contains('popup__overlay')) return;
        props.popWindowHideCreator();
      }}
    >
      <div
        className="popup__container"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {renderComponent()}
      </div>
    </div>,
    document.querySelector('#popup')
  );
};

const mapStateToProps = state => {
  return {
    show: state.popWindow?.show,
    component: state.popWindow?.component,
  };
};

export default connect(mapStateToProps, action)(Popup);
