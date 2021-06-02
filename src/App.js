import { useState } from "react";
import useFetchJobs from "./Api/useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Components/Job";
import Search from "./Components/Search";
import Paging from "./Components/Paging";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, hasNextPage, error } = useFetchJobs(params, page);

  const handleParams = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prev) => {
      return { ...prev, [param]: value };
    });
  };

  return (
    <Container className='my-4'>
      <h1 className='text-center mb-4'>Github Jobs Api</h1>
      <Search params={params} onParamChange={handleParams} />
      <Paging page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {<h6 className='text-center text-muted'>{jobs.length} Job Result(s)</h6>}
      {loading && <h4 className='text-center'>Loading...</h4>}
      {error && <h4 className='text-center'>Error. Try to refresh...</h4>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
    </Container>
  );
}

export default App;
