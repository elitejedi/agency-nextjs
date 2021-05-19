export default function Page(props: { message: {} }) {
  return <h1 className="text-gray-900 m-2 p-2">{props.message}</h1>;
}

export async function getStaticProps({ locale }) {
  let message = locale === "en" ? "Page not found" : locale === "fr" ? "En francais" : "";
  return {
    props: { message },
  };
}
