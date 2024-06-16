import Header from './Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className=' mx-2 md:mx-4 lg:mx-auto lg:max-w-6xl'> 
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default Root