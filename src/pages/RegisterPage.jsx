import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { registerUser } from '../store/slices/auth/thunks';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const schema = yup.object({
  email: yup
    .string()
    .required('Ingresa tu email')
    .matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
      message: 'Email invalido',
    }),
  password: yup.string().required(),
  username: yup.string().required().min(4),
});

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password, username }) => {
    try {
      await dispatch(
        registerUser({ email, password, username })
      ).unwrap();
      navigate('/');
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  };
  return (
    <form
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="login100-form-title mb-3">Chat - Registro</span>
      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          placeholder="Nombre"
          {...register('username')}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          placeholder="Email"
          {...register('email')}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col text-right">
          <Link to="../login" className="txt1">
            Ya tienes cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button disabled={!isDirty} className="login100-form-btn">
          Crear cuenta
        </button>
      </div>
    </form>
  );
}

export default RegisterPage;
