import Button from '../components/ui/button';
import useDocumentTitle from '../hooks/useDocumentTitle';

const NotFoundPage = () => {
  useDocumentTitle('Halaman Tidak Ditemukan | EyeNemia');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f4f6] px-6 text-center">
      <h1 className="text-7xl font-bold text-[#FF93B0] mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-gray-500 max-w-md mb-6">
        Oops! Halaman yang kamu cari tidak tersedia atau sudah dipindahkan. Yuk
        kembali ke beranda dan lanjutkan pengecekan kesehatanmu.
      </p>
      <div className="w-[20%]">
        <Button url="/">Kembali ke Beranda</Button>
      </div>
      <div className="mt-12 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} EyeNemia. All rights reserved.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
