import Button from '../components/ui/button';
import useDocumentTitle from '../hooks/useDocumentTitle';
import MainLayout from '../layout';
import ProfileForm from '../components/forms/ProfileForm';
import { useNavigate } from 'react-router-dom';
import { getUserLogged, logout } from '../services/authentication';
import { useEffect, useState } from 'react';

const ProfilePage = () => {
  const navigate = useNavigate();
  useDocumentTitle('Profil | EyeNemia');

  const [user, setUser] = useState({
    name: '',
    username: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserLogged();
        console.log(response);

        setUser({
          name: response.user.name,
          username: response.user.username,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      alert('Berhasil logout');
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <MainLayout>
      <section className="min-h-screen flex flex-col items-center justify-center gap-10 py-28 max-[520px]:items-start max-[520px]:px-4">
        <div className="flex items-center justify-between w-[55%] max-[520px]:w-full">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold">Profil Saya</h2>
            <p>Kelola informasi pribadi dan data kesehatan anda</p>
          </div>
          <div className="w-[15%] max-[520px]:w-[40%]">
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
        <div className="flex gap-12 justify-between items-center w-[55%] bg-white p-8 max-[520px]:p-5 rounded-lg drop-shadow-lg max-[520px]:w-full">
          <div className="flex items-center justify-center bg-[#FF93B0]/40 p-6 max-[520px]:p-3 rounded-full shadow-lg">
            <img src="/assets/icons/profile.svg" alt="" className="w-12" />
          </div>
          <div className="flex flex-col gap-1 flex-1 ">
            <p className="text-2xl font-semibold">{user.name}</p>
            <span className="font-light ">{user.username}</span>
            <div className="w-32">
              <p className="bg-[#FF93B0]/40 text-[#FF94B0] text-center rounded-full text-sm font-semibold py-1">
                Mahasiswa
              </p>
            </div>
          </div>
          <div>
            <Button variant="secondary">Edit</Button>
          </div>
        </div>
        <div className="flex w-[55%] max-[520px]:w-full bg-white p-8 rounded-lg drop-shadow-lg flex-col gap-8">
          <h3 className="text-xl font-semibold">Informasi Pribadi</h3>
          <div className="flex flex-col gap-3">
            <ProfileForm />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;
