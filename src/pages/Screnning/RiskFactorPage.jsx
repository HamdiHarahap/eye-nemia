import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import MainLayout from '../../layout/index';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const factors = [
  {
    icon: '🥩',
    iconBg: 'bg-pink-50',
    title: 'Asupan Zat Besi Rendah',
    badge: 'Prioritas Tinggi',
    badgeBg: 'bg-pink-100 text-[#FF93B0]',
    desc: 'Pola makan Anda menunjukkan konsumsi makanan tinggi zat besi seperti daging merah, hati, dan sayuran hijau masih kurang.',
  },
  {
    icon: '🩸',
    iconBg: 'bg-orange-50',
    title: 'Menstruasi Berat',
    badge: 'Prioritas Tinggi',
    badgeBg: 'bg-pink-100 text-[#FF93B0]',
    desc: 'Volume darah yang keluar saat menstruasi cukup banyak, yang dapat meningkatkan risiko kehilangan zat besi.',
  },
  {
    icon: '⚡',
    iconBg: 'bg-yellow-50',
    title: 'Gejala Kelelahan',
    badge: 'Perlu Perhatian',
    badgeBg: 'bg-yellow-100 text-yellow-600',
    desc: 'Anda melaporkan sering merasa lelah, pusing, dan lemah yang merupakan tanda umum dari anemia.',
  },
  {
    icon: '☕',
    iconBg: 'bg-orange-50',
    title: 'Kebiasaan Teh/Kopi Setelah Makan',
    badge: 'Perlu Perhatian',
    badgeBg: 'bg-yellow-100 text-yellow-600',
    desc: 'Konsumsi teh atau kopi setelah makan dapat menghambat penyerapan zat besi dari makanan.',
  },
  {
    icon: <AlertTriangle size={18} className="text-white" />,
    iconBg: 'bg-[#FF93B0]',
    title: 'Catatan Penting',
    badge: null,
    desc: 'Faktor-faktor ini diidentifikasi berdasarkan data yang Anda berikan. Untuk diagnosis yang akurat, sangat disarankan untuk berkonsultasi dengan dokter dan melakukan pemeriksaan darah lengkap.',
  },
];

const RiskFactorPage = () => {
  useDocumentTitle('Faktor Penyebab Risiko | EyeNemia');

  const navigate = useNavigate();

  return (
    <MainLayout>
      <div
        className="min-h-screen bg-[#F4EBF1] pt-28 pb-10 px-4"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            Faktor Penyebab Risiko
          </h2>

          <p className="text-sm text-gray-400 mb-6">
            Berikut adalah faktor-faktor yang berkontribusi terhadap risiko
            anemia Anda
          </p>

          {/* Cards */}
          <div className="space-y-3 mb-8">
            {factors.map((f, i) => (
              <div
                key={i}
                className={`rounded-2xl p-4 shadow-sm border ${
                  i === factors.length - 1
                    ? 'bg-[#FFF1F5] border-pink-100'
                    : 'bg-white border-pink-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${f.iconBg}`}
                  >
                    {f.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        {f.title}
                      </span>

                      {f.badge && (
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${f.badgeBg}`}
                        >
                          {f.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/rekomendasi')}
              className="flex-1 py-2.5 rounded-lg bg-[#FF93B0] hover:bg-[#FF7FA3] text-white text-sm font-semibold transition"
            >
              Lihat Rekomendasi
            </button>

            <button
              onClick={() => navigate('/hasil-screening')}
              className="flex-1 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
            >
              Kembali ke Hasil
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RiskFactorPage;
