import Button from '../components/ui/button';
import useDocumentTitle from '../hooks/useDocumentTitle';
import MainLayout from '../layout';

const HomePage = () => {
  useDocumentTitle('Beranda | EyeNemia');

  const benefitList = [
    {
      icon: '/assets/icons/verified.svg',
      title: 'Deteksi Dini',
      desc: 'Identifikasi risiko anemia sejak dini berdasarkan data anda',
    },
    {
      icon: '/assets/icons/book.svg',
      title: 'Edukasi Kesehatan',
      desc: 'Pelajari tentang anemia dan cara pencegahannya',
    },
    {
      icon: '/assets/icons/shine.svg',
      title: 'Rekomendasi Personal',
      desc: 'Dapatkan saran kesehatan yang disesuaikan untuk anda',
    },
  ];

  return (
    <MainLayout>
      <img src="" alt="" />
      <section className="px-28 flex justify-between items-center min-h-screen max-[520px]:px-4 max-[520px]:flex-col max-[520px]:items-start max-[520px]:py-32">
        <div className="w-[50%] max-[520px]:w-full flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-bold">
              Cek Risiko Anemia <br /> Anda{' '}
              <span className="text-[#FF93B0]">Sejak Dini</span>
            </h1>
            <p className="">
              Deteksi dini risiko anemia berdasarkan pola makan, gejala, dan
              gaya hidup anda. Mulai langkah awal menuju hidup yang lebih sehat.
            </p>
          </div>
          <div className="flex items-center gap-5 w-[70%] max-[520px]:w-full">
            <Button url="/screening">Mulai Screening</Button>
            <Button variant="secondary" url="/riwayat">
              Lihat Riwayat
            </Button>
          </div>
          <div className="flex gap-16 text-center max-[520px]:mb-10">
            <div>
              <h3 className="text-3xl font-bold text-[#FF93B0]">10K+</h3>
              <p className="text-gray-500">Pengguna</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#FF93B0]">95%</h3>
              <p className="text-gray-500">Akurasi</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#FF93B0]">24/7</h3>
              <p className="text-gray-500">Layanan</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/assets/images/hero.png" alt="" className="w-110" />
        </div>
      </section>
      <section className="px-28 bg-white min-h-screen flex flex-col justify-center gap-20 max-[520px]:px-4 max-[520px]:py-16">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-3xl font-bold">
            Mengapa Screening Anemia Penting?
          </h2>
          <p className="text-lg text-gray-500">
            Anemia dapat mempengaruhi produktivitas dan kualitas hidup anda.
            Deteksi dini adalah kunci pencegahan.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 max-[520px]:grid-cols-1">
          {benefitList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 shadow-md p-5 rounded-lg h-full hover:shadow-xl hover:-translate-y-1 transform duration-300"
            >
              <div className="rounded-lg bg-[#FF93B0] w-fit p-2 flex items-center justify-center">
                <img src={item.icon} className="w-7" />
              </div>
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-28 py-24 flex flex-col gap-16 max-[520px]:px-4 max-[520p]:py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Bagaimana Cara Kerjanya?</h2>
          <p className="text-gray-500 mt-2">
            Hanya dalam beberapa langkah sederhana
          </p>
        </div>

        <div className="grid grid-cols-3 gap-20 text-center max-[520px]:grid-cols-1">
          {[
            {
              step: '01',
              title: 'Isi Data',
              desc: 'Masukkan informasi pola makan, gejala, dan gaya hidup anda',
            },
            {
              step: '02',
              title: 'Analisis',
              desc: 'Sistem kami akan menganalisis risiko anemia anda',
            },
            {
              step: '03',
              title: 'Hasil & Saran',
              desc: 'Dapatkan hasil dan rekomendasi kesehatan personal',
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#FF93B0] text-white flex items-center justify-center font-bold">
                {item.step}
              </div>
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
