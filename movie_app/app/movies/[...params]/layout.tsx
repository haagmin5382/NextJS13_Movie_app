import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: {
    params: Array<string>;
    searchParams: { [key: string]: string | string[] | undefined };
  };
};

export async function generateMetadata(
  { params: { params } }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const title = params[0];
  const number = params[1];

  // fetch data
  //   const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || [];
  const movieTitle = title.replaceAll("%20", " ");
  return {
    title: `Movie ${movieTitle} | Next Movies`,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>; // 이거 안해주면 화면에 안뜸..
}
