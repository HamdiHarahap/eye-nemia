import { createContext, useContext, useState } from 'react';

const ScreeningContext = createContext(null);

export const ScreeningProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    // Step 1
    nama: '',
    umur: '',
    jenisKelamin: '',
    tinggiBadan: '',
    beratBadan: '',
    // Step 2
    pernahAnemia: '',
    riwayatKeluarga: '',
    menstruasiTeratur: '',
    lamaMenstruasi: '',
    sedangHamil: '',
    jumlahDarah: '',
    // Step 3
    frekuensiMakan: '',
    sarapan: '',
    dagingMerah: '',
    hati: '',
    telur: '',
    ikan: '',
    sayuranHijau: '',
    kacangKacangan: '',
    buahVitaminC: '',
    minumTeh: '',
    minumKopi: '',
    frekuensiCepatSaji: '',
    konsumsiAir: '',
    // Step 4
    mudahLelah: 0,
    pusing: 0,
    sakitKepala: 0,
    sesakNapas: 0,
    sulitFokus: 0,
    kulitPucat: 0,
    tanganKakiDingin: 0,
    jantungBerdebar: 0,
    lemah: 0,
    mengantukSiangHari: 0,
    // Step 5
    jamTidur: '',
    aktivitasFisik: '',
    waktuGadget: '',
    tingkatStres: '',
    tingkatKesibukan: '',
    // Step 6
    foto: null,
    fotoPreview: null,
  });

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <ScreeningContext.Provider value={{ formData, updateFormData }}>
      {children}
    </ScreeningContext.Provider>
  );
};

export const useScreening = () => {
  const ctx = useContext(ScreeningContext);
  if (!ctx)
    throw new Error('useScreening must be used within ScreeningProvider');
  return ctx;
};
