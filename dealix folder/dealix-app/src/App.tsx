import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MockWalletProvider } from './contexts/MockWalletContext';
import { AppLayout } from './components/layout/AppLayout';
import { ROUTES } from './config/constants';

// Pages
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { Badges } from './pages/Badges';
import { Marketplace } from './pages/Marketplace';
import { Leaderboard } from './pages/Leaderboard';
import { Swap } from './pages/Swap';
import { BattlePass } from './pages/BattlePass';
import { Trades } from './pages/Trades';

function App() {
  return (
    <MockWalletProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing Page */}
          <Route path={ROUTES.HOME} element={<Landing />} />

          {/* App Routes - redirect /app to profile */}
          <Route path={ROUTES.APP} element={<Navigate to={ROUTES.PROFILE} replace />} />
          <Route path={ROUTES.PROFILE} element={<AppLayout><Profile /></AppLayout>} />
          <Route path={ROUTES.BADGES} element={<AppLayout><Badges /></AppLayout>} />
          <Route path={ROUTES.MARKETPLACE} element={<AppLayout><Marketplace /></AppLayout>} />
          <Route path={ROUTES.LEADERBOARD} element={<AppLayout><Leaderboard /></AppLayout>} />
          <Route path={ROUTES.SWAP} element={<AppLayout><Swap /></AppLayout>} />
          <Route path={ROUTES.BATTLE_PASS} element={<AppLayout><BattlePass /></AppLayout>} />
          <Route path={ROUTES.TRADES} element={<AppLayout><Trades /></AppLayout>} />

          {/* Catch all */}
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </BrowserRouter>
    </MockWalletProvider>
  );
}

export default App;