import axios from 'axios'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '../config/constans'
import Context from '../contexts/Context'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const initialForm = { email: '', password: '' }

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(initialForm)
  const { setDeveloper } = useContext(Context)

  const handleUser = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value })

  const handleForm = async (event) => {
    event.preventDefault()

    if (!user.email.trim() || !user.password.trim()) {
      return window.alert('Email y password son obligatorios.')
    }

    if (!emailRegex.test(user.email)) {
      return window.alert('El formato del email no es correcto!')
    }

    try {
      const { data } = await axios.post(ENDPOINT.login, user)

      window.sessionStorage.setItem('token', data.token)

      setDeveloper({
        email: data.user.email,
        rol: data.user.rol,
        lenguage: data.user.lenguage
      })

      window.alert('Usuario identificado con éxito 😀.')
      setUser(initialForm)
      navigate('/perfil')
    } catch (error) {
      console.error(error.response?.data || error)
      window.alert(`${error.response?.data?.message || 'Error en login'} 🙁.`)
    }
  }

  return (
    <form onSubmit={handleForm} className='col-10 col-sm-6 col-md-3 m-auto mt-5'>
      <h1>Iniciar Sesión</h1>
      <hr />
      <div className='form-group mt-1'>
        <label>Email address</label>
        <input
          value={user.email}
          onChange={handleUser}
          type='email'
          name='email'
          className='form-control'
           placeholder='Ingresa tu email'
          autoComplete="mail"
        />
      </div>
      <div className='form-group mt-1'>
        <label>Password</label>
        <input
          value={user.password}
          onChange={handleUser}
          type='password'
          name='password'
          className='form-control'
          placeholder='Ingresa tu password'
          autoComplete="current-password"
        />
      </div>
      <button type='submit' className='btn btn-light mt-3'>Iniciar Sesión</button>
    </form>
  )
}

export default Login
