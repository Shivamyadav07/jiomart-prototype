// import React, { useRef, useState } from "react";
// import { useEffect } from "react";
// import styled from "styled-components";
//  import { useThrottle } from "use-throttle";

 
// const SearchBar = () => {
//     const [inputText, setInputText] = useState("");
//     const [active, setActive] = useState(0);
//     const scrollRef = useRef();
  
//     const handleInputTextChange = (e) => {
//       setInputText(e.target.value);
//     };
  
//     const handleActiveSuggestions = (e) => {
//       switch (e.keyCode) {
//         //up arrow key code is 38
//         case 38:
//           if (active === 1) {
//             scrollRef.current.scrollTop = suggestions.length * 38.667;
//             setActive(suggestions.length);
//           } else if (active <= suggestions.length - 3) {
//             scrollRef.current.scrollTop -= 38.667;
//           }
//           setActive((prev) => prev - 1);
//           break;
  
//         //down arrow key code is 40
//         case 40:
//           if (active === suggestions.length) {
//             scrollRef.current.scrollTop = 0;
//             setActive(0);
//           } else if (active >= 4) {
//             scrollRef.current.scrollTop += 38.667;
//           }
  
//           setActive((prev) => prev + 1);
//           break;
  
//         //   case 13:
//         //     navigate(to = `country/${active}`);
//         //     break;
  
//         default:
//           return;
//       }
//     };
  
//     const throttledText = useThrottle(inputText, 200);
  
//     useEffect(() => {
//       inputQueryHandler(throttledText);
//      }, [inputQueryHandler, throttledText]);
  

//   return (
//         <Wrapper onKeyUp={handleActiveSuggestions}>
//             <SearchBarWrapper>
//             <InputWrapper
//             value={inputText}
//             onChange={handleInputTextChange}
//              className="searchItem"
//              placeholder="Search essential, groceries, and more..."/>
//             </SearchBarWrapper>
             
//         </Wrapper>
//   )
// }

// export default SearchBar;

// export const Wrapper=styled.div`
// .navbar {
//     display: grid;
//     grid-template-columns: 7rem 7rem 52rem 10rem 8rem;
//     align-items: center;
//     text-align: center;
//     color: white;
//     min-height:4.2rem;
//     position: sticky;
//     top: 0;
//     z-index: 1;
//     background-color: #008ecc;

//     .searchItem {
//         outline-style: none;
//     }
// }
// `
// const SearchBarSuggestion = styled.div`
//   border: 1px solid black;
//   display: flex;
//   flex-direction: column;
//   flex: 0 0 auto;
//   margin: auto;
//   max-height: ${({ limit }) => `${limit * 38.667}px`};
//   overflow: auto;

//   & * {
//     flex: 1;
//     text-align: left;
//     padding: 10px;
//     padding-left: 20px;
//   }

//   & :nth-child(${({ active }) => active}) {
//     background: rgba(0, 0, 0, 0.08);
//     cursor: pointer;
//   }
// `;

// const SearchBarWrapper = styled.div`
//   border: 1px solid black;
//   display: flex;
//   padding: 5px 10px;
//   align-items: center;
// `;

// const InputWrapper = styled.input`
//   flex: 1;
//   font-size: 20px;
//   border: none;
//   outline: none;
// `;
