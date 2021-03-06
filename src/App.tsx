import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {Preloader} from './components/common/Preloader/Preloader';
import {Login} from './components/Login/Login';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {initializeApp} from './redux/appReducer';
import {AppStoreType} from './redux/reduxStore';
import {ReactSuspense} from "./hoc/ReactSuspense";
import {Error} from "./components/ErrorPage/ErrorPage";
import {Layout, Menu} from "antd";
import {MessageOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {AppHeader} from "./components/Header/Header";
import {ChatPage} from "./pages/Chat/ChatPage";

const Dialogs = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersApiComponent = React.lazy(() => import('./components/Users/UsersContainer'));
const {Content, Footer, Sider} = Layout;

export const App = () => {
    const initialize = useSelector((state: AppStoreType) => state.app.initialized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    if (!initialize) {
        return <Preloader/>
    }
    return <Layout>
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo"/>
            <Menu theme="dark" mode="inline">
                <Menu.Item key="profile" icon={<UserOutlined/>}>
                    <Link to='/profile'/>
                    Profile
                </Menu.Item>
                <Menu.Item key="settings" icon={<VideoCameraOutlined/>}>
                    <Link to="/settings"/>
                    Settings
                </Menu.Item>
                <Menu.Item key="dialogs" icon={<MessageOutlined/>}>
                    <Link to="/dialogs"/>
                    Dialogs
                </Menu.Item>
                <Menu.Item key="chat" icon={<MessageOutlined/>}>
                    <Link to="/chat"/>
                    Chat
                </Menu.Item>
                <Menu.Item key="users" icon={<UserOutlined/>}>
                    <Link to='/users'/>
                    Friends
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <AppHeader/>
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background"
                     style={{padding: 24, minHeight: '83.1vh'}}>
                    <Switch>

                        <Route path={"/profile/:userId?"}
                               render={ReactSuspense(ProfileContainer)}/>
                        <Route exact path={"/"}
                               render={() => <Redirect from={'/'}
                                                       to={'/profile'}/>}/>
                        <Route path={"/dialogs"}
                               render={ReactSuspense(Dialogs)}/>

                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>

                        <Route path={"/users"}
                               render={ReactSuspense(UsersApiComponent)}/>

                        <Route path={"/login"} render={() => <Login/>}/>
                        <Route path={"/chat"} render={() => <ChatPage/>}/>
                        <Route path={'/404'} render={() => <Error/>}/>
                        <Redirect from={'*'} to={'/404'}/>


                    </Switch>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ilya Holakhau ??2022 Created by
                IH</Footer>
        </Layout>
    </Layout>
}
