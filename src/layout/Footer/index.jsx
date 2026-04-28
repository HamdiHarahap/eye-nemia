import { Link } from 'react-router-dom';
import Button from '../../components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg px-28 pt-16 pb-8 max-[520px]:px-4">
      <div className="flex justify-between gap-20 mb-12 max-[520px]:flex-col">
        <div className="flex flex-col gap-4 w-[40%]">
          <h2 className="text-xl font-bold text-[#FF93B0]">EyeCare</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Platform deteksi dini anemia untuk membantu anda hidup lebih sehat
            dengan edukasi dan rekomendasi yang tepat.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Navigasi</h3>
          <Link to="/" className="text-sm text-black/45 hover:text-[#FF93B0]">
            Beranda
          </Link>
          <Link
            to="/screening"
            className="text-sm text-black/45 hover:text-[#FF93B0]"
          >
            Screening
          </Link>
          <Link
            to="/history"
            className="text-sm text-black/45 hover:text-[#FF93B0]"
          >
            Riwayat
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Tips Cepat</h3>
          <p className="text-sm text-black/45">
            Konsumsi makanan kaya zat besi seperti bayam dan daging merah.
          </p>
          <p className="text-sm text-black/45">
            Hindari minum teh/kopi setelah makan.
          </p>
          <p className="text-sm text-black/45">
            Istirahat cukup untuk menjaga kesehatan tubuh.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Mulai Sekarang</h3>
          <p className="text-sm text-gray-500">
            Cek risiko anemia anda sekarang dan dapatkan rekomendasi personal.
          </p>
          <div className="w-52">
            <Button url="/screening">Mulai Screening</Button>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 pt-6 flex justify-center items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} EyeNemia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
