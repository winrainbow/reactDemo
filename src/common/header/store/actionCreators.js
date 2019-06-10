import * as constant from './constant'
import axios from 'axios'
import {fromJS} from 'immutable'
export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            console.log(res);
            const data = res.data;
            const action = changeList(data.data)
            dispatch(action);
        }).catch(()=>{
            console.log("exception")
        })


    }
}
const changeList = (data)=>({
    type:constant.CHANGE_LIST,
    data:fromJS(data)

});
export const searchFocus = ()=>({
    type:constant.SEARCH_FOCUS
});
export const searchBlur = ()=>({
    type:constant.SEARCH_BLUR
});