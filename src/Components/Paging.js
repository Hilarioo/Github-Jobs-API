import { Pagination } from "react-bootstrap";
const Paging = ({ page, setPage, hasNextPage }) => {
  const handlePage = (num) => {
    setPage((page) => page + num);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Pagination>
        {page !== 1 && <Pagination.Prev onClick={handlePage(-1)} />}
        {page !== 1 && (
          <Pagination.Item
            onClick={() => {
              setPage(1);
            }}>
            1
          </Pagination.Item>
        )}
        {page > 2 && <Pagination.Ellipsis />}
        {page > 2 && (
          <Pagination.Item onClick={handlePage(-1)}>{page - 1}</Pagination.Item>
        )}
        <Pagination.Item active>{page}</Pagination.Item>
        {hasNextPage && (
          <Pagination.Item onClick={handlePage(1)}>{page + 1}</Pagination.Item>
        )}
        {hasNextPage && <Pagination.Next onClick={handlePage(1)} />}
      </Pagination>
    </div>
  );
};

export default Paging;
