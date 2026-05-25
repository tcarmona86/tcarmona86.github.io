import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '../config/constans'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

// Estado inicial vacío
const initialForm = {
  email: '',
  password: '',
  rol: '',
  lenguage: ''
}

const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(initialForm)
  const [error, setError] = useState('')

  const handleUser = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value })

  const handleForm = async (event) => {
    event.preventDefault()
    setError('')


    if (!user.email.trim() || !user.password.trim() || !user.rol || !user.lenguage) {
      return setError('Todos los campos son obligatorios.')
    }

    if (!emailRegex.test(user.email)) {
      return setError('El formato del email no es correcto.')
    }

    try {
      await axios.post(ENDPOINT.users, user)
      window.alert('Usuario registrado con éxito 😀.')
      setUser(initialForm) 
      navigate('/login')
    } catch (err) {
      console.error(err.response?.data || err)
      setError(err.response?.data?.message || 'Error al registrar usuario.')
    }
  }

  useEffect(() => {
    if (window.sessionStorage.getItem('token')) {
      navigate('/perfil')
    }
  }, [navigate])

  return (
    <form onSubmit={handleForm} className='col-10 col-sm-6 col-md-3 m-auto mt-5'>
      <h1>Registrar nuevo usuario</h1>
      <hr />

      {/* Mensaje de error visible */}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className='form-group mt-1'>
        <label>Email address</label>
        <input
          value={user.email}
          onChange={handleUser}
          type='email'
          name='email'
          className='form-control'
          placeholder='Ingresa tu email'
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
        />
      </div>

      <div className='form-group mt-1'>
        <label>Rol</label>
        <select
          value={user.rol}
          onChange={handleUser}
          name='rol'
          className='form-select'
        >
          <option value='' disabled>Seleccione un rol</option>
          <option value='Full Stack Developer'>Full Stack Developer</option>
          <option value='Frontend Developer'>Frontend Developer</option>
          <option value='Backend Developer'>Backend Developer</option>
        </select>
      </div>

      <div className='form-group mt-1'>
        <label>Lenguage</label>
        <select
          value={user.lenguage}
          onChange={handleUser}
          name='lenguage'
          className='form-select'
        >
          <option value='' disabled>Seleccione un Lenguage</option>
          <option value='JavaScript'>JavaScript</option>
          <option value='Python'>Python</option>
          <option value='Ruby'>Ruby</option>
        </select>
      </div>

      <button type='submit' className='btn btn-light mt-3'>Registrarme</button>
    </form>
  )
}

export default Register
