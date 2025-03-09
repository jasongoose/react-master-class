import {useForm} from "react-hook-form";

type FormData = {
  email?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  password?: string;
  passwordConfirmation?: string;
  extraError?: string;
}

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@naver.com$/;

function TodoList() {
  const {register, watch, handleSubmit, formState, setError} = useForm<FormData>({
    defaultValues: {
      email: "@naver.com",
    }
  });

  const onValid = (formData: FormData) => {
    if (formData['password'] !== formData['passwordConfirmation']) {
      setError('passwordConfirmation', {
        message: 'Password must match!',
      }, {
        shouldFocus: true,
      })
    }
    setError('extraError', {
      message: 'Extra Error',
    })
  }

  const onInvalid = (reason: any) => {
    console.log('reason:: ', reason);
  }

  console.log('formState:: ', formState['errors']);

  return (
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '280px',
        margin: 'auto',
      }} action="" onSubmit={handleSubmit(onValid, onInvalid)}>

        <input {...register("email", {
          required: "Email is required",
          pattern: {
            value: EMAIL_REGEX,
            message: "Only naver.com email address is allowed."
          }
        })} placeholder="Email"/>

        <small style={{color: 'red'}}>
          {formState['errors']?.['email']?.['message'] as string ?? ''}
        </small>

        <input {...register("firstName", {required: true})} placeholder="First Name"/>

        <input {...register("lastName", {required: true})} placeholder="Last Name"/>

        <input {...register("userName", {
          required: true,
          // validate(value) {
          //   return value && value.includes('nico') ? "no nico allowed" : true;
          // }
          validate: {
            noNico(value) {
              return value && value.includes('nico') ? "no nico allowed" : true;
            },
            noNick(value) {
              return value && value.includes('nick') ? "no nick allowed" : true;
            }
          }
        })} placeholder="User Name"/>

        <small style={{color: 'red'}}>
          {formState['errors']?.['userName']?.['message'] as string ?? ''}
        </small>

        <input {...register("password", {
          required: "password is required",
          minLength: {
            value: 5,
            message: "Password must be at least 6 characters"
          },
        })} placeholder="Password"/>


        <small style={{color: 'red'}}>
          {formState['errors']?.['password']?.['message'] as string ?? ''}
        </small>

        <input {...register("passwordConfirmation", {required: true, minLength: 5})}
               placeholder="Password Confirmation"/>

        <small style={{color: 'red'}}>
          {formState['errors']?.['passwordConfirmation']?.['message'] as string ?? ''}
        </small>

        <button>Add</button>

        <small style={{color: 'red'}}>
          {formState['errors']?.['extraError']?.['message'] as string ?? ''}
        </small>

      </form>
  );
}

export default TodoList;