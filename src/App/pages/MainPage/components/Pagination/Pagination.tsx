import leftArrow from '../../../../../../public/leftArrow.svg';
import rightArrow from '../../../../../../public/rightArrow.svg';
import s from './pagination.module.scss';
import ProductList from '../ProductList/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { decrementPage, incrementPage, setPage } from '../../../../../store/ProductUrlSlice';
import { RootState } from '../../../../../store/index';

interface PaginationProps {
  pageCount: number;
}

export const Pagination: React.FC<PaginationProps> = ({ pageCount }) => {
  const statePage = useSelector((state: RootState) => state.productUrl.page);
  const dispatch = useDispatch();

  const totalPages = Math.ceil(pageCount / 10);

  const handleNextPage = () => dispatch(incrementPage());
  const handlePreviousPage = () => dispatch(decrementPage());
  const handlePageClick = (newPage: number) => {
    dispatch(setPage(newPage));
    console.log(statePage);
  };

  const renderPageButtons = () => {
    let buttons = [];
    if (totalPages <= 6) {
      buttons = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (statePage <= 3) {
        buttons = [1, 2, 3, '...', totalPages];
      } else if (statePage > 3 && statePage < totalPages - 2) {
        buttons = [1, '...', statePage - 1, statePage, statePage + 1, '...', totalPages];
      } else {
        buttons = [1, '...', totalPages - 2, totalPages - 1, totalPages];
      }
    }

    return buttons;
  };

  return (
    <>
      <ProductList page={statePage} />
      <div className={s.pagination}>
        <button onClick={handlePreviousPage} disabled={statePage === 1}>
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
              className={statePage === page ? s.active : ''}
              onClick={() => handlePageClick(page as number)}
            >
              {page}
            </button>
          ),
        )}
        <button onClick={handleNextPage} disabled={statePage === totalPages}>
          <img src={rightArrow} alt="next page" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
