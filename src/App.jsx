import './App.css'
import RandomUsers from './RandomUsers'

function App() {

  return (
    <>
     <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center '>
        <div style={{width:'700px',height:'600px'}} className='bg-light border rounded-1'>
        <RandomUsers/>
        </div>
     </div>
    </>
  )
}

export default App
