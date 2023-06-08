import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/slices/auth/thunks';
import Swal from 'sweetalert2';

const schema = yup.object({
  email: yup
    .string()
    .required('Ingresa tu email')
    .matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
      message: 'Email invalido',
    }),
  password: yup.string().required(),
  rememberme: yup.boolean(),
});

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      email: localStorage.getItem('email') || '',
      password: '',
      rememberme: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (fields) => {
    try {
      if (fields.rememberme) {
        localStorage.setItem('email', fields.email);
      }
      if (!fields.rememberme) {
        localStorage.removeItem('email');
      }
      await dispatch(
        loginUser({ email: fields.email, password: fields.password })
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
      <span className="login100-form-title mb-3">Chat - Ingreso</span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
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
        <div className="col">
          <input
            className="input-checkbox100"
            id="ckb1"
            type="checkbox"
            {...register('rememberme')}
          />
          <label htmlFor="ckb1" className="label-checkbox100">
            Recordarme
          </label>
        </div>

        <div className="col text-right">
          <Link to="../register" className="txt1">
            Nueva cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button disabled={!isDirty} className="login100-form-btn">
          Ingresar
        </button>
      </div>
    </form>
  );
}

export default LoginPage;
