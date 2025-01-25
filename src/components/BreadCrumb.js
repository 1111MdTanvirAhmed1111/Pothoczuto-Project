'use client'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Home } from "lucide-react"
import { usePathname } from "next/navigation"

function BreadCrumb(props) {
    const path = usePathname()
    console.log(path)

    const pathArr = path.split("/").filter((item) => item !== "")
    console.log(pathArr)
  return (
   <Breadcrumb className={`my-3 mx-4 border-4 border-grey-200 inline-block px-6 py-2 rounded-full ${props.className}`}>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" ><Home /></BreadcrumbLink>
    </BreadcrumbItem>
   
    {pathArr.map((item, index) => (

      <BreadcrumbItem key={index}>
       <BreadcrumbSeparator />
        <BreadcrumbLink href={`/${item}`}>{item}</BreadcrumbLink>
        
      </BreadcrumbItem> ))}
  </BreadcrumbList>
</Breadcrumb>
  )
}

export default BreadCrumb