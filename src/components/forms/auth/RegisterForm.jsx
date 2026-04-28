import Input from '../../ui/input';
import Button from '../../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../../../services/authentication';

const RegisterForm = () => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirm) {
      alert('Password tidak cocok');
      return;
    }

    try {
      const response = await register(form.name, form.username, form.password);

      console.log(response);
      alert('Register berhasil');

      setForm({
        name: '',
        username: '',
        password: '',
        confirm: '',
      });

      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
