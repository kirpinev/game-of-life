import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: inline-block;
  border: 1px solid black;
  width: 15px;
  height: 15px;
  margin-left: -1px;
  margin-bottom: -1px;

  &:hover {
    background: #0cf;
  }
`;

export default ({ boxClass, boxId, selectBox, row, col }) => {
  const selBox = () => selectBox(row, col);

  return <Box className={boxClass} id={boxId} onClick={selBox} />;
};
