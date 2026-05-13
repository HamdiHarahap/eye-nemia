import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layout/index';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const recommendations = [
  {
    icon: '🥦',
    iconBg: 'bg-green-50',
    title: 'Tingkatkan Makanan Tinggi Zat Besi',
    tips: [
      'Konsumsi daging merah (sapi, kambing) 2-3 kali seminggu',
      'Tambahkan hati ayam/sapi dalam menu makanan',
      'Makan sayuran hijau seperti bayam, kangkung setiap hari',
      'Konsumsi kacang-kacangan dan biji-bijian',
    ],
  },
  {
    icon: '🍊',
    iconBg: 'bg-orange-50',
    title: 'Konsumsi Vitamin C',
    tips: [
      'Makan buah-buahan kaya Vitamin C (jeruk, pepaya, jambu)',
      'Minum jus buah segar setelah makan',
      'Vitamin C membantu penyerapan zat besi lebih baik',
    ],
  },
  {
    icon: '🚫',
    iconBg: 'bg-red-50',
    title: 'Hindari Teh/Kopi Setelah Makan',
    tips: [
      'Jangan minum teh atau kopi 1-2 jam setelah makan',
      'Ganti dengan air putih atau jus buah',
      'Teh dan kopi menghambat penyerapan zat besi',
    ],
  },
  {
    icon: '🏥',
    iconBg: 'bg-blue-50',
    title: 'Pemeriksaan Kesehatan',
    tips: [
      'Lakukan pemeriksaan Hb (hemoglobin) di laboratorium',
      'Konsultasi dengan dokter untuk diagnosis pasti',
      'Pertimbangkan suplemen zat besi jika direkomendasikan dokter',
      'Periksa kesehatan secara rutin setiap 3-6 bulan',
    ],
  },
  {
    icon: '💪',
    iconBg: 'bg-pink-50',
    title: 'Tips Gaya Hidup Sehat',
    subtitle: 'Kebiasaan sehat lainnya untuk mendukung kesehatan optimal',
    tipsGrid: [
      'Tidur cukup 7-8 jam setiap malam',
      'Kelola stres dengan baik',
      'Minum air putih minimal 8 gelas per hari',
      'Olahraga ringan secara teratur',
      'Hindari makanan cepat saji berlebihan',
      'Jaga pola makan teratur 3 kali sehari',
    ],
  },
  {
    icon: '🩺',
    iconBg: 'bg-[#F59E0B]',
    title: 'Konsultasi dengan Dokter',
    highlight: true,
    desc: 'Rekomendasi ini bersifat umum dan edukatif. Untuk penanganan yang tepat, terutama jika risiko Anda tinggi, sangat disarankan untuk berkonsultasi dengan dokter atau ahli gizi.',
  },
];

const RecommendationPage = () => {
  useDocumentTitle('Rekomendasi | EyeNemia');

  const navigate = useNavigate();

  return (
    <MainLayout>
      <div
        className="min-h-screen bg-[#F4EBF1] pt-28 pb-10 px-4"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            Rekomendasi untuk Anda
          </h2>

          <p className="text-sm text-gray-400 mb-6">
            Ikuti panduan berikut untuk mengurangi risiko anemia dan
            meningkatkan kesehatan Anda
          </p>

          <div className="space-y-3 mb-8">
            {recommendations.map((rec, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-4 shadow-sm ${
                  rec.highlight
                    ? 'border-[#F4C542] bg-[#FFF8E7]'
                    : 'bg-white border-pink-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${rec.iconBg}`}
                  >
                    {rec.icon}
                  </div>

                  <div className="flex-1">
                    <p
                      className={`text-sm font-semibold mb-1 ${
                        rec.highlight ? 'text-[#B45309]' : 'text-gray-800'
                      }`}
                    >
                      {rec.title}
                    </p>

                    {rec.subtitle && (
                      <p className="text-xs text-gray-400 mb-2">
                        {rec.subtitle}
                      </p>
                    )}

                    {rec.desc && (
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {rec.desc}
                      </p>
                    )}

                    {rec.tips && (
                      <ul className="space-y-1">
                        {rec.tips.map((tip, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-xs text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF93B0] flex-shrink-0 mt-1" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    )}

                    {rec.tipsGrid && (
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        {rec.tipsGrid.map((tip, j) => (
                          <div
                            key={j}
                            className="flex items-start gap-2 text-xs text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF93B0] flex-shrink-0 mt-1" />
                            {tip}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/riwayat')}
              className="flex-1 py-2.5 rounded-lg bg-[#FF93B0] hover:bg-[#FF7FA3] text-white text-sm font-semibold transition"
            >
              Lihat Riwayat Monitoring
            </button>

            <button
              onClick={() => navigate('/')}
              className="flex-1 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RecommendationPage;
