import React, {MouseEvent} from 'react'

function Rules() {

  const showRules = (e: React.MouseEvent<HTMLElement>) => {
    
  }

  return (
    <div className='flex justify-end mr-6 mt-20'>
        <button onClick={showRules} className='text-white border-2 border-header-outline py-1 px-7 rounded-md'>Rules</button>
    </div>
  )
}

export default Rules