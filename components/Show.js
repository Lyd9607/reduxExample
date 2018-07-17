import * as action from '../action/crease';
import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Show extends Component {
  render() {
    const {value,actions} =this.props;
    return (
      <div>
        <button onClick={actions.decrease}> - </button>
          <span>{value}</span>
        <button onClick={actions.increase}> + </button>
      </div>
    )
  }
}

Show.propTypes={
  value: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = (state) => {
  return {
    value: state.count
  };
}

const mapDispatchToProps = (dispatch) => {
  const actions=Object.assign({},action);
  return {
    actions: bindActionCreators(actions,dispatch)
  };
} 

export default connect(mapStateToProps,mapDispatchToProps)(Show);
