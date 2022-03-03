import { Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

export const Login = () => {
  const schema = yup
    .object({
      email: yup.string().nullable().email.required("Email is required"),
      password: yup
        .string()
        .min(8)
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    })
    .required();

  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, nill, 2));
        resolve();
      }, 1000);
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Text>Log in</Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => {
            return (
              <Form.Control
                {...field}
                {...fieldState}
                error={fieldState.error}
                placeholder="Enter your Email"
              />
            );
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => {
            <Form.Control
              {...field}
              {...fieldState}
              error={fieldState.error}
              placeholder="Enter your Password"
              type="password"
            />;
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Controller
          control={control}
          name="remember me"
          render={({ field, fieldState }) => {
            <Form.Check
              {...field}
              {...fieldState}
              error={fieldState.error}
              label="Remember me"
            />;
          }}
        />
      </Form.Group>

      <Button variant="primary" isLoading={formState.isSubmiting} type="submit">
        Sign in
      </Button>

      <Form.Text>Forgot password?</Form.Text>
    </Form>
  );
};

export default Login;
