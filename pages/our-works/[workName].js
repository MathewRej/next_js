
import { AppDiv, ContentDiv, ViewBtnDiv, WorkImgDiv, WorksLogoDiv, WorkHeading, WorksMainDiv,HeaderItems, OurWorksDiv,OurWorksDis, WorksTitle, Div, WorksDiv, MainDiv, ImageDiv, DrawerDiv } from "./WorksStyles"
import Image from "next/image"
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic"
import { getAllEvents, getEventByUrl } from '../../data'

const Work = (props) => {
    console.log('datassssss: ', props);
    const router  = useRouter();
    const url = router.query.workName
    
    
    // const router = useRouter()
    // const {query : {link },
    //         } = router
    // const props ={ link}
    // console.log('link: ', link);
    // const location = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    // console.log('location: ', location);
    // const [link, setLink] = useState("ecommerce")
    // console.log('link: ', link);


    return (
        <div>
        <AppDiv>
        {props?.getData.filter(work => work.url == url).map((item, index) => {
            return (
                <WorksMainDiv key={index}>
                
                    <Head>
            <title>{item.name}</title>
            <meta name='description' content={item.title} key="description" />
            <link rel="canonical" href="https://localhost:3000/our-works" key="canonical tag" />
        </Head>
                        <WorkImgDiv>
                            <Image src={item.image} alt="work image"  loading = "eager"  width={800} height={600}/>
                        </WorkImgDiv>
                        <ContentDiv>
                            <WorksLogoDiv>
                                <Image src={item.logo} alt="work logo"   width={800} height={600}/>
                                <WorkHeading>{item.name}</WorkHeading>
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

    </div>
    )
}

export default Work

export async function getStaticPaths () {
    const data = getAllEvents()
    const paths = data.map(item => {
        return {
            params : {
                workName : item.url
            }
        }
    })
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps(context) {
    const {params} = context
    const data = params.workName
    const getData = getAllEvents()
    return {    
        props: {
            data,
            getData
        },
    }
}