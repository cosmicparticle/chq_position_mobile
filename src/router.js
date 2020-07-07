import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Home from './pages/home'
import BjInfo from './pages/bjInfo'
import DataTj from './pages/dataTj'
import FixedSet from './pages/fixedSet'
import TestLogin from './pages/testLogin'
import TestHome from './pages/testHome'
import User from './pages/user'
import ActTable from './pages/actTable'
import Details from './pages/details'

// 蜂鸟云
import FmHome from './pages/fmhome'
import HisRoute from './pages/fmhome/historicalRoute'
import PeopleTrace from './pages/fmhome/peopleTrace'

export default class Router extends React.Component {
	render() {
		return(
			<HashRouter>
                <App>                  
                    <Switch>
                        <Route path="/testLogin"  component={TestLogin}/>
                        <Route path='/' render={()=>
                            <Switch>
                                <Route path='/login' component={Login}/>
                                <Route path='/home' component={Home}/>
                                <Route path='/bjInfo' component={BjInfo}/>
                                <Route path='/dataTj' component={DataTj}/>
                                <Route path='/fixedSet' component={FixedSet}/>
                                
                                <Route path='/fmhome' component={FmHome} exact/>
                                <Route path='/customPage/fm/2' component={PeopleTrace} exact/>
                                <Route path='/customPage/fm/3' component={HisRoute} exact/>

                                <Route path='/testHome' component={TestHome} />
                                <Route path='/user' component={User} />
                                <Route path="/:menuId" component={ActTable} exact />
                                <Route path='/create/:menuId' component={Details} exact/>
                                <Route path="/:menuId/:code" component={Details} exact />
                                <Redirect to="/login" />
                            </Switch>
                        }/>
                    </Switch>
                </App>
            </HashRouter>
		)
	}
}