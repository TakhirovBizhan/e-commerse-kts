import leftArrow from '../../../../../../public/leftArrow.svg';
import rightArrow from '../../../../../../public/rightArrow.svg';
import s from './pagination.module.scss';
import ProductList from '../ProductList/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { decrementPage, incrementPage, setPage } from '../../../../../store/ProductUrlSlice';
import { RootState } from '../../../../../store/index';
import { useGetProductsQuery } from '../../../../../store/api/Products.api';
import Text from '../../../../../components/Text';
import { setData } from '../../../../../store/CustomFiltersSlice';
import { useEffect } from 'react';

type PaginationProps = {
  pages: number;
};

export const Pagination: React.FC<PaginationProps> = ({ pages }) => {
  const { page, search, rangeFilter } = useSelector((state: RootState) => state.productUrl);
  const { data, isLoading, error } = useGetProductsQuery({ page, search, rangeFilter });
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.length && !isLoading) {
      dispatch(setData(data));
    }
  }, [data, dispatch, isLoading]);

  const filteredData = useSelector((state: RootState) => state.customFilters.filteredData);
  const totalPages = Math.ceil(pages / 10);

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
      {filteredData && filteredData.length !== 0 ? (
        <>
          <ProductList data={filteredData} error={error} isLoading={isLoading} />
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
      ) : !isLoading ? (
        <Text view={'p-20'}>Ops... No data!</Text>
      ) : null}
    </>
  );
};

export default Pagination;
