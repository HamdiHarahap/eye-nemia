import LoginForm from '../../components/forms/auth/LoginForm';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const LoginPage = () => {
  useDocumentTitle('Login | EyeNemia');

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FFF5F8]">
      <div className="w-full max-w-md bg-white py-10 px-8 rounded-2xl shadow-md">
        <div className="flex flex-col gap-1 mb-5">
          <h1 className="text-2xl font-bold">EyeNemia</h1>
          <p className="text-sm text-black/45">
            Masuk untuk melanjutkan ke akun anda
          </p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
