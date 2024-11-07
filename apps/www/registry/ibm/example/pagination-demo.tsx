import React, { useState } from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/ibm/ui/pagination"

export function PaginationDemo() {
  const totalPages = 25 // Total number of pages.
  const [currentPage, setCurrentPage] = useState(1)
  const [hoveredPage, setHoveredPage] = useState(null) // New state for hover

  // Inline styles
  const paginationStyle = {
    display: "flex",
    justifyContent: "center", // Center the pagination.
    listStyleType: "none",
    padding: "0",
  }

  const paginationItemStyle = {
    margin: "0 4px",
  }

  // Define paginationLinkStyle as a function to use the hover state
  const paginationLinkStyle = (isHovered) => ({
    border: "none",
    borderRadius: "4px",
    padding: "8px 12px",
    cursor: "pointer",
    textDecoration: "none",
    backgroundColor: isHovered ? "#f0f0f0" : "hsl(var(--background))", // Gray hover color
    color: "hsl(var(--foreground))",
    transition: "background-color 0.3s",
  })

  const activePaginationLinkStyle = {
    ...paginationLinkStyle(false),
    backgroundColor: "#2563EB", // Background color for the active item.
    color: "hsl(var(--primary-foreground))", // Text color for the active item.
  }

  // Styles for the "Previous" and "Next" arrows.
  const normalArrowStyle = {
    ...paginationLinkStyle(false),
    backgroundColor: "hsl(var(--background))",
  }

  const disabledArrowStyle = {
    ...paginationLinkStyle(false),
    backgroundColor: "hsl(var(--muted))",
    cursor: "default",
    color: "hsl(var(--muted-foreground))",
  }

  // Handle page click.
  const handlePageChange = (
    event: React.MouseEvent<HTMLAnchorElement>,
    page: number
  ) => {
    event.preventDefault()
    setCurrentPage(page)
  }

  // Generate page links, including logic for ellipsis.
  const generatePageLinks = () => {
    let pages = []
    let startPage, endPage
    if (totalPages <= 5) {
      startPage = 1
      endPage = totalPages
    } else {
      if (currentPage <= 3) {
        startPage = 1
        endPage = 5
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4
        endPage = totalPages
      } else {
        startPage = currentPage - 2
        endPage = currentPage + 2
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <PaginationItem key={page} style={paginationItemStyle}>
          <PaginationLink
            href="#"
            onClick={(e) => handlePageChange(e, page)}
            onMouseEnter={() => setHoveredPage(page)} // Set hover
            onMouseLeave={() => setHoveredPage(null)} // Remove hover
            style={
              currentPage === page
                ? activePaginationLinkStyle
                : paginationLinkStyle(hoveredPage === page)
            }
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      )
    }

    // Add ellipsis at the start if needed.
    if (startPage > 1) {
      pages.unshift(
        <PaginationItem key="startEllipsis" style={paginationItemStyle}>
          <PaginationEllipsis />
        </PaginationItem>
      )
    }

    // Add ellipsis at the end if needed.
    if (endPage < totalPages) {
      pages.push(
        <PaginationItem key="endEllipsis" style={paginationItemStyle}>
          <PaginationEllipsis />
        </PaginationItem>
      )
    }

    return pages
  }

  // Handle "Next" click.
  const handleNext = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  // Handle "Previous" click.
  const handlePrevious = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  return (
    <Pagination style={paginationStyle}>
      <PaginationContent>
        <PaginationItem style={paginationItemStyle}>
          <PaginationPrevious
            href="#"
            onClick={handlePrevious}
            style={currentPage === 1 ? disabledArrowStyle : normalArrowStyle}
          />
        </PaginationItem>
        {generatePageLinks()}
        <PaginationItem style={paginationItemStyle}>
          <PaginationNext
            href="#"
            onClick={handleNext}
            style={
              currentPage === totalPages ? disabledArrowStyle : normalArrowStyle
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationDemo
