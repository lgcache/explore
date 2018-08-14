import React from 'react'
import './Result.less'
const Result = ({ filters }  ) => (
    <div className={'search-wrap'}>
      <div className={'title'}>Search Conditions</div>
      {/*<div>{filters().map(e => <span>{e.id}</span> )}</div>*/}
      {filters().map(e =>
          <div key={e.id} className={'one-filter'}>
            <div className={'id'}><span className={'til'}>id</span> is <span className={'val'}>{e.id}</span></div>
            <div className={'desc'}><span className={'til'}>description</span> is <span className={'val'}>{e.description}</span></div>
            <div className={'current'}><span className={'til'}>current</span> is <span className={'val'}>{e.current}</span></div>
            <div className={'reg'}><span className={'til'}>regCheck</span> is <span className={'val'}>{e.pattern.every(p => p.test(e.current)) ? 'true' : 'false'}</span></div>
            {/*<span>pattern is {e.pattern}</span>*/}
          </div>
      )}
      <div>
        <div>this your data filtered by filter string...</div>
      </div>
    </div>
)
export default Result
