import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './routes/ProtectedRoute';

import Step1 from './pages/Screnning/Step1';
import Step2 from './pages/Screnning/Step2';
import Step3 from './pages/Screnning/Step3';
import Step4 from './pages/Screnning/Step4';
import Step5 from './pages/Screnning/Step5';
import Step6 from './pages/Screnning/Step6';

import ResultPage from './pages/Screnning/ResultPage';
import RiskFactorPage from './pages/Screnning/RiskFactorPage';
import RecommendationPage from './pages/Screnning/RecommendationPage';

import RiwayatMonitoringPage from './pages/Screnning/RiwayatMonitoringPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profil"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* SCREENING */}
      <Route path="/screening" element={<Step1 />} />
      <Route path="/screening/2" element={<Step2 />} />
      <Route path="/screening/3" element={<Step3 />} />
      <Route path="/screening/4" element={<Step4 />} />
      <Route path="/screening/5" element={<Step5 />} />
      <Route path="/screening/6" element={<Step6 />} />

      {/* RESULT FLOW */}
      <Route path="/hasil-screening" element={<ResultPage />} />
      <Route path="/faktor-risiko" element={<RiskFactorPage />} />
      <Route path="/rekomendasi" element={<RecommendationPage />} />

      {/* RIWAYAT */}
      <Route
        path="/riwayat"
        element={
          <ProtectedRoute>
            <RiwayatMonitoringPage />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
