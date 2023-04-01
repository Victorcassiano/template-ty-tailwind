import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-no-repeat w-screen h-[100%] sm:h-auto bg-gradient-to-b from-cyan-500 to-blue-500'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
