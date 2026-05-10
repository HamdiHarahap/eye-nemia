import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layout/index';
import StepProgress from '../../components/StepProgress';
import { useScreening } from '../../context/ScreeningContext';

const labels = ['Tidak Ada', 'Ringan', 'Sedang', 'Berat'];

const SymptomSlider = ({ label, value, onChange }) => {
  const pct = (value / 3) * 100;
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-xs text-[#FF93B0] font-semibold">
          {labels[value]}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={0}
          max={3}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #FF93B0 0%, #FF93B0 ${pct}%, #e5e7eb ${pct}%, #e5e7eb 100%)`,
          }}
        />
        <div className="flex justify-between mt-1">
          {labels.map((l) => (
            <span key={l} className="text-[10px] text-gray-400">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const symptoms = [
  { field: 'mudahLelah', label: 'Mudah lelah' },
  { field: 'pusing', label: 'Pusing' },
  { field: 'sakitKepala', label: 'Sakit kepala' },
  { field: 'sesakNapas', label: 'Sesak napas' },
  { field: 'sulitFokus', label: 'Sulit fokus' },
  { field: 'kulitPucat', label: 'Kulit pucat' },
  { field: 'tanganKakiDingin', label: 'Tangan/kaki dingin' },
  { field: 'jantungBerdebar', label: 'Jantung berdebar' },
  { field: 'lemah', label: 'Lemah' },
  { field: 'mengantukSiangHari', label: 'Mengantuk siang hari' },
];

const Step4 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useScreening();

  const [local, setLocal] = useState(
    symptoms.reduce(
      (acc, s) => ({ ...acc, [s.field]: formData[s.field] ?? 0 }),
      {},
    ),
  );

  const handleNext = () => {
    updateFormData(local);
    navigate('/screening/5');
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#F4EBF1] pt-28 pb-8 px-4">
        <div className="max-w-2xl mx-auto">
          <StepProgress currentStep={4} />

          <div className="bg-white rounded-2xl shadow-sm border border-pink-50 p-6 md:p-8">
            <h2
              className="text-2xl font-bold text-gray-800 mb-1"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Gejala
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Geser slider untuk menunjukkan tingkat gejala yang Anda rasakan.
            </p>

            <style>{`
              input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: #FF93B0;
                cursor: pointer;
                border: 2px solid white;
                box-shadow: 0 1px 4px rgba(255,147,176,0.4);
              }
              input[type=range]::-moz-range-thumb {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: #FF93B0;
                cursor: pointer;
                border: 2px solid white;
              }
            `}</style>

            {symptoms.map(({ field, label }) => (
              <SymptomSlider
                key={field}
                label={label}
                value={local[field]}
                onChange={(v) => setLocal((p) => ({ ...p, [field]: v }))}
              />
            ))}

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => navigate('/screening/3')}
                className="px-6 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
              >
                ← Kembali
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-2.5 rounded-lg bg-[#FF93B0] hover:bg-[#FF7FA3] text-white text-sm font-semibold transition-all duration-200"
              >
                Selanjutnya →
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Step4;
