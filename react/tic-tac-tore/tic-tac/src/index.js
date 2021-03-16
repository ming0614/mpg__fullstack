import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Square(props) {
  return (
    <button className="square">
    {props.value}
    </button>
  )
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square value={this.props.squares[i]} />
    )
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [ //下棋历史
        {
          squares: Array(9).fill(null) 
        }
      ],
      stepNumber: 0, //当前第几步 
    }
  }

  render() {
    const history = this.state.history; 
    // 当前的数据 MVVM 响应式 current 会自动变
    const current = history[this.state.stepNumber];

    const status = [];// JSX 数组 组件 Square
    return (
      // 切整个页面
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    )
    
    // 细化组件
  }
}
// 组件化思维 
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
