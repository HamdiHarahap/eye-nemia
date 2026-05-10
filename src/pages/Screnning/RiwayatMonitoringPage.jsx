import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layout/index';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

const trendData = [
  { date: '1 Feb', score: 32 },
  { date: '15 Feb', score: 55 },
  { date: '1 Mar', score: 62 },
  { date: '15 Mar', score: 68 },
  { date: '1 Apr', score: 75 },
];

const historyList = [
  { id: 1, date: '1 April 2026', trend: '↗', score: 75, level: 'Tinggi' },

  { id: 2, date: '15 Maret 2026', trend: '↗', score: 68, level: 'Sedang' },

  { id: 3, date: '1 Maret 2026', trend: '→', score: 62, level: 'Sedang' },

  { id: 4, date: '15 Februari 2026', trend: '~', score: 55, level: 'Sedang' },

  { id: 5, date: '1 Februari 2026', trend: '↘', score: 32, level: 'Rendah' },
];

const levelStyle = {
  Tinggi: 'bg-red-100 text-red-500',
  Sedang: 'bg-yellow-100 text-yellow-500',
  Rendah: 'bg-green-100 text-green-500',
};

const CustomDot = (props) => {
  const { cx, cy } = props;

  return (
    <circle
      cx={cx}
      cy={cy}
      r={5}
      fill="white"
      stroke="#EF4444"
      strokeWidth={2}
    />
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-md border border-red-100 px-3 py-2 text-xs">
        <p className="text-gray-500 mb-0.5">{label}</p>

        <p className="font-bold text-red-500">{payload[0].value}%</p>
      </div>
    );
  }

  return null;
};

const RiwayatMonitoringPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div
        className="min-h-screen bg-[#F4EBF1] pt-28 pb-10 px-4"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <h1 className="text-xl font-bold text-gray-800 mb-1">
            Riwayat Monitoring
          </h1>

          <p className="text-sm text-gray-400 mb-6">
            Pantau perkembangan risiko anemia Anda dari waktu ke waktu
          </p>

          {/* Grafik */}
          <div className="bg-white rounded-2xl shadow-sm border border-pink-50 p-5 mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-4">
              Grafik Tren Risiko
            </p>

            <ResponsiveContainer width="100%" height={180}>
              <AreaChart
                data={trendData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="pinkGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.18} />

                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#F3F4F6"
                  vertical={false}
                />

                <XAxis
                  dataKey="date"
                  tick={{
                    fontSize: 10,
                    fill: '#9CA3AF',
                    fontFamily: 'Poppins',
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  domain={[20, 100]}
                  tick={{
                    fontSize: 10,
                    fill: '#9CA3AF',
                    fontFamily: 'Poppins',
                  }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />

                <Tooltip content={<CustomTooltip />} />

                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#EF4444"
                  strokeWidth={2}
                  fill="url(#pinkGrad)"
                  dot={<CustomDot />}
                  activeDot={{
                    r: 6,
                    fill: '#EF4444',
                    stroke: 'white',
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Riwayat */}
          <div className="bg-white rounded-2xl shadow-sm border border-pink-50 p-5 mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-4">
              Riwayat Screening
            </p>

            <div className="space-y-3">
              {historyList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-50 bg-[#FAFAFA] hover:bg-[#FFF7F9] transition"
                >
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-xl bg-[#FFF0F5] flex items-center justify-center text-base flex-shrink-0">
                      🩺
                    </div>

                    <div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mb-0.5">
                        <span>{item.date}</span>
                        <span>{item.trend}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#1F2937]">
                          {item.score}%
                        </span>

                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            levelStyle[item.level]
                          }`}
                        >
                          ● {item.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() =>
                      navigate('/hasil-screening', {
                        state: {
                          score: item.score,
                        },
                      })
                    }
                    className="text-xs text-[#FF93B0] border border-pink-200 rounded-full px-3 py-1 hover:bg-[#FFF0F5] active:scale-95 transition font-medium"
                  >
                    Lihat Detail
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white rounded-2xl shadow-sm border border-pink-50 p-4 mb-6">
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFF0F5] flex items-center justify-center text-base flex-shrink-0">
                💡
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  Tips Monitoring
                </p>

                <p className="text-xs text-gray-500 leading-relaxed">
                  Lakukan screening secara berkala setiap 2–4 minggu untuk
                  memantau perubahan risiko Anda. Catat juga perubahan pola
                  makan dan gaya hidup untuk hasil yang lebih akurat.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/screening')}
              className="flex-1 py-2.5 rounded-xl bg-[#FF93B0] hover:bg-[#FF7FA3] text-white text-sm font-semibold transition-all duration-200"
            >
              Screening Baru
            </button>

            <button
              onClick={() => navigate('/')}
              className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all duration-200"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RiwayatMonitoringPage;
