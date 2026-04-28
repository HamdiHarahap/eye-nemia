import { useState } from 'react';
import Input from '../ui/input';

const ProfileForm = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={() => {}}>
      <div className="flex flex-col gap-3">
        <Input
          label="Nama Lengkap"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          label="Umur"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        <Input
          label="Tinggi Badan (cm)"
          name="height"
          value={form.height}
          onChange={handleChange}
        />
        <Input
          label="Berat Badan (kg)"
          name="weight"
          value={form.weight}
          onChange={handleChange}
        />
        <Input
          label="Status"
          name="name"
          value={form.status}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default ProfileForm;
