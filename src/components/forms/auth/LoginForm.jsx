import Input from '../../ui/input';
import Button from '../../ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={() => {}} className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <Input
          label="Username"
          name="username"
          type="username"
          placeholder="Masukkan username"
          value={form.username}
          onChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Masukkan password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">Masuk</Button>
      <p className="text-sm text-center text-black/45">
        Belum punya akun?{' '}
        <Link to="/register" className="text-[#FF93B0] font-medium">
          Daftar
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
