import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layout/index';
import StepProgress from '../../components/StepProgress';
import { useScreening } from '../../context/ScreeningContext';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const freqOptions = [
  'Setiap hari',
  '3-5x seminggu',
  '1-2x seminggu',
  'Jarang',
  'Tidak pernah',
];
const mealFreqOptions = ['1x sehari', '2x sehari', '3x sehari', '>3x sehari'];

const SelectField = ({
  label,
  value,
  onChange,
  options,
  placeholder = 'Pilih frekuensi',
}) => (
  <div className="mb-3">
    <label className="block text-xs font-medium text-gray-600 mb-1">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition bg-white"
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

const RadioRow = ({ label, name, value, onChange }) => (
  <div className="mb-5">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <div className="flex gap-6">
      {['Ya', 'Tidak'].map((opt) => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="accent-[#FF93B0]"
          />
          <span className="text-sm text-gray-700">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

const Step3 = () => {
  useDocumentTitle('Screening | EyeNemia');

  const navigate = useNavigate();
  const { formData, updateFormData } = useScreening();

  const [local, setLocal] = useState({
    frekuensiMakan: formData.frekuensiMakan,
    sarapan: formData.sarapan,
    dagingMerah: formData.dagingMerah,
    hati: formData.hati,
    telur: formData.telur,
    ikan: formData.ikan,
    sayuranHijau: formData.sayuranHijau,
    kacangKacangan: formData.kacangKacangan,
    buahVitaminC: formData.buahVitaminC,
    minumTeh: formData.minumTeh,
    minumKopi: formData.minumKopi,
    frekuensiCepatSaji: formData.frekuensiCepatSaji,
    konsumsiAir: formData.konsumsiAir,
  });

  const set = (field) => (value) => setLocal((p) => ({ ...p, [field]: value }));

  const handleNext = () => {
    updateFormData(local);
    navigate('/screening/4');
  };

  const ironFoods = [
    { field: 'dagingMerah', label: 'Daging merah' },
    { field: 'hati', label: 'Hati' },
    { field: 'telur', label: 'Telur' },
    { field: 'ikan', label: 'Ikan' },
    { field: 'sayuranHijau', label: 'Sayuran hijau' },
    { field: 'kacangKacangan', label: 'Kacang-kacangan' },
    { field: 'buahVitaminC', label: 'Buah (Vitamin C)' },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#F4EBF1] pt-28 pb-8 px-4">
        <div className="max-w-2xl mx-auto">
          <StepProgress currentStep={3} />

          <div className="bg-white rounded-2xl shadow-sm border border-pink-50 p-6 md:p-8">
            <h2
              className="text-2xl font-bold text-gray-800 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Pola Makan
            </h2>

            <SelectField
              label="Frekuensi makan per hari"
              value={local.frekuensiMakan}
              onChange={set('frekuensiMakan')}
              options={mealFreqOptions}
              placeholder="Pilih frekuensi"
            />

            <RadioRow
              label="Apakah Anda sarapan?"
              name="sarapan"
              value={local.sarapan}
              onChange={set('sarapan')}
            />

            {/* Iron-rich foods */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Seberapa sering Anda mengonsumsi makanan berikut?
              </label>
              <div className="bg-[#FFF5F8] rounded-xl p-4 space-y-1">
                {ironFoods.map(({ field, label }) => (
                  <SelectField
                    key={field}
                    label={label}
                    value={local[field]}
                    onChange={set(field)}
                    options={freqOptions}
                  />
                ))}
              </div>
            </div>

            <RadioRow
              label="Minum teh setelah makan?"
              name="minumTeh"
              value={local.minumTeh}
              onChange={set('minumTeh')}
            />
            <RadioRow
              label="Minum kopi setelah makan?"
              name="minumKopi"
              value={local.minumKopi}
              onChange={set('minumKopi')}
            />

            <SelectField
              label="Frekuensi makanan cepat saji"
              value={local.frekuensiCepatSaji}
              onChange={set('frekuensiCepatSaji')}
              options={freqOptions}
            />

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Konsumsi air per hari (gelas)
              </label>
              <input
                type="number"
                value={local.konsumsiAir}
                onChange={(e) => set('konsumsiAir')(e.target.value)}
                placeholder="Contoh: 8"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition"
              />
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => navigate('/screening/2')}
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

export default Step3;
