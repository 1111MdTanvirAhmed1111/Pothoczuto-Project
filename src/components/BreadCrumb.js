"use client"
import React from "react"
// components/Breadcrumbs.jsx
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { usePathname } from "next/navigation"
  
  export function Breadcrumbs() {
    const pathname = usePathname()
  
    // Function to generate breadcrumb items from pathname
    const generateBreadcrumbItems = () => {
      const pathParts = pathname.split("/").filter((part) => part)
      const items = []
  
      // Add Home as the first item
      items.push({
        label: "Home",
        href: "/",
      })
  
      // Build the path progressively
      let currentPath = ""
      pathParts.forEach((part) => {
        currentPath += `/${part}`
        items.push({
          label: part.charAt(0).toUpperCase() + part.slice(1), // Capitalize first letter
          href: currentPath,
        })
      })
  
      return items
    }
  
    const breadcrumbItems = generateBreadcrumbItems()
  
    return (
        <div>
{
     breadcrumbItems.length > 1 && <Breadcrumb className="rounded-full inline-block py-2 px-4 border-[3px] border-gray-400 ml-16">
    <BreadcrumbList>
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.href}>
          <BreadcrumbItem>
            {index === breadcrumbItems.length - 1 ? (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
            )}
          </BreadcrumbItem>
          {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
        </React.Fragment>
      ))}
    </BreadcrumbList>
  </Breadcrumb>
}
        </div>
      
    )
  }