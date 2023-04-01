import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['devanagari'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export default function Home() {


  const buttons = [
    { text: 'Next.js', href: 'https://nextjs.org/', banner: '/nextjs.png' },
    { text: 'Tailwindcss', href: 'https://tailwindcss.com/', banner: '/tailwind.png' },
    { text: 'Typescript', href: 'https://www.typescriptlang.org/', banner: '/typescript.jpg' },
  ]

  return (
    <>
      <Head>
        <title>Next.js | Typescript | Tailwindcss</title>
      </Head>
      <div
        style={poppins.style}
        className='flex h-screen flex-col items-center pt-10 sm:mb-10 md:mb-10'
      >
        <h1 className='text-4xl font-extrabold text-white'>Template NEXT.js</h1>
        <section className='flex flex-row mt-10 sm:mb-8 space-x-4 grid-flow-rows gap-4 sm:grid md:grid md:grid-cols-2 sm:space-x-0 md:space-x-0 sm:grid-cols-1 lg:space-x-0'>
          {buttons.map((item, index) => (
            <Link key={index} href={item.href} target='_blank'>
              <div className="flex flex-col items-center w-full max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
                <div className='w-auto h-48 overflow-hidden'>
                  <Image
                    className="w-96 h-48 object-cover hover:scale-110 transition-all"
                    src={item.banner}
                    alt={item.text}
                    width={500}
                    height={500}
                  />
                </div>
                <h3 className="flex font-bold text-gray-900 text-xl p-2">{item.text}</h3>
              </div>
            </Link>
          ))}
        </section>
      </div >
    </>
  );
}
