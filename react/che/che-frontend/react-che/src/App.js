import * as  React from 'react';
import { connect } from "react-redux"
import {setFrom, setTo} from './store/actions';
const App = (props) => {
  console.log(props);
  return (
    <div>
      App
    </div>
  )
} 

const mapStateToProps = (state) => {
  return {
    from: state.from,
    to: state.to
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // 对调， 城市选择
    setFrom(from) {
      dispatch(setFrom(from))
    },
    setTo(to) {
      dispatch(setFrom(to))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
