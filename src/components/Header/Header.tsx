import React from 'react';
import {Button, Col, Row} from "antd";
import {Header} from "antd/es/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/reduxStore";
import {logoutThunk} from "../../redux/authReducer";


export const AppHeader = () => {
    const isAuth = useSelector((state: AppStoreType) => state.auth.isAuth)

    const dispatch = useDispatch()

    return (<Header className="site-layout-sub-header-background"
                    style={{padding: 0}}>
            <Row>
                <Col span={23}/>
                <Col span={1}>
                    {isAuth ? <div style={{color: 'white'}}>
                        <Button size={'small'}
                                onClick={() => dispatch(logoutThunk())}> logout</Button>
                    </div> : null}

                </Col>
            </Row>
        </Header>
    )
}

