import React from "react";

async function getMovieInfo(number: string) {
  const mykey = process.env.API_KEY;
  const result = await await fetch(
    `https://api.themoviedb.org/3/movie/${number}?api_key=${mykey}&language=en-US&page=1`
  );
  return result.json();
}

const page = async ({
  params: { params },
}: {
  params: { params: Array<string> };
}) => {
  const title = params[0];
  const number = params[1];
  const result = await getMovieInfo(number);
  console.log(result);
  return (
    <div>
      <h2>{result.original_title || "Loading ..."}</h2>
      <img
        alt="moviePoster"
        src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
        width={400}
        height={500}
      />
      <h3>{result.overview}</h3>
    </div>
  );
};

export default page;
