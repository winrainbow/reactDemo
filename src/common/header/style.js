import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #F0F0F0;
`;
export const Logo = styled.a.attrs({
    href: '/'
})`
    position:absolute;
    height:56px;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;
export const Nav = styled.div`
    width:960px;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
    height:100%;
`;
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left {
        float:left
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active {
        color:#ea6f5a
    }
    
`;

export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .slide-enter{
        width:160px;
        transition:all .2s ease-out;
        
    }
    .slide-enter-active{
        width:240px;
        
        
    }
    .slide-exit-active{
        width:160px
    }
    .slide-exit{
        width:160px
        transition:all .2s ease-out;
    }
    .iconfont {
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused {
                color:#fff;
                background:#777;
            }
        }
    
    
`;
export const SearchInfo = styled.div`
    position:absolute;
    top:56px;
    left:0;
    width:240px;
    padding:0 20px
    box-shadow:0 0 8px rgba(0,0,0,.2);
    

`;
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
    
    
`;
export const SearchInfoSwitch = styled.div`
    float:right;
    font-size:13px;
`;
export const SearchInfoList = styled.div`
    overflow:hidden;
`;
export const SearchInfoItem = styled.a`
    display:block;
    float:left;
    line-height:20px;
    padding:0 5px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
    margin-right:10px;
    margin-bottom:10px;
`;


export const NavSearch = styled.input.attrs({
    placeholder: '搜索'

})`
    width:160px;
    height:38px;
    padding:0 30px 0 25px;
    color:#666;
    margin-left:20px;
    box-sizing:border-box;
    font-size:14px;
    margin-top:9px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    &::placeholder{
        color:#999
    }
    &.focused {
        width:240px;
    }
    
`;
export const Addition = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;
`;
export const Button = styled.div`
    float:right;
    font-size:14px;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149
    
    &.reg{
        color:#ec6149
    }
    &.writing{
         color:#fff;
         background:#ec6149;
    }
`;