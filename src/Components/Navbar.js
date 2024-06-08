
import Logo from './images.png'
import {Link} from 'react-router-dom'
const Navbar=() =>{

  return (
    <div className='flex border'>
      <img className='w-[50px]' src={Logo} alt=" "/>
      <Link to='/' className='text-blue-500 text-3xl font-bold mx-6'>Home</Link>
      <Link to='/watchlist' className='text-blue-500 text-3xl font-bold'>Watchlist</Link>
    </div>
    
  )
}

export default Navbar