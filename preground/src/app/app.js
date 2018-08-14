import React, { Component } from 'react';
import FirstComp from '../components/firstcomp/index'
import DemoSelector from '../components/DemoSelector/index'
import './app.less';

class App extends Component {
	render() {
		return (
			<div className={'app'}>
				<div className={'title'}>
					<span>Preground</span>
				</div>
				<div>
					<DemoSelector></DemoSelector>
				</div>
				<div className={'content'}>
					<FirstComp></FirstComp>
				</div>
			</div>

    // {/*<div className="App">*/}
		// {/*<header className="App-header">*/}
		// {/*<img src={logo} className="App-logo" alt="logo" />*/}
		// {/*<h1 className="App-title">Welcome to React</h1>*/}
		// {/*</header>*/}
		// {/*<p className="App-intro">*/}
		// {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
		// {/*</p>*/}
		// {/*</div>*/}
	);
	}
}

export default App;
