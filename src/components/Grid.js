import React from "react";
import Box from "./Box";

import styled from "styled-components";

const Container = styled.div`
  width: 150px;
  line-height: 0;
  margin: 20px auto auto auto;
  box-shadow: 0 0 20px white;
`;

const Grid = ({ cols, rows, gridFull, selectBox }) => {
  const width = cols * 14;

  const rowsArr = [];

  for (let i = 0; i < rows; i += 1) {
    for (let y = 0; y < cols; y += 1) {
      const boxId = `${i}_${y}`;

      rowsArr.push(
        <Box
          boxClass={gridFull[i][y] ? "on" : "off"}
          key={boxId}
          boxId={boxId}
          row={i}
          col={y}
          selectBox={selectBox}
        />
      );
    }
  }

  return <Container style={{ width: width }}>{rowsArr}</Container>;
};

export default Grid;
