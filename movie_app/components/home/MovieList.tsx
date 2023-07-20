import Link from "next/link";

async function getMovieList() {
  const mykey = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${mykey}&language=en-US&page=1`
  );
  return res.json();
}

export default async function MovieList() {
  const results = await getMovieList();
  console.log(results);

  return (
    <div>
      <h1 className="active">Home</h1>
      {/* 전역 스타일 추가 global속성을 붙인다. */}

      {/* loading 처리 */}
      {!results && <h4>Loading ...</h4>}

      <div className="container">
        {/* {results?.map((movie: any) => {
          return (
            <div className="movie" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <h4>
                <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                  {movie.original_title}
                </Link>
              </h4>
            </div>
          );
        })} */}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }

        .movie img {
          max-width: 100%;
          /* border-radius: 12px; */
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie:hover a {
          color: #93c3ff;
          transition: 0.2s;
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
