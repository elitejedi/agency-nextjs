function Error({ code, locale }) {
  return <p>{code ? `An error ${code} occurred on serve with locale ${locale}` : "An error occurred on client"}</p>;
}

Error.getInitialProps = ({ res, err, locale }) => {
  const code = res ? res.code : err ? err.code : 404;
  return { code, locale };
};

export default Error;
