import React from "react";
import {
  FaEdit,
  FaTrashAlt,
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaRegCircle,
} from "react-icons/fa";

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  setPage,
}) => {
  // Hàm chuyển đến trang đầu tiên
  const handleFirst = () => {
    setPage(1);
  };

  // Hàm chuyển đến trang trước đó
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  // Hàm chuyển đến trang tiếp theo
  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  // Hàm chuyển đến trang cuối cùng
  const handleLast = () => {
    setPage(totalPages);
  };

  return (
    <div className="pagination-num">
      <div className="pagination-num-left">
        <span>106 results</span>
      </div>

      <div className="pagination-num-right">
        <button onClick={handlePrevious} disabled={page === 1}>
          <FaArrowLeft />
        </button>
        <span>{`Page ${page} of ${totalPages}`}</span>
        <button onClick={handleNext} disabled={page === totalPages}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
