type LoginUser = {
  email: string;
  password: string;
};

type LoginUserDetails = {
  user: LoginUser;
  setFormError: React.Dispatch<React.SetStateAction<LoginUser>>;
};

export const formValidation = ({
  user,
  setFormError,
}: LoginUserDetails): boolean => {
  setFormError({ email: "", password: "" });
  let validationSuccess = true;

  if (!user.email) {
    setFormError((error) => ({ ...error, email: "Please enter valid email" }));
    validationSuccess = false;
  }

  if (!user.password) {
    setFormError((error) => ({
      ...error,
      password: "Please enter valid password",
    }));
    validationSuccess = false;
  }

  return validationSuccess;
};
