import Head from 'next/head';

export default function HeadTags() {
  return (
    <Head>
      <title>Nguyen Dai</title>
      <link rel="icon" href="/favicon.ico" />
      <script src="/bs4/jquery.js"></script>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="./bs4/bootstrap.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="style.css" />
      <script src="/libs/typed.js"></script>
      <script src="/libs/particles.js"></script>
      <script src="/libs/app.js"></script>
      <script src="/js/main.js"></script>
      <script src="/bs4/bootstrap.js"></script>
      <script src="/bs4/popper.js"></script>
    </Head>
  );
}
