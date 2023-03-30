import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

function RQSuperHeroesPage() {
  const onSuccess = (data) => {
    console.log("suceess", data);
  };

  const onError = (error) => {
    console.log("error", error);
  };

  const { isLoading, data, isError, error, refetch } = useSuperHeroesData(
    onSuccess,
    onError
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes</h2>
      {
        data?.data.map((hero) => {
          return <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        })
      }
      {/* {data.map((heroName) => {
        return <div>{heroName.name}</div>;
      })} */}
    </>
  );
}

export default RQSuperHeroesPage;
