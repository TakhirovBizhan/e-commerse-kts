import leftArrow from '../../../../../../public/leftArrow.svg';
import rightArrow from '../../../../../../public/rightArrow.svg';
import s from './pagination.module.scss';
import ProductList from '../ProductList/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { decrementPage, incrementPage, setPage } from '../../../../../store/ProductUrlSlice';
import { RootState } from '../../../../../store/index';
import { useGetProductsQuery } from '../../../../../store/api/Products.api';
import Text from '../../../../../components/Text';

interface PaginationProps {
  pageCount: number;
}

export const Pagination: React.FC<PaginationProps> = ({ pageCount }) => {
  const page = useSelector((state: RootState) => state.productUrl.page);
  const search = useSelector((state: RootState) => state.productUrl.search);
  const { data, isLoading, error } = useGetProductsQuery({ page, search });
  const dispatch = useDispatch();

  const totalPages = Math.ceil(pageCount / 10);

  const handleNextPage = () => dispatch(incrementPage());
  const handlePreviousPage = () => dispatch(decrementPage());
  const handlePageClick = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  const renderPageButtons = () => {
    let buttons = [];
    if (totalPages <= 6) {
      buttons = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (page <= 3) {
        buttons = [1, 2, 3, '...', totalPages];
      } else if (page > 3 && page < totalPages - 2) {
        buttons = [1, '...', page - 1, page, page + 1, '...', totalPages];
      } else {
        buttons = [1, '...', totalPages - 2, totalPages - 1, totalPages];
      }
    }

    return buttons;
  };

  return (
    <>
      {data && data.length !== 0 ? (
        <>
          <ProductList data={data} error={error} isLoading={isLoading} />
          <div className={s.pagination}>
            <button onClick={handlePreviousPage} disabled={page === 1}>
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
                  className={page === page ? s.active : ''}
                  onClick={() => handlePageClick(page as number)}
                >
                  {page}
                </button>
              ),
            )}
            <button onClick={handleNextPage} disabled={page === totalPages}>
              <img src={rightArrow} alt="next page" />
            </button>
          </div>
        </>
      ) : (
        <Text view={'p-20'}>Ops... No data!</Text>
      )}
    </>
  );
};

export default Pagination;
