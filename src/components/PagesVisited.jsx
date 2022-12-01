const PagesVisited = ({ className, pagesVisited }) => {
  return (
    <h1 className={className}>
      {pagesVisited} page{pagesVisited > 1 ? "s" : ""} visited
    </h1>
  );
};

export default PagesVisited;
