import {useContext} from 'react'

// Signout
import { LoginContext } from "../context/LoginContext";

const SignoutBtn = () => {

  const {signOut} = useContext(LoginContext)

  return (
    <button role="button" onClick={signOut} className='w-[100px] bg-primary text-white rounded-md p-1'>
        Logud
    </button>
  )
}

export default SignoutBtn