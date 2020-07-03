import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { updateSpeed, updateGeneration } from "../actions";

import Buttons from "./Buttons";
import Grid from "./Grid";
import Title from "../uikit/Title";

import arrayClone from "../utils/array-clone";

const Container = styled.div`
  background-image: url(http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/squares.png);
  height: 100vh;
  padding-top: 1px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.cols = 50;
    this.rows = 30;

    this.state = {
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false)),
    };
  }

  componentDidMount() {
    this.seed();
    this.playButton();
  }

  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull);

    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy,
    });
  };

  seed = () => {
    const gridCopy = arrayClone(this.state.gridFull);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }

    this.setState({
      gridFull: gridCopy,
    });
  };

  playButton = () => {
    clearInterval(this.intervalId);

    this.intervalId = setInterval(this.play, this.props.speed);
  };

  pauseButton = () => {
    clearInterval(this.intervalId);
  };

  slow = () => {
    this.props.updateSpeed(1000);

    this.playButton();
  };

  fast = () => {
    this.props.updateSpeed(100);

    this.playButton();
  };

  clear = () => {
    const grid = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(false));

    this.props.updateGeneration(0);

    this.setState({ gridFull: grid });
  };

  gridSize = (size) => {
    switch (size) {
      case "1":
        this.cols = 20;
        this.rows = 10;
        break;
      case "2":
        this.cols = 50;
        this.rows = 30;
        break;
      default:
        this.cols = 70;
        this.rows = 50;
    }

    this.clear();
  };

  play = () => {
    let g = this.state.gridFull;

    let g2 = arrayClone(this.state.gridFull);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && j < this.cols - 1)
          if (g[i + 1][j + 1]) count++;
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }
    this.props.updateGeneration(this.props.generation + 1);

    this.setState({
      gridFull: g2,
    });
  };

  render() {
    return (
      <Container>
        <Title as="h1">The Game of Life</Title>
        <Buttons
          playButton={this.playButton}
          pauseButton={this.pauseButton}
          slow={this.slow}
          fast={this.fast}
          clear={this.clear}
          seed={this.seed}
          gridSize={this.gridSize}
        />
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <Title as="h2">Generations: {this.props.generation}</Title>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  speed: state.speed,
  generation: state.generation,
});

export default connect(mapStateToProps, { updateSpeed, updateGeneration })(App);
