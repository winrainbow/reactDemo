import * as constant from './constant'
import axios from 'axios'
import {fromJS} from 'immutable'

const changeList = (data) => ({
    type: constant.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});
const getListM = (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
        console.log(res);
        const data = res.data;
        const action = changeList(data.data)
        dispatch(action);
    }).catch(() => {
        console.log("exception")
    })
}
export default {
    getList: () => {
        return (dispatch) => {
            getListM(dispatch);
        }
    },
    searchFocus: () => {
        return (dispatch) => {
            dispatch({type: constant.SEARCH_FOCUS})
            getListM(dispatch);
        }
    },
    searchBlur: () => {
        return (dispatch) => {
            dispatch({type: constant.SEARCH_BLUR})
        }
    },
    mouseEnter: (mouseIn) => {
        return (dispatch) => {
            dispatch({
                type: constant.MOUSE_ENTER,
                mouseIn:mouseIn,
            })
        }
    },
    changePageList:(page,totalPage)=>{
        return (dispatch)=>{
            if(page<totalPage){
                dispatch({
                    type:constant.CHANGE_PAGE,
                    page:page+1
                })
            }else{
                dispatch({
                    type:constant.CHANGE_PAGE,
                    page:1
                })
            }

        }
    }

}