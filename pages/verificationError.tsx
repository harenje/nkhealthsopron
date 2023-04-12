import EmailVerification from "../components/EmailVerification";

const EmailRequestError = () => {
  return (
    <EmailVerification
      text="A bejelentkezési link már fel lett használva vagy lejárt, kérlek kérj
          új bejelentkezési e-mailt."
    />
  );
};

export default EmailRequestError;
