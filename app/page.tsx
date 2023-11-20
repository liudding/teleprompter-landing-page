"use client"
import { useRef } from 'react'
import Image from 'next/image'

export default function Home() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <>
      <div ref={ref} className="container hidden md:block">
        <div className="split left" onMouseEnter={() => {
          ref.current?.classList.add('hover-left')
        }} onMouseLeave={() => {
          ref.current?.classList.remove('hover-left')
        }}>
          <div className='main-content'>
            <h1>扫码立即使用</h1>

            <Image src="/minicode.jpg" alt="teleprompter Logo" className="mt-4"
              width={200}
              height={200}
              priority
            />
          </div>

        </div>

        <div onMouseEnter={() => {
          ref.current?.classList.add('hover-right')
        }} onMouseLeave={() => {
          ref.current?.classList.remove('hover-right')
        }} className="split right">
          <div className='main-content'>
            <h1>浅纸提词器</h1>
            <p>一款简单好用且免费的提词器小程序</p>
            {/* <a href="#" className="button">Read More</a> */}

            <div className='mt-10 flex'>
              <div className='px-1'>
                <div className='border border-white px-2 py-1 rounded-lg text-sm'>手机</div>
              </div>
              <div className='px-1'><div className='border border-white px-2 py-1 rounded-lg text-sm'>平板</div></div>

              <div className='px-1'> <div className='border border-white px-2 py-1 rounded-lg text-sm'>电脑</div></div>

            </div>

          </div>

        </div>
      </div>

      <div className='container block md:hidden'>
        <div className="small-screen right">
          <div className='main-content'>
            <h1>浅纸提词器</h1>
            <p>一款简单免费的提词器小程序</p>

            <Image src="/minicode.jpg" alt="teleprompter Logo" className="mt-8"
              width={200}
              height={200}
              priority
            />
          </div>

        </div>

      </div>
    </>

  )
}
