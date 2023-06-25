
import "./css/Pagination.css";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const PageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    PageNumbers.push(i);
  }

  return (
    <>
      <div className="pagination__content">
      <a className="preview__btn"><i className='bx bx-chevrons-left'></i> Preview</a>
        <ul className="pagination">
          {PageNumbers.map((number) => (
            <li key={number}>
              <button
                className="pagination_btn"
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
        <a className="next__btn">Next <i className='bx bx-chevrons-right'></i></a>
      </div>
    </>
  );
};

export default Pagination;
