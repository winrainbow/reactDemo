import * as constant from './constant'
import {fromJS} from 'immutable'

const defaultState = fromJS(
    {
        focused: false,
        list: [],
        page: 1,
        mouseIn:false,
        totalPage: 1
    }
);
/**
 * reducer 不能对 原state 处理，只能返回一个新的state
 * immutable.js 用来帮助不修改 原state
 * immutable不可变更 ，需要将state变与immutable对象
 * immutable对象set方法，会结合之前的值和现在的值，生成一个全新的对象，不会修改原来的数据
 * @param state
 * @param action
 * @returns {{focused: boolean}}
 */
export default (state = defaultState, action) => {
    switch (action.type){
        case constant.SEARCH_FOCUS:
            return state.set('focused', true);
        case constant.SEARCH_BLUR:
            return state.set('focused', false);
        case constant.CHANGE_LIST:
            return state.set('list', action.data).set('totalPage', action.totalPage);
        case constant.MOUSE_ENTER:
            return state.set('mouseIn', action.mouseIn);
        case constant.CHANGE_PAGE:
            return state.set('page', action.page);
        default:break;
    }
    return state
}