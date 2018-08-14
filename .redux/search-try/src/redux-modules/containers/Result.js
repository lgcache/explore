import React from 'react'
import { connect } from 'react-redux'
import Result from '../../comps/Result'

const mapStateToProps = (state, ownProps) => ({
  filters: () => state.fields
})
const mapDispatchToProps = (dispatch, ownProps) => ({})
const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({}, ownProps, stateProps, dispatchProps)
const options = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options
)(Result)
