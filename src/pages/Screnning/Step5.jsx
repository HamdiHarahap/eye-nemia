import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layout/index';
import StepProgress from '../../components/StepProgress';
import { useScreening } from '../../context/ScreeningContext';

const Step5 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useScreening();
  const [errors, setErrors] = useState({});

  const [local, setLocal] = useState({
    jamTidur: formData.jamTidur,
    aktivitasFisik: formData.aktivitasFisik,
    waktuGadget: formData.waktuGadget,
    tingkatStres: formData.tingkatStres,
    tingkatKesibukan: formData.tingkatKesibukan,
  });

  const validate = () => {
    const e = {};
    if (!local.jamTidur) e.jamTidur = 'Wajib diisi';
    if (!local.aktivitasFisik) e.aktivitasFisik = 'Wajib dipilih';
    if (!local.tingkatStres) e.tingkatStres = 'Wajib dipilih';
    if (!local.tingkatKesibukan) e.tingkatKesibukan = 'Wajib dipilih';
    return e;
  };

  const handleNext = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    updateFormData(local);
    navigate('/screening/6');
  };

  const set = (field) => (e) => {
    const value = e.target ? e.target.value : e;
    setLocal((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#F4EBF1] pt-28 pb-8 px-4">
        <div className="max-w-2xl mx-auto">
          <StepProgress currentStep={5} />

          <div className="bg-white rounded-2xl shadow-sm border border-pink-50 p-6 md:p-8">
            <h2
              className="text-2xl font-bold text-gray-800 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Aktivitas
            </h2>

            {/* Jam tidur */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jam tidur per hari (jam)
              </label>
              <input
                type="number"
                value={local.jamTidur}
                onChange={set('jamTidur')}
                placeholder="Contoh: 7"
                min="1"
                max="24"
                className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition ${errors.jamTidur ? 'border-red-400' : 'border-gray-200'}`}
              />
              {errors.jamTidur && (
                <p className="text-xs text-red-500 mt-1">{errors.jamTidur}</p>
              )}
            </div>

            {/* Aktivitas fisik */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Aktivitas fisik
              </label>
              <select
                value={local.aktivitasFisik}
                onChange={set('aktivitasFisik')}
                className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition bg-white ${errors.aktivitasFisik ? 'border-red-400' : 'border-gray-200'}`}
              >
                <option value="">Pilih tingkat aktivitas</option>
                <option value="Sangat Aktif">
                  Sangat Aktif (olahraga tiap hari)
                </option>
                <option value="Aktif">Aktif (3-5x seminggu)</option>
                <option value="Cukup Aktif">Cukup Aktif (1-2x seminggu)</option>
                <option value="Kurang Aktif">Kurang Aktif (jarang)</option>
                <option value="Tidak Aktif">Tidak Aktif (tidak pernah)</option>
              </select>
              {errors.aktivitasFisik && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.aktivitasFisik}
                </p>
              )}
            </div>

            {/* Waktu gadget */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Waktu penggunaan gadget per hari (jam)
              </label>
              <input
                type="number"
                value={local.waktuGadget}
                onChange={set('waktuGadget')}
                placeholder="Contoh: 6"
                min="0"
                max="24"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition"
              />
            </div>

            {/* Tingkat stres */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tingkat stres
              </label>
              <select
                value={local.tingkatStres}
                onChange={set('tingkatStres')}
                className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition bg-white ${errors.tingkatStres ? 'border-red-400' : 'border-gray-200'}`}
              >
                <option value="">Pilih tingkat stres</option>
                <option value="Rendah">Rendah</option>
                <option value="Sedang">Sedang</option>
                <option value="Tinggi">Tinggi</option>
                <option value="Sangat Tinggi">Sangat Tinggi</option>
              </select>
              {errors.tingkatStres && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.tingkatStres}
                </p>
              )}
            </div>

            {/* Tingkat kesibukan */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tingkat kesibukan
              </label>
              <select
                value={local.tingkatKesibukan}
                onChange={set('tingkatKesibukan')}
                className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-[#FF93B0] focus:border-[#FF93B0] transition bg-white ${errors.tingkatKesibukan ? 'border-red-400' : 'border-gray-200'}`}
              >
                <option value="">Pilih tingkat kesibukan</option>
                <option value="Sangat Sibuk">Sangat Sibuk</option>
                <option value="Sibuk">Sibuk</option>
                <option value="Cukup Sibuk">Cukup Sibuk</option>
                <option value="Tidak Sibuk">Tidak Sibuk</option>
              </select>
              {errors.tingkatKesibukan && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.tingkatKesibukan}
                </p>
              )}
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => navigate('/screening/4')}
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

export default Step5;
