import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layout/index';
import StepProgress from '../../components/StepProgress';
import { useScreening } from '../../context/ScreeningContext';

const Step6 = () => {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [cameraOpen, setCameraOpen] = useState(false);

  const { formData, updateFormData } = useScreening();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      updateFormData({
        foto: file,
        fotoPreview: URL.createObjectURL(file),
      });
    }
  };

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      setCameraOpen(true);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 100);
    } catch (error) {
      console.log(error);
      alert('Kamera tidak dapat diakses');
    }
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0);

    const image = canvas.toDataURL('image/png');

    updateFormData({
      fotoPreview: image,
    });

    const stream = video.srcObject;

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    setCameraOpen(false);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#F4EBF1] pt-28 pb-10 px-4">
        <div className="max-w-2xl mx-auto">
          <StepProgress currentStep={6} />

          <div className="bg-white rounded-3xl shadow-sm border border-pink-50 p-6 md:p-8">
            {/* Title */}
            <h2 className="text-[34px] font-bold text-[#1F2937] mb-8">
              Upload Foto
            </h2>

            {/* Instruksi */}
            <div className="bg-[#FFF1F5] rounded-2xl p-5 mb-6">
              <h3 className="font-semibold text-[#1F2937] mb-3 text-[15px]">
                Instruksi Upload Foto
              </h3>

              <ul className="space-y-2 text-sm text-[#6B7280]">
                <li>• Foto bagian mata (konjungtiva)</li>
                <li>• Tanpa menggunakan filter</li>
                <li>• Pencahayaan yang cukup</li>
                <li>• Foto tidak blur atau kabur</li>
              </ul>
            </div>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-pink-100 rounded-2xl h-[320px] overflow-hidden relative bg-white flex items-center justify-center">
              {cameraOpen ? (
                <>
                  {/* Camera */}
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />

                  {/* Take Photo */}
                  <button
                    onClick={takePhoto}
                    className="absolute bottom-4 bg-[#FF93B0] hover:bg-[#FF7FA3] text-white px-6 py-3 rounded-xl font-medium"
                  >
                    📸 Ambil Gambar
                  </button>
                </>
              ) : formData?.fotoPreview ? (
                <div className="relative w-full h-full">
                  <img
                    src={formData.fotoPreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />

                  {/* Delete Button */}
                  <button
                    onClick={() =>
                      updateFormData({
                        foto: null,
                        fotoPreview: null,
                      })
                    }
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-red-500 w-10 h-10 rounded-full shadow-md text-xl font-bold"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className="flex gap-3">
                  {/* Upload */}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="px-5 py-2.5 rounded-xl border border-[#FF93B0] text-[#FF93B0]"
                  >
                    Upload Foto
                  </button>

                  {/* Camera */}
                  <button
                    type="button"
                    onClick={openCamera}
                    className="px-5 py-2.5 rounded-xl bg-[#FF93B0] text-white"
                  >
                    📷 Ambil Foto
                  </button>
                </div>
              )}
            </div>

            {/* Note */}
            <p className="text-center text-xs text-[#9CA3AF] mt-4">
              Upload foto bersifat opsional, namun dapat membantu meningkatkan
              akurasi hasil screening
            </p>

            {/* Bottom */}
            <div className="flex gap-3 mt-8">
              {/* Back Button */}
              <button
                onClick={() => navigate('/screening/5')}
                className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
              >
                ← Kembali
              </button>

              {/* Result Button */}
              <button
                onClick={() => navigate('/hasil-screening')}
                className="flex-1 py-3 rounded-xl bg-[#FF93B0] hover:bg-[#FF7FA3] text-white font-semibold transition"
              >
                Lihat Hasil
              </button>
            </div>

            {/* Hidden Input */}
            <input
              type="file"
              accept="image/*"
              hidden
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            {/* Hidden Canvas */}
            <canvas ref={canvasRef} hidden />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Step6;
