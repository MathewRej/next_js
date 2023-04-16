import { Div } from "../pages/our-works/WorksStyles"
import woxroLogo from '../public/images/woxrologo.png'
import { ImageDiv, MainDiv } from "../pages/our-works/WorksStyles"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { DrawerDiv, HeaderItems, OurWorksDis, OurWorksDiv, WorksDiv } from "./OurWorksStyles"
import { useState } from "react"
import Router from "next/router"
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { getAllEvents } from "../data"


const OurWorks = ({data}) => {
    console.log('data: ', data);
    
    const workLinks = [
        {
            title: "Ecommerce",
            link: "ecommerce",
        },
        {
            title: "Mobile Application",
            link: "mobile-application",
        },
        {
            title: "Web Application",
            link: "web-application",
        },
        {
            title: "Web Designing",
            link: "web-designing",
        },
        {
            title: "IoT & AI",
            link: "iot-and-ai",
        },
    ]
    const [navbar,setNavbar] = useState(false)
    
    const [link, setLink] = useState("all")
    
    const [ isOpen, setIsOpen] = useState(false);
    
  return (
    <div>
        <Div>
            <ImageDiv>
                <Image src ={woxroLogo} alt = "logo" width={100} height={30}/>
                <span onClick={ () => setIsOpen(true)}> <AiOutlineMenu size ={30}/></span>

                <DrawerDiv isOpen={isOpen}>
                <span onClick={ () => setIsOpen(false)}><AiOutlineClose/></span>

                <Link href ="" passHref>Home</Link>
                <Link href ="" passHref>About Us</Link>
                <Link href ="" passHref>Services</Link>
                <Link href ="" passHref>Technology</Link>
                <Link href ="" passHref>Carrers</Link>
                <Link href ="" passHref>Blogs</Link>
                <Link href ="" passHref>Our Works</Link>
                <Link href ="" passHref>Contact Us</Link>
                </DrawerDiv>
            </ImageDiv>
            <MainDiv>
                <HeaderItems navbar = {navbar}>
                <Link href ="" passHref>Home</Link>
                <Link href ="" passHref>About Us</Link>
                <Link href ="" passHref>Services</Link>
                <Link href ="" passHref>Technology</Link>
                <Link href ="" passHref>Carrers</Link>
                <Link href ="" passHref>Blogs</Link>
                <Link href ="" passHref>Our Works</Link>
                <Link href ="" passHref>Contact Us</Link>
                </HeaderItems>
                <OurWorksDiv>
                    <h1>OUR WORKS</h1>
                </OurWorksDiv>
                <OurWorksDis>
                    <p>Learn how we create happy clients.</p>
                    <h2>We are here to keep you up-to-date with all the latest happenings in and around mobile and web application<br/>
                     development.</h2>
                    
                </OurWorksDis>
                <WorksDiv link ={link}>  
                    <Link href='/our-works' onClick={() => setLink("all")} style = {{color: link == "all" ? "black" : "#585858"}}>All</Link>
                    {workLinks.map((item, index) => {
                        return(
                            <div key = {index}>
                            <Link href={`/our-works/${item.link}`} onClick ={() => setLink(item.link)}  style = {{color: link == item.link ? "black" : "#585858"}}>{item.title}</Link>
                            </div>
                        )
                    })}
                    <Link href='' style = {{color: "#585858"}}>Branding and Animations</Link>
                </WorksDiv>
            </MainDiv>
        </Div>
    </div>
  )
}

export default OurWorks
