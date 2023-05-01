import './Pagination.css';

const Pagination = ({currentPage, totalPages, onClick}) => {
    let pageNumbers = [];

    if (currentPage === 1) {
      pageNumbers = [currentPage, currentPage + 1, currentPage + 2];
    } else if (currentPage === totalPages ) {
      pageNumbers = [currentPage - 2, currentPage - 1, currentPage];
    } else {
      pageNumbers = [currentPage - 1, currentPage, currentPage + 1];
    }

    const pageButton = (page, buttonText, isDisabled) => (
        <button
          disabled={isDisabled} 
          className={page === currentPage ? "active-button" : "pagination-btn"} 
          onClick={() => onClick(page)}>
             {buttonText || page}
        </button>
      )

    return (
      <div className="pagination">
        {pageButton(currentPage - 1, "<", currentPage === 1)}

        {!pageNumbers.includes(1) && 
          <div>
            {pageButton(1)}
            ....
          </div>}
        
        {pageNumbers.map((pageNumber, index) => (
          <div key={index}> {pageButton(pageNumber)} </div>
        ))}

        {!pageNumbers.includes(totalPages) && 
        <div>
          ....
          {pageButton(totalPages)}
        </div>}

        {pageButton(currentPage + 1, ">", currentPage === totalPages)}

      </div>
    );
  };

export default Pagination;