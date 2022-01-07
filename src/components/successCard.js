import React, { useCallback } from 'react'
import { ReactComponent as CloseIcon } from '../assets/close.svg'
import { ReactComponent as CoolIcon } from '../assets/cool.svg'

function SuccessCard({ onBack }) {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex justify-center items-center'>
        <div className='relative p-12 rounded-xl shadow-2xl bg-white min-h-full flex items-center justify-center'>
          <CloseIcon className='absolute inset-y-2 right-2 cursor-pointer' />
          <div className='space-y-8 w-96'>
            <div>
              <CoolIcon className='mx-auto w-14 h-14' />
              <h2 className='mt-6 text-center text-2xl font-extrabold text-gray-900'>
                Your donation has been successfully sent to the author
              </h2>
            </div>

            <div className='flex pt-3'>
              <button
                type='button'
                className='mr-6 p-2 border rounded-lg w-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={() => {
                  onBack()
                }}
              >
                Cancel
              </button>
              <button
                type='button'
                className={`p-2 text-white rounded-lg bg-indigo-500 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border`}
                onClick={() => {
                  onBack()
                }}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessCard
