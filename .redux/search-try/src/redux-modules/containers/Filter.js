import React from 'react'
import { connect } from 'react-redux'
import updateFilter from '../actions/filter'
import Filter from '../../comps/Filter'

const mapStateToProps = state => ({
  getFieldValue: id => {
    console.log('state is ..')
    console.log(state)
    return state.fields.find(e => e.id === id).current

  }
})

const mapDispatchToProps = (dispatch, ownProps) => (
    {
        updatef: (fieldId, fieldValue) => {
          console.log('updatef')
          dispatch(updateFilter(fieldId, fieldValue))
        }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Filter)
