import dynamic from 'next/dynamic'
import '../styles/globals.css'



const Layout = dynamic(() => import('../layout/Layout'), {
  ssr: false,
})
function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return(
    
  <Layout ><Component {...pageProps} /></Layout>
  
  ) 

}

export default MyApp
