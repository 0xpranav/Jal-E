import React, {useState, useEffect} from 'react'
import{Loader, Card, FormField} from '../components';

const Home = () => {

const[loading, setLoading] = useState(false);
const[allPosts, setAllPosts] = useState(null);



  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className=' font-extrabold text-[#222328] text-[32px]'>Showcase Jal-E</h1>
        <p className='mt-2 text-[#666e75] text-[14px] max-w-[500px]'>browse through a collection of visually stunning AI images</p>
      </div>
      <div className='mt-16'>
        <FormField/>
        <div className='mt-10'>
            {loading ? (
                <div className='flex justify-center items-center'>
                    <Loader/>
                </div>
            ):(
                <>
                  {}
                </>
            )}
        </div>
      </div>
    </section>
  )
}

export default Home