import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition,
    Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem,
    SearchInfoList,

} from "./style";
import {actionCreators} from './store';

const getListArea = (props) => {
    console.log("getListArea:" + JSON.stringify(props))

    const {focused, list, page,mouseIn,totalPage} = props;
    const jsList = list.toJS();
    const pageList = [];
    if(jsList.length){
        for(let i = (page-1)*10;i<page*10;i++){
            pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>);
        }
    }
    if (focused||mouseIn) {
        return (
            <SearchInfo
                onMouseEnter={()=>{props.actions.mouseEnter(true)}}
                onMouseLeave = {()=>{props.actions.mouseEnter(false)}}
            >
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch
                        onClick={()=>{props.actions.changePageList(page,totalPage)}}
                    >换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null;
    }
}
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className='iconfont'>&#xe636;</i>
                </NavItem>

                <SearchWrapper>
                    <CSSTransition
                        timeout={200}
                        in={props.focused}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.actions.searchFocus}
                            onBlur={props.actions.searchBlur}
                        />
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6cf;</i>
                    {getListArea(props)}
                </SearchWrapper>

            </Nav>
            <Addition>
                <Button className='writing'>
                    <i className='iconfont'>&#xe6cf;</i>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    const stateNew = {
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn:state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage'])
    }
    console.log("mapStateToProps:" + JSON.stringify(stateNew))
    return stateNew;
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({...actionCreators}, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);