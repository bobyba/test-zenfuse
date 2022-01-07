import React, { useCallback } from 'react'
import RangeInput from './components/rangeInput/index'
import Switcher from './components/switcher/index'
import { ReactComponent as ZefuIcon } from './assets/zefu.svg'
import { ReactComponent as StarIcon } from './assets/star.svg'
import { ReactComponent as CloseIcon } from './assets/close.svg'
import { ReactComponent as MetaIcon } from './assets/metamask.svg'
import { ReactComponent as AlertIcon } from './assets/alert.svg'
import { ReactComponent as CoolIcon } from './assets/cool.svg'
import { useSetState } from 'ahooks'

function App() {
  const [state, setState] = useSetState({
    inputZefu: null,
    zefuWallet: null,
    inputFiat: null,
    rateZefu: 0.005,
    statusAuth: false,
    errorAuthStatus: false,
    statusConnect: false
  })

  const disabledClass = !state.statusAuth && 'pointer-events-none'

  const onAuthBtn = () =>
    !state.statusAuth && !state.errorAuthStatus
      ? setState({ errorAuthStatus: true })
      : setState({ statusAuth: true, errorAuthStatus: false, zefuWallet: 132.31 })

  const labelAuthBtn = useCallback(
    () =>
      state.statusAuth ? (
        <div className='flex gap-3 items-center'>
          0x124e...ed95
          <CoolIcon />
        </div>
      ) : state.errorAuthStatus ? (
        <div>Connecting Metamask</div>
      ) : (
        <div>Connect Metamask</div>
      ),
    [state.statusAuth, state.errorAuthStatus]
  )

  const pHandle = (v) => (v < 0 ? 0 : v.toString().match(/^\d+\.?\d{0,2}/))

  const inputHandleZE = (e) =>
    setState({ inputZefu: pHandle(e.target.value), inputFiat: pHandle(e.target.value * state.rateZefu) })

  const inputHandleFI = (e) =>
    setState({ inputZefu: pHandle(e.target.value / state.rateZefu), inputFiat: pHandle(e.target.value) })

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex justify-center items-center'>
        <div className='relative p-12 rounded-xl shadow-2xl bg-white min-h-full flex items-center justify-center'>
          <CloseIcon className='absolute inset-y-2 right-2 cursor-pointer' />
          <div className='space-y-8 w-96'>
            <div>
              <StarIcon className='mx-auto w-auto' />
              <h2 className='mt-6 text-center text-2xl font-extrabold text-gray-900'>Donate the author</h2>
              <p className='mt-2 text-center text-sm text-gray-600'>An easy way to support and say thank you.</p>
            </div>
            <div className='flex flex-col w-full items-center'>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none'>
                  <MetaIcon />
                </div>
                <button
                  type='button'
                  className={`py-2 pr-7 pl-14 border rounded-lg shadow-md hover:bg-gray-50  ${
                    state.errorAuthStatus && 'ring-2 ring-offset-2 ring-yellow-500'
                  }`}
                  onClick={onAuthBtn}
                >
                  {labelAuthBtn()}
                </button>
              </div>
              <div className={`${!state.errorAuthStatus && 'invisible'} flex mt-3`}>
                <AlertIcon className='w-5' />
                <div className='text-xs w-80 text-center'>
                  Non-Ethereum browser detected. You should consider trying MetaMask!
                </div>
              </div>
            </div>
            <div className='space-y-6'>
              <div>
                <div className={`flex justify-end gap-1 text-xs font-medium text-gray-700 `}>
                  <div>Balance</div>
                  <div>{state.zefuWallet || '0.00'}</div>
                  <div>ZEFU</div>
                </div>
                <div className='mt-1 relative rounded-lg border'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <ZefuIcon />
                  </div>
                  <input
                    type='text'
                    name='price'
                    value={state.inputZefu}
                    id='price'
                    className={`w-full py-3 pl-10 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${disabledClass}`}
                    placeholder='0.00'
                    onChange={inputHandleZE}
                    pattern={'/^-?d*[.]?d*$/'}
                  />
                  <div className='absolute flex inset-y-0 right-0'>
                    <div className='border'></div>
                    <input
                      type='text'
                      name='price'
                      value={state.inputFiat}
                      id='price'
                      className={`w-32 py-3 pr-3 text-right ${disabledClass}`}
                      placeholder='0.00'
                      onChange={inputHandleFI}
                      pattern={'/^-?d*[.]?d*$/'}
                    />
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  id='about'
                  name='about'
                  rows={3}
                  className={`p-3 block w-full border bg-gray-300 rounded-lg resize-none focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${disabledClass}`}
                  placeholder='Say something nice...'
                />
              </div>

              <div className='flex pt-3'>
                <button
                  type='button'
                  className='mr-6 p-2 border rounded-lg w-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Cancel
                </button>
                <button
                  type='button'
                  className={`${
                    disabledClass && 'bg-gray-300 text-gray-400 border-none pointer-events-none'
                  } p-2 rounded-lg w-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border`}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
