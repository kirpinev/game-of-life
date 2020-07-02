import React from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { Dropdown, DropdownButton } from "react-bootstrap";

const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Buttons = ({
  playButton,
  pauseButton,
  clear,
  slow,
  fast,
  seed,
  gridSize,
}) => {
  const handleSelect = (e) => gridSize(e);

  return (
    <Container>
      <ButtonGroup variant="contained" color="default">
        <Button onClick={playButton}>Play</Button>
        <Button onClick={pauseButton}>Pause</Button>
        <Button onClick={clear}>Clear</Button>
        <Button onClick={slow}>Slow</Button>
        <Button onClick={fast}>Fast</Button>
        <Button onClick={seed}>Seed</Button>
      </ButtonGroup>
      <DropdownButton title="Grid Size" id="size-menu" onSelect={handleSelect}>
        <Dropdown.Item eventKey="1">20x10</Dropdown.Item>
        <Dropdown.Item eventKey="2">50x30</Dropdown.Item>
        <Dropdown.Item eventKey="3">70x50</Dropdown.Item>
      </DropdownButton>
    </Container>
  );
};

export default Buttons;
