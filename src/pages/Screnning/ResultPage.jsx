import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import MainLayout from '../../layout/index';

const getRiskLevel = (score) => {
  if (score >= 70)
    return {
      label: 'Tinggi',
      color: '#EF4444',
      colorLight: '#FFF1F2',
      colorBorder: '#FECDD3',
      badgeBg: 'bg-red-100',
      badgeText: 'text-red-500',
    };

  if (score >= 40)
    return {
      label: 'Sedang',
      color: '#FBBF24',
      colorLight: '#FFFBEB',
      colorBorder: '#FDE68A',
      badgeBg: 'bg-yellow-100',
      badgeText: 'text-yellow-500',
    };

  return {
    label: 'Rendah',
    color: '#34D399',
    colorLight: '#ECFDF5',
    colorBorder: '#A7F3D0',
    badgeBg: 'bg-green-100',
    badgeText: 'text-green-500',
  };
};

const CircularProgress = ({ animatedScore, color }) => {
  const r = 64;
  const circ = 2 * Math.PI * r;
  const offset = circ - (animatedScore / 100) * circ;

  return (
    <svg width="170" height="170" viewBox="0 0 170 170">
      <circle
        cx="85"
        cy="85"
        r={r}
        fill="none"
        stroke="#F0F0F0"
        strokeWidth="11"
      />

      <circle
        cx="85"
        cy="85"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 85 85)"
      />

      <text
        x="85"
        y="78"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="28"
        fontWeight="700"
        fill="#1F2937"
        fontFamily="Poppins, sans-serif"
      >
        {animatedScore}%
      </text>

      <text
        x="85"
        y="100"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="11"
        fill="#9CA3AF"
        fontFamily="Poppins, sans-serif"
      >
        Skor Risiko
      </text>
    </svg>
  );
};

const BarProgress = ({ label, animatedValue, color }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-xs text-gray-500">{label}</span>

      <span className="text-xs font-semibold text-gray-600">
        {animatedValue}%
      </span>
    </div>

    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: `${animatedValue}%`,
          backgroundColor: color,
        }}
      />
    </div>
  </div>
);

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const score = location.state?.score || 75;

  const risk = getRiskLevel(score);

  const breakdown = [
    { label: 'Pola Makan', value: 65 },
    { label: 'Gejala Fisik', value: 75 },
    { label: 'Gaya Hidup', value: 50 },
  ];

  const [animatedScore, setAnimatedScore] = useState(0);
  const [animatedBars, setAnimatedBars] = useState(breakdown.map(() => 0));

  const rafRef = useRef(null);
  const startRef = useRef(null);

  const DURATION = 1400;

  useEffect(() => {
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;

      const elapsed = timestamp - startRef.current;

      const t = Math.min(elapsed / DURATION, 1);

      const eased = easeOutCubic(t);

      setAnimatedScore(Math.round(eased * score));

      setAnimatedBars(breakdown.map((b) => Math.round(eased * b.value)));

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setAnimatedScore(score);
        setAnimatedBars(breakdown.map((b) => b.value));
      }
    };

    const delay = setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick);
    }, 250);

    return () => {
      clearTimeout(delay);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [score]);

  return (
    <MainLayout>
      <div
        className="min-h-screen bg-[#F4EBF1] flex items-start justify-center pt-28 pb-10 px-4"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* TOP */}
            <div
              className="flex flex-col items-center pt-8 pb-7 px-8"
              style={{
                background: 'linear-gradient(160deg, #FFF7F9 0%, #FFFFFF 80%)',
              }}
            >
              {/* Badge */}
              <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-1.5 shadow-sm mb-6">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                  <polyline
                    points="1,9 4,5 7,7 10,3 13,1"
                    stroke="#FF93B0"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />

                  <polyline
                    points="10,1 13,1 13,4"
                    stroke="#FF93B0"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>

                <span className="text-[12px] font-medium text-gray-500">
                  Screening Selesai
                </span>
              </div>

              {/* Title */}
              <h2 className="text-[22px] font-bold text-gray-800 text-center mb-7 leading-snug">
                Hasil Screening Anda
              </h2>

              {/* Circle */}
              <div className="relative mb-4 flex items-center justify-center">
                {/* Glow */}
                <div
                  className={`absolute w-40 h-40 rounded-full blur-3xl opacity-20 ${
                    risk.label === 'Tinggi'
                      ? 'bg-red-400'
                      : risk.label === 'Sedang'
                        ? 'bg-yellow-400'
                        : 'bg-green-400'
                  }`}
                />

                <CircularProgress
                  animatedScore={animatedScore}
                  color={risk.color}
                />
              </div>

              {/* Badge Risk */}
              <span
                className={`inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1 rounded-full ${risk.badgeBg} ${risk.badgeText}`}
              >
                <span className="text-[8px]">●</span>
                {risk.label}
              </span>
            </div>

            {/* Description */}
            <div className="px-7 pt-2 pb-0">
              <div
                className="flex items-start gap-3 rounded-xl px-4 py-3.5"
                style={{
                  backgroundColor: risk.colorLight,
                  border: `1px solid ${risk.colorBorder}`,
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="flex-shrink-0 mt-0.5"
                >
                  <circle
                    cx="7.5"
                    cy="7.5"
                    r="6.5"
                    stroke={risk.color}
                    strokeWidth="1.4"
                  />

                  <path
                    d="M7.5 6.5v4"
                    stroke={risk.color}
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />

                  <circle cx="7.5" cy="4.5" r="0.75" fill={risk.color} />
                </svg>

                <p className="text-[11.5px] text-gray-500 leading-relaxed">
                  Hasil screening menunjukkan risiko anemia Anda{' '}
                  <span className="font-semibold text-gray-700">
                    {risk.label.toLowerCase()}
                  </span>
                  .{' '}
                  {risk.label === 'Tinggi' &&
                    'Sangat disarankan untuk segera konsultasi dengan dokter dan melakukan pemeriksaan Hb.'}
                  {risk.label === 'Sedang' &&
                    'Perhatikan pola makan dan pertimbangkan untuk konsultasi dengan tenaga kesehatan.'}
                  {risk.label === 'Rendah' &&
                    'Pertahankan pola hidup sehat Anda dan lakukan pemeriksaan rutin secara berkala.'}
                </p>
              </div>
            </div>

            {/* Ringkasan */}
            <div className="px-7 pt-5 pb-5">
              <p className="text-[13px] font-semibold text-gray-700 mb-4">
                Ringkasan Penilaian
              </p>

              {breakdown.map((item, i) => (
                <BarProgress
                  key={item.label}
                  label={item.label}
                  animatedValue={animatedBars[i]}
                  color={risk.color}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="px-7 pb-8">
              <div className="flex gap-2.5 mb-3">
                <button
                  onClick={() => navigate('/faktor-risiko')}
                  className="flex-1 py-2.5 rounded-xl text-white text-xs font-semibold transition-opacity duration-150 active:scale-[0.97]"
                  style={{
                    backgroundColor: '#FF93B0',
                  }}
                >
                  Lihat Faktor Penyebab
                </button>

                <button
                  onClick={() => navigate('/rekomendasi')}
                  className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-white transition-colors duration-150 active:scale-[0.97]"
                  style={{
                    border: '1.5px solid #FF93B0',
                    color: '#FF93B0',
                  }}
                >
                  Lihat Rekomendasi
                </button>
              </div>

              <div className="text-center">
                <button
                  onClick={() => navigate('/')}
                  className="text-[11px] text-gray-400 hover:text-gray-600 transition underline"
                >
                  Kembali ke Beranda
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResultPage;
