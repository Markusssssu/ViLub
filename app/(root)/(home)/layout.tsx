import React, { Children, ReactNode } from 'react'

// Components
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'


const HomeLayout = ({children} : {children: ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar/>

        <div className='flex'>
            <Sidebar/>

            <section className='flex min-h-scree flex-1 flex-col px-6 pb-6 pt-28 bg-dark-1
             max-md:pb-14 sm:px-14'>
                <div className='w-full'>
                    {children}
                </div>
            </section>
        </div>
    </main>
  )
}

export default HomeLayout