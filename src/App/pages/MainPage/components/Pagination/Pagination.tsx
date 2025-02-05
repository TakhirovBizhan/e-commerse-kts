import { useState } from 'react';
import leftArrow from '../../../../../../public/leftArrow.svg';
import rightArrow from '../../../../../../public/rightArrow.svg';
import s from './pagination.module.scss';
import { IData } from '../../../../../config/DataInterfaces';
import ProductList from '../ProductList/ProductList';

interface PaginationProps {
  data: IData[];
}

export const Pagination: React.FC<PaginationProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handlePageClick = (page: number) => setCurrentPage(page);

  const renderPageButtons = () => {
    let buttons = [];
    if (totalPages <= 6) {
      buttons = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        buttons = [1, 2, 3, '...', totalPages];
      } else if (currentPage > 3 && currentPage < totalPages - 2) {
        buttons = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
      } else {
        buttons = [1, '...', totalPages - 2, totalPages - 1, totalPages];
      }
    }

    return buttons;
  };

  return (
    <>
      <ProductList currentData={currentData} />
      <div className={s.pagination}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          <img src={leftArrow} alt="previous page" />
        </button>
        {renderPageButtons().map((page, index) =>
          page === '...' ? (
            <span key={index} className={s.ellipsis}>
              {page}
            </span>
          ) : (
            <button
              key={index}
              className={currentPage === page ? s.active : ''}
              onClick={() => handlePageClick(page as number)}
            >
              {page}
            </button>
          ),
        )}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <img src={rightArrow} alt="next page" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
