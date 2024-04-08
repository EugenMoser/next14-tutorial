interface DocsProps {
  params: { slug: string[] };
}

function Docs({ params }: DocsProps): JSX.Element {
  console.log("slug", params.slug);
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept{" "}
        {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  }
  return <h1>Docs Home Page</h1>;
}

export default Docs;
