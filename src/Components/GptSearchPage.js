import React from 'react'
import GptSearch from './GptSearch'
import GptSearchResults from './GptSearchResults'
import { BG_IMG } from '../utils/constant'

const GptSearchPage = () => {
    return (
        <div>
            <img className="absolute -z-10 " alt="bg"
                src={BG_IMG}
            />
            <div className='flex items-center pt-[10%] flex-col w-screen h-screen' >

                <GptSearch />
                <GptSearchResults />
            </div>
        </div>
    )
}

export default GptSearchPage
