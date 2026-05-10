import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layout/index';
import StepProgress from '../../components/StepProgress';
import { useScreening } from '../../context/ScreeningContext';

const Step1 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useScreening();
  const [errors, setErrors] = useState({});

  const [local, setLocal] = useState({
    nama: formData.nama,
    umur: formData.umur,
    jenisKelamin: formData.jenisKelamin,
    tinggiBadan: formData.tinggiBadan,
    beratBadan: formData.beratBadan,
  });

  const validate = () => {
    const newErrors = {};
    if (!local.nama.trim()) newErrors.nama = 'Nama wajib diisi';
    if (!local.umur) newErrors.umur = 'Umur wajib diisi';
    if (!local.jenisKelamin)
      newErrors.jenisKelamin = 'Jenis kelamin wajib dipilih';
    if (!local.tinggiBadan) newErrors.tinggiBadan = 'Tinggi badan wajib diisi';
    if (!local.beratBadan) newErrors.beratBadan = 'Berat badan wajib diisi';
    return newErrors;
  };

  const handleNext = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    updateFormData(local);
    navigate('/screening/2');
  };

  const handleChange = (field, value) => {
    setLocal((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#F4EBF1] pt-28 pb-8 px-4">
        <div className="max-w-2xl mx-auto">
          <StepProgress currentStep={1} />

          <div className="bg-white rounded-2xl shadow-sm border border-pink-50 p-6 md:p-8">
            <h2
              className="text-2xl font-bold text-gray-800 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Data Identitas
            </h2>

            {/* Nama */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama
              </label>
              <input
                type="text"
                value={local.nama}
                onChange={(e) => handleChange('nama', e.target.value)}
                placeholder="Contoh: Siti Rahayu"
                className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition ${
                  errors.nama ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.nama && (
                <p className="text-xs text-red-500 mt-1">{errors.nama}</p>
              )}
            </div>

            {/* Umur */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Umur (tahun)
              </label>
              <input
                type="number"
                value={local.umur}
                onChange={(e) => handleChange('umur', e.target.value)}
                placeholder="Contoh: 25"
                min="1"
                max="120"
                className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition ${
                  errors.umur ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.umur && (
                <p className="text-xs text-red-500 mt-1">{errors.umur}</p>
              )}
            </div>

            {/* Jenis Kelamin */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jenis Kelamin
              </label>
              <div className="flex gap-4">
                {['Perempuan', 'Laki-laki'].map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="jenisKelamin"
                      value={opt}
                      checked={local.jenisKelamin === opt}
                      onChange={() => handleChange('jenisKelamin', opt)}
                      className="accent-[#FF93B0]"
                    />
                    <span className="text-sm text-gray-700">{opt}</span>
                  </label>
                ))}
              </div>
              {errors.jenisKelamin && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.jenisKelamin}
                </p>
              )}
            </div>

            {/* Tinggi & Berat */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tinggi Badan (cm)
                </label>
                <input
                  type="number"
                  value={local.tinggiBadan}
                  onChange={(e) => handleChange('tinggiBadan', e.target.value)}
                  placeholder="Contoh: 160"
                  className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition ${
                    errors.tinggiBadan ? 'border-red-400' : 'border-gray-200'
                  }`}
                />
                {errors.tinggiBadan && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.tinggiBadan}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Berat Badan (kg)
                </label>
                <input
                  type="number"
                  value={local.beratBadan}
                  onChange={(e) => handleChange('beratBadan', e.target.value)}
                  placeholder="Contoh: 55"
                  className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition ${
                    errors.beratBadan ? 'border-red-400' : 'border-gray-200'
                  }`}
                />
                {errors.beratBadan && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.beratBadan}
                  </p>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 mt-8">
              <button
                className="px-6 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-500 opacity-40 cursor-not-allowed"
                disabled
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

export default Step1;
