import React from 'react'
import './index.less'
class DemoSelector extends React.Component {
	getDemos() {
		return [
			{ id: 'demo1', label: 'demo1' },
			{ id: 'demo2', label: 'demo1' },
			{ id: 'demo3', label: 'demo1' },
			{ id: 'demo4', label: 'demo1' },
			{ id: 'demo4', label: 'demo1' },
			{ id: 'demo5', label: 'demo1' },
			{ id: 'demo6', label: 'demo1' },
		]
	}
	render() {
		return (
			<div className={'demo-selector-wrap'}>
				{ this.getDemos().map(e => (
					<div className={'title'} key={e.id}>e.label</div>
				)) }
			</div>
		)
	}
}

export default DemoSelector
