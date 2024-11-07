import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/new-york/ui/pagination";

export function PaginationDemo({
  totalPages = 10,
  border = "1px solid hsl(var(--border))",
  borderRadius = "4px",
  padding = "8px 12px",
  cursor = "pointer",
  textDecoration = "none",
  backgroundColor = "hsl(var(--background))",
  color = "hsl(var(--foreground))",
  activeBackgroundColor = "hsl(var(--primary))",
  activeColor = "hsl(var(--primary-foreground))",
  activeBorderColor = "hsl(var(--primary))",
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPageNumbersToShow = 5; // Maximum number of page numbers to display at once.

  // Pagination link styles
  const paginationLinkStyle = {
    border,
    borderRadius,
    padding,
    cursor,
    textDecoration,
    backgroundColor,
    color,
  };

  // Active pagination link styles
  const activePaginationLinkStyle = {
    ...paginationLinkStyle,
    backgroundColor: activeBackgroundColor,
    borderColor: activeBorderColor,
    color: activeColor,
  };

  // Generate page links, including logic for ellipsis
  const generatePageLinks = () => {
    let pages = [];
    let startPage, endPage;
    if (totalPages <= maxPageNumbersToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = maxPageNumbersToShow;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - maxPageNumbersToShow + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            onClick={(e) => handlePageChange(e, page)}
            style={
              currentPage === page
                ? activePaginationLinkStyle
                : paginationLinkStyle
            }
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Add ellipsis at the start if needed
    if (startPage > 1) {
      pages.unshift(
        <PaginationItem key="startEllipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Add ellipsis at the end if needed
    if (endPage < totalPages) {
      pages.push(
        <PaginationItem key="endEllipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    return pages;
  };

  // Handle page click
  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  // Handle "Next" click
  const handleNext = (event) => {
    event.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Handle "Previous" click
  const handlePrevious = (event) => {
    event.preventDefault();
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Pagination style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={handlePrevious}
            style={currentPage === 1 ? { ...paginationLinkStyle, cursor: "default" } : paginationLinkStyle}
          />
        </PaginationItem>
        {generatePageLinks()}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={handleNext}
            style={currentPage === totalPages ? { ...paginationLinkStyle, cursor: "default" } : paginationLinkStyle}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationDemo;
