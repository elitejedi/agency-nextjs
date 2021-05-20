import Head from "next/head";
import * as Sentry from "@sentry/nextjs";

export default function Home(props: { message: any }) {
  return (
    <div className="">
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex">
        <h1 className="font-thin text-4xl">{props.message}</h1>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded"
          type="button"
          onClick={() => {
            Sentry.captureMessage(props.message);
            Sentry.captureException(new Error(props.message));
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  let message = locale === "en" ? "Hello" : locale === "fr" ? "Bonjour" : "";
  return {
    props: { message },
  };
}
