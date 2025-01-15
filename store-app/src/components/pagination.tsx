import React from "react";
import { Metadata } from "@/types/product";

const Pagination = ({
  metadata: { total, skip },
  onPageChange,
}: {
  metadata: Metadata;
  onPageChange: (page: number) => void;
}) => {
  const limit = 8;
  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.floor(skip / limit) + 1;

  console.log(total, limit, totalPages, currentPage);

  // Create an array of page numbers to display
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      const skip = (page - 1) * limit;
      onPageChange(skip);
    }
  };

  const generatePagination = () => {
    const pagination = [];

    // Handle first page and ellipsis (showing only relevant page numbers)
    if (currentPage > 2) {
      pagination.push(
        <button
          key="first"
          onClick={() => handleClick(1)}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none"
        >
          1
        </button>,
      );
      if (currentPage > 3) {
        pagination.push(
          <span
            key="ellipsis-start"
            className="px-4 py-2 text-sm text-gray-500"
          >
            ...
          </span>,
        );
      }
    }

    // Show pages around the current page
    const rangeStart = Math.max(currentPage - 1, 1);
    const rangeEnd = Math.min(currentPage + 1, totalPages);

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pagination.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`px-4 py-2 text-sm font-medium rounded-md border ${i === currentPage ? "bg-blue-500 text-white" : "text-gray-700 bg-white border-gray-300 hover:bg-gray-200"} focus:outline-none`}
        >
          {i}
        </button>,
      );
    }

    // Handle last page and ellipsis (if needed)
    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        pagination.push(
          <span key="ellipsis-end" className="px-4 py-2 text-sm text-gray-500">
            ...
          </span>,
        );
      }
      pagination.push(
        <button
          key="last"
          onClick={() => handleClick(totalPages)}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none"
        >
          {totalPages}
        </button>,
      );
    }

    return pagination;
  };

  return (
    <div className="flex items-center justify-end space-x-2 mt-4">
      <button
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none disabled:opacity-50"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {generatePagination()}
      <button
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none disabled:opacity-50"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
