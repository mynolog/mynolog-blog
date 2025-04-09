'use client'

import { ToastContainer, Slide } from 'react-toastify'

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      draggable
      theme="light"
      transition={Slide}
      className="text-sm font-bold"
    />
  )
}
