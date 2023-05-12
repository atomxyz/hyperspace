import { ATOM_DESCRIPTION, ATOM_TITLE, ATOM_URL } from "@/lib/constants";
import Head from "next/head";

export default function Meta({
  title = "Hyperspace",
  description = "Hyperdimensional structures and digital certificates",
  image = `https://res.cloudinary.com/emergent/image/upload/v1683906391/ghbg_lnb8t1.png`,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>Hyperspace</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/images/logoHyperBlack.png" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta
        property="og:logo"
        content={`https://res.cloudinary.com/emergent/image/upload/v1683906391/ghbg_lnb8t1.png`}
      ></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@atomprotocol_" />
      <meta name="twitter:creator" content="@hamevs" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
