import React from 'react';

export default (props) => {
  return (
    <button
      className="btn btn-default btn-sm"
      onClick={ props.onClickHandler }>
      { props.txt }
    </button>
  )
}
