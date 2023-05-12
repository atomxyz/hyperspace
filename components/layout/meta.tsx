import { ATOM_DESCRIPTION, ATOM_TITLE, ATOM_URL } from "@/lib/constants";
import Head from "next/head";

export default function Meta({
  title = "Hyperspace",
  description = "Hyperdimensional structures and digital certificates",
  image = `${ATOM_URL}/api/og`,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>Atom</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/logo.png" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content={`${ATOM_URL}/logo.png`}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:creator" content="@steventey" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
