import Link from "next/link";
import "../styles/home.css";
async function getMovieList() {
  const mykey = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${mykey}&language=en-US&page=1`
  );
  return res.json();
}

export default async function Home() {
  const { results } = await getMovieList();

  return (
    <div>
      {/* <h1 className="active">Home</h1> */}
      {/* 전역 스타일 추가 global속성을 붙인다. */}

      {/* loading 처리 */}
      {!results && <h4>Loading ...</h4>}

      <div className="container">
        {results?.map((movie: any) => {
          return (
            <Link
              href={`/movies/${movie.original_title}/${movie.id}`}
              key={movie.id}
            >
              <div className="movie">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                <h4>{movie.original_title}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
