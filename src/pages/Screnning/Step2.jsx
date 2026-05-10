import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layout/index';
import StepProgress from '../../components/StepProgress';
import { useScreening } from '../../context/ScreeningContext';

const RadioGroup = ({ label, name, value, onChange, error }) => (
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
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const Step2 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useScreening();
  const [errors, setErrors] = useState({});

  const [local, setLocal] = useState({
    pernahAnemia: formData.pernahAnemia,
    riwayatKeluarga: formData.riwayatKeluarga,
    sedangHamil: formData.sedangHamil,
    menstruasiTeratur: formData.menstruasiTeratur,
    lamaMenstruasi: formData.lamaMenstruasi,
    jumlahDarah: formData.jumlahDarah,
  });

  const validate = () => {
    const e = {};
    if (!local.pernahAnemia) e.pernahAnemia = 'Wajib dipilih';
    if (!local.riwayatKeluarga) e.riwayatKeluarga = 'Wajib dipilih';
    if (!local.sedangHamil) e.sedangHamil = 'Wajib dipilih';
    if (!local.menstruasiTeratur) e.menstruasiTeratur = 'Wajib dipilih';
    return e;
  };

  const handleNext = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    updateFormData(local);
    navigate('/screening/3');
  };

  const set = (field) => (value) => {
    setLocal((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#F4EBF1] pt-28 pb-8 px-4">
        <div className="max-w-2xl mx-auto">
          <StepProgress currentStep={2} />

          <div className="bg-white rounded-2xl shadow-sm border border-pink-50 p-6 md:p-8">
            <h2
              className="text-2xl font-bold text-gray-800 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Riwayat Kesehatan
            </h2>

            <RadioGroup
              label="Pernah mengalami anemia?"
              name="pernahAnemia"
              value={local.pernahAnemia}
              onChange={set('pernahAnemia')}
              error={errors.pernahAnemia}
            />
            <RadioGroup
              label="Riwayat anemia dalam keluarga?"
              name="riwayatKeluarga"
              value={local.riwayatKeluarga}
              onChange={set('riwayatKeluarga')}
              error={errors.riwayatKeluarga}
            />
            <RadioGroup
              label="Sedang hamil?"
              name="sedangHamil"
              value={local.sedangHamil}
              onChange={set('sedangHamil')}
              error={errors.sedangHamil}
            />
            <RadioGroup
              label="Menstruasi teratur?"
              name="menstruasiTeratur"
              value={local.menstruasiTeratur}
              onChange={set('menstruasiTeratur')}
              error={errors.menstruasiTeratur}
            />

            {/* Lama menstruasi */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lama menstruasi (hari)
              </label>
              <input
                type="number"
                value={local.lamaMenstruasi}
                onChange={(e) => {
                  setLocal((p) => ({ ...p, lamaMenstruasi: e.target.value }));
                }}
                placeholder="Contoh: 5"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition"
              />
            </div>

            {/* Jumlah darah */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jumlah darah saat menstruasi
              </label>
              <select
                value={local.jumlahDarah}
                onChange={(e) =>
                  setLocal((p) => ({ ...p, jumlahDarah: e.target.value }))
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition bg-white"
              >
                <option value="">Pilih jumlah</option>
                <option value="Sedikit">Sedikit</option>
                <option value="Normal">Normal</option>
                <option value="Banyak">Banyak</option>
                <option value="Sangat Banyak">Sangat Banyak</option>
              </select>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => navigate('/screening')}
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

export default Step2;
