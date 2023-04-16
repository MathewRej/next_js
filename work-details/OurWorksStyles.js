import styled from "styled-components";

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
    h2{         
        text-align: center;
        font-size: 14px;
        font-weight: 300;
        color: #585858; 
        margin: 10px; 
        letter-spacing: 0.06rem;
    }
`
export const WorksDiv = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 20px;
    padding-bottom: 2rem;
    right: 0;
    z-index: 9999;
    left: 0;
    top: 6%;
    gap: 10px;
    position: ${props => props && props.item === true ? "fixed" : ''};;
    @media (max-width: 520px){
        display: grid;
     grid-template-columns: repeat(4, auto);
    }
    @media (max-width: 375px) {
        display: grid;
     grid-template-columns: repeat(2, auto);

    }
    a{
    cursor: pointer;
    color: ${props => props && props.link == "all" ? "black" : props.link == "ecommerce" ? "black" : props.link == "web-designing" ? "black"
    : props.link == "web-application" ? "black": props.link == "iot-and-ai" ? "black": props.link == "mobile-application" ? "black"
     : "#585858"};
    }

`
const OurWorksStyles = () => {
  return (
    <div>OurWorksStyles</div>
  )
}

export default OurWorksStyles

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