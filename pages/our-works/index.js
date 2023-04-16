import Head from "next/head"


import { AppDiv, ContentDiv, ViewBtnDiv, WorkImgDiv, WorksLogoDiv, WorksMainDiv,HeaderItems, OurWorksDiv,OurWorksDis, WorksTitle, Div, WorksDiv, MainDiv, ImageDiv, DrawerDiv } from "./WorksStyles"
import Image from "next/image"
import Link from "next/link"
import index from ".."
import { useState } from "react"
import Script from "next/script"
import dynamic from "next/dynamic"
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { getAllEvents } from "../../data"


const Works = ({data}) => {
    return (

        <div>
            <Head>

                <title>Our Works</title>
                <meta name="description" content="Woxro, Kerala's Leading web designing company" key="descriptn" />
                <meta property="og:image" content="" key="title-image" />
                <meta name="robots" content="all" key="robots" />
                <link rel="canonical" href="https://localhost:3000/our-works" />
            </Head>
            <Div>
                
                <MainDiv>
                    <AppDiv>
                        {data.map((item, index) => {
                            return (
                                <WorksMainDiv key={index}>
                                    <WorkImgDiv>
                                        <Image src={item.image} alt="work image" width={800} height={600} />
                                    </WorkImgDiv>
                                    <ContentDiv>
                                        <WorksLogoDiv>
                                            <Image src={item.logo} alt="work logo" width={800} height={600} />
                                            <p>{item.name}</p>
                                        </WorksLogoDiv>
                                        <WorksTitle>
                                            <b>{item.title}</b>
                                            <p>{item.content}</p>
                                        </WorksTitle>
                                        <ViewBtnDiv buttonText={item.buttonText}>
                                            <Link href= {item.link}>{item.buttonText}</Link>
                                        </ViewBtnDiv>
                                    </ContentDiv>

                                </WorksMainDiv>
                            )
                        })}
                    </AppDiv>
                </MainDiv>
            </Div>
        </div>
    )
}

export default Works;

export async function getStaticProps() {
    const data = getAllEvents()
    return {    
        props: {
            data,
        },
    }
}
