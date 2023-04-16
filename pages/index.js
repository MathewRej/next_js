import Head from "next/head"
import Link from "next/link"

const Index = () => {
  return (
    <div>
      <Head>
                <title>Home page</title>
                <meta
                    name="description"
                    content="Home page"
                    key="discription"
                />
                
            </Head>
      <h1>Home</h1>
      <Link href = '/our-works' style = {{paddingTop: "2rem", color: "blue" , textDecoration: "underline"}}>Our Works</Link>
    </div>
  )
}

export default Index

Index.getLayout = function PageLayout(page){
  return(
    <>
    
    {page}
    </>
  )
}