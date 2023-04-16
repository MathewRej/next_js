import styled from "styled-components";

export const WorksMainDiv = styled.div`
    display: flex;
    width: 100%;
    :nth-child(2n+1) {
    display: flex;
    flex-direction: row-reverse;
    
}  
@media (max-width: 768px) {
    :nth-child(n+1) {
    display: flex;
    flex-direction: column;
    
} 
    }

`
export const ImageDiv = styled.div`
    display: flex;
    
    align-items: center;
    height: 3rem;
   
    background-color: white;
    margin: auto;
    justify-content: space-between; 
    @media (max-width: 768px){
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    }
    span{
        padding-right: 20px;
        @media (min-width: 769px){
            display: none;
        }
    }
`
export const WorkImgDiv  = styled.div`
    display: flex;
    overflow: hidden;
    width: 100% ;
    max-width: 50%;
    align-items: center; 
    justify-content: center;
    @media (max-width: 768px){
        display: flex;
        overflow: hidden;
        max-width: 100%;
        align-items: center;
        justify-content: center;
    }
    img{
    /* display: none; */
    width: 100%;
    height: 100%;
    /* border: 1px solid #c4c4c4; */
    object-fit: cover;
   
    }  
`
export const WorksTitle = styled.div`
    display: flex;
    flex-direction: column;
    padding-inline: 2rem;
    /* padding-top: 2rem; */
    b{
    font-size: 2rem;
    color: black;
    padding-left: 30px;
    padding-right: 40px;
    letter-spacing: 0.05em;
    font-family: Poppins, sans-serif;
    margin-bottom: 30px;
    } 
    p{
        color: #464545;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 2.1;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    letter-spacing: 0.05em;
    padding-left: 30px;
    padding-right: 40px;
    }
`
export const WorksLogoDiv = styled.div`
    padding-inline: 4rem;
    display: flex;
    flex-direction: row;
    padding-right: 30px;
    align-items: center;
    padding-block: 1.2rem;
    img{
        height: 50px;
    width: 50px;
    opacity: 0.6;
    object-fit: contain;
    }
    p{
        margin: 15px;
    font-size: 14px;
    margin-left: 15px;
    color: #a7a3a3;
    font-family: Poppins, sans-serif;
    letter-spacing: 1.1px;
    max-width: 118px;
    }
`
export const ViewBtnDiv = styled.div`
    padding-top: 3rem;
    display: ${props => props && props.buttonText === "none" ? "none" : 'contents'};
    a{
        box-sizing: border-box;
    background-color: white;
    color: #464545;
    font-size: 0.9rem;
    border: 1px solid #464545;
    border-radius: 5px;
    margin: 4rem;

    padding: 15px 26px;
    margin-top: 5rem;
    max-width: 10rem;
    cursor: pointer;
    display: block;

    text-align: center;
    }

`
export const ContentDiv = styled.div`
    max-width: 50%;
    @media (max-width: 768px){
        overflow: hidden;
        max-width: 100%;
        }

`
export const WorkHeading = styled.h1`
    margin: 15px;
    font-size: 14px;
    margin-left: 15px;
    color: #a7a3a3;
    font-family: Poppins, sans-serif;
    letter-spacing: 1.1px;
    max-width: 118px;

`
export const AppDiv = styled.div`
     display: flex;
    width: 100%; 
    flex-direction: column;
`


export const HeaderItems = styled.div`
    display: flex;
    justify-content:space-between ;
    background-color: black;
    color: white;
    align-items: center;
    padding: 1rem;
    right: 0;
    left: 0;
    top: 0;
    position: ${props => props && props.navbar === true ? "fixed" : ''};;
    @media (max-width: 768px){
        display: none;
    }
    
`
export const OurWorksDiv = styled.div`
    padding-top: 2rem;
    @media (max-width: 768px){
        padding-top: 3rem;
    }
    h1{
        color: #585858;
        font-size: 16px;
        text-align: center;
        letter-spacing: 0.3rem;
        text-transform: uppercase;
    }
` 
export const OurWorksDis = styled.div`
padding: 0px;
margin: 10px; 
    p{
        font-size: 40px;
        font-weight: 700;
        color: black;
        margin: 10px; 
        padding-top: 1rem;
        letter-spacing: 0.06rem;
        text-align: center;
    }  
    h5{         
        text-align: center;
        font-size: 14px;
        font-weight: 300;
        color: #585858; 
        margin: 10px; 
        letter-spacing: 0.06rem;
    }
`

export const Div = styled.div`
    width: 100%;
    height: 100%;
    font-family: Poppins,sans-serif;

`
const OurWorksStyles = () => {
  return (
    <div>OurWorksStyles</div>
  )
}

export default OurWorksStyles
export const MainDiv = styled.div`
    width: 100%;
    height: 100%;

`
export const DrawerDiv = styled.div`
    transition: all .5s ease ;
    display: none;
    @media (max-width: 768px){
    transition: all .5s ease ;

        display: ${props => props.isOpen ? "flex" : 'none'};
    transform:  ${props => props.isOpen ? "translateX(0%)" : "translateX(-110%)" };
    flex-direction: column;
    height: 100%;
    background-color: black;
    width: 180px;
    position: fixed;
    z-index: 2;
    top: 0%;
    padding-top: 3rem;
    right: 0;
    }
    a{
        padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 1rem;
    color: #969696;
    display: block;
    transition: 0.3s;
    margin: 10px;
    padding-top: 1rem;
    }
    span{
        text-align: end;
        color: white;
    }
`

