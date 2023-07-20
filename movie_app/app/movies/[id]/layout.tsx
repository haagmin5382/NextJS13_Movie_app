import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  //   const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: `Movie ${id} | Next Movies`,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default function Page({ params }: Props) {}
