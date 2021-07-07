type SignupUser = {
  email: string;
  password: string;
  userName: string;
  firstName: string;
  lastName: string;
};

type SignupUserDetails = {
  user: SignupUser;
  setFormError: React.Dispatch<React.SetStateAction<SignupUser>>;
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = new RegExp("[a-z][0-9]*@gmail.com");
  return emailRegex.test(email);
};

const isValidPassword = (password: string): boolean => {
  const passwordRegex = new RegExp("[0-9]+");
  return password.length > 6 && passwordRegex.test(password);
};

export const signupFormValidation = ({
  user,
  setFormError,
}: SignupUserDetails): boolean => {
  const { firstName, lastName, userName, email, password } = user;
  setFormError({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });
  let validationSuccess = true;
  if (!email || !isValidEmail(email)) {
    setFormError((error) => ({ ...error, email: "Please enter valid email" }));
    validationSuccess = false;
  }
  if (!password || !isValidPassword(password)) {
    setFormError((error) => ({
      ...error,
      password: "Please enter valid password",
    }));
    validationSuccess = false;
  }
  if (!userName) {
    setFormError((error) => ({
      ...error,
      userName: "Please enter valid userName",
    }));
    validationSuccess = false;
  }
  if (!firstName) {
    setFormError((error) => ({
      ...error,
      firstName: "Please enter valid firstName",
    }));
    validationSuccess = false;
  }
  if (!lastName) {
    setFormError((error) => ({
      ...error,
      lastName: "Please enter valid lastName",
    }));
    validationSuccess = false;
  }
  return validationSuccess;
};
