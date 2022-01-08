import React, { useCallback } from 'react'
import { ReactComponent as CloseIcon } from '../assets/close.svg'
import { ReactComponent as DonateIcon } from '../assets/donate.svg'
import { ReactComponent as HeaderIcon } from '../assets/header.svg'
import { ReactComponent as ZefuIcon } from '../assets/zefu.svg'

function SuccessCard({ onBack, data }) {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex justify-center items-center'>
        <div className='relative p-12 rounded-xl shadow-2xl bg-white min-h-full flex items-center justify-center'>
          <CloseIcon className='absolute inset-y-2 right-2 cursor-pointer' />
          <div className='space-y-8 w-96'>
            <div>
              <DonateIcon className='mx-auto ' />
              <h2 className='mt-6 text-center text-2xl font-extrabold text-gray-900'>
                Your donation has been successfully sent to the author
              </h2>
            </div>

            <div className='overflow-auto p-3 rounded-xl border shadow-sm bg-white flex-col max-h-60'>
              <div className=''>
                <HeaderIcon />
              </div>

              <div className='p-3 rounded-xl border bg-gray-300 flex-col space-y-4'>
                <div className='flex-col space-y-1'>
                  <div className='text-xs font-medium text-gray-700'>Donate</div>
                  <div className='flex justify-start items-center gap-2 font-medium'>
                    <ZefuIcon />
                    <div>{data.zefu}</div>
                    <div className='font-medium text-gray-700'>{`($${data.fiat})`}</div>
                  </div>
                </div>
                <div className='flex-col '>
                  <div className='text-xs font-medium text-gray-700'>Message</div>
                  <span className='font-medium break-all '>{data.message}</span>
                </div>
              </div>
            </div>

            <div className='flex'>
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
