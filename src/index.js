import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BaseLayout from './components/Layout'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Findus'
import Appetizers from './components/Appetizers'
import Entrees from './components/Entrees'
import Desserts from './components/Desserts'



//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
//IMPORT COMPONENTS

ReactDOM.render(
	<BrowserRouter>
		<BaseLayout>
			<Switch>
				<Route exact path="/" component={About}/>
				<Route path="/Menu" component={Menu}/>
				<Route path='/Menu/Appetizers' component={Appetizers}/>
				<Route path="/Contact" component={Contact}/>
			</Switch>
		</BaseLayout>
	</BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
