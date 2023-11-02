import { ToastContainer } from 'react-toastify'

import Router from './routes/Router'
import Spinner from './components/Spinner'
import useLoading from './hooks/useLoading'

export default function App() {
  const { loading } = useLoading()
  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        // hideProgressBar={false}
        // newestOnTop={false}
        closeOnClick
        rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
        theme="light" />
    </>
  )

}
