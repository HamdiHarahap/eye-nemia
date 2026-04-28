import RegisterForm from '../../components/forms/auth/RegisterForm';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const RegisterPage = () => {
  useDocumentTitle('Register | EyeNemia');

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FFF5F8]">
      <div className="w-full max-w-md bg-white py-10 px-8 rounded-2xl shadow-lg border border-black/5">
        <div className="flex flex-col gap-1 mb-5">
          <h1 className="text-2xl font-bold">Daftar</h1>
          <p className="text-sm text-black/45">
            Buat akun baru untuk mulai screening
          </p>
        </div>
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
