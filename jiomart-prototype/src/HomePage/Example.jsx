import React from 'react'
import styled from "styled-components";
import DehazeIcon from '@mui/icons-material/Dehaze';

const Header = () => {
  return (
    <div>
     <TopHeader>
        <div className='menuBox'>
               <DehazeIcon style={{width:"4rem",height:"2.4rem",marginRight:"1rem"}} />
        </div>
     </TopHeader>

    </div>
  )
}

export default Header;

export const TopHeader =styled.div`
border:1px solid red;

min-width:100%;
min-height:72px;
position:relative;
box-sizing:border-box;
pading:0 24px;
background-color:#008ecc;

.menuBox{
    border:1px solid red;
    height:3rem;
    width:3rem;
    margin-left:4rem;
    margin-top:1rem;
    color:white;
}

`;