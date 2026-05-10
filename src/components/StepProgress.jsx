import { Check } from 'lucide-react';

const steps = [
  { number: 1, label: 'Data\nIdentitas' },
  { number: 2, label: 'Riwayat\nKesehatan' },
  { number: 3, label: 'Pola Makan' },
  { number: 4, label: 'Gejala' },
  { number: 5, label: 'Aktivitas' },
  { number: 6, label: 'Upload Foto' },
];

const StepProgress = ({ currentStep }) => {
  return (
    <div className="flex items-start justify-center mb-8 px-2">
      {steps.map((step, index) => {
        const isDone = step.number < currentStep;
        const isActive = step.number === currentStep;

        return (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2
                ${
                  isDone
                    ? 'bg-[#FF93B0] border-[#FF93B0] text-white'
                    : isActive
                      ? 'border-[#FF93B0] text-[#FF93B0]'
                      : 'border-gray-300 text-gray-400'
                }`}
              >
                {isDone ? <Check size={16} /> : step.number}
              </div>

              <span
                className={`text-[10px] text-center mt-2 whitespace-pre-line
                ${isDone || isActive ? 'text-[#FF93B0]' : 'text-gray-400'}`}
              >
                {step.label}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`w-10 h-1 mx-2 mb-6
                ${step.number < currentStep ? 'bg-[#FF93B0]' : 'bg-gray-200'}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepProgress;
