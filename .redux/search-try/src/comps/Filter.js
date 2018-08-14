import React from 'react'
import './Filter.less'
const Filter = ({ getFieldValue, updatef }) => {
    return (
        <div className={'filter-wrap'}>
          <div className={'title'}>Filters</div>
          <div className={'bgtxt'}>Slient Is Gold</div>
          <div className={'form'}>
            <div className={'bg'}></div>
            <div className={'form-item'}>
              <span className={'label'}>name:</span>
              <input type="text" onChange={ e => updatef('name', e.target.value) }/>
            </div>
            <div className={'form-item'}>
              <span className={'label'}>idType:</span>
              <input type="text" onChange={ e => updatef('idType', e.target.value) }/>
            </div>
            <div className={'form-item'}>
              <span className={'label'}>idNumber:</span>
              <input type="text" onChange={ e => updatef('idNumber', e.target.value) }/>
            </div>
            <div className={'form-item'}>
              <span className={'label'}>branchNo:</span>
              <input type="text" onChange={ e => updatef('branchNo', e.target.value) }/>
            </div>
            <div>
              <button>Search</button>
            </div>
          </div>

        </div>
    )
}
export default Filter
