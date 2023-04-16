import { Children } from "react"
import { Div } from "../pages/our-works/WorksStyles"
import OurWorks from "../work-details/OurWorks"

const Layout = (props) => {
  return (
    <>
    <OurWorks/>
    <Div>
    {props.children}
        </Div></>
  )
}

export default Layout