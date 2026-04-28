import Input from '../../ui/input';
import Button from '../../ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: '',
    username: '',
    password: '',
    confirm: '',
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
          label="Nama Lengkap"
          name="name"
          type="text"
          placeholder="Masukkan nama lengkap"
          value={form.name}
          onChange={handleChange}
        />
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
        <Input
          label="Konfirmasi Password"
          name="confirm"
          type="password"
          placeholder="Ulangi password"
          value={form.confirm}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">Daftar</Button>
      <p className="text-sm text-center text-black/45">
        Sudah punya akun?{' '}
        <Link to="/login" className="text-[#FF93B0] font-medium">
          Masuk
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
