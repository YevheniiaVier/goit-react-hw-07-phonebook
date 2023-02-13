import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

const PhonebookPage = lazy(() => import('pages/PhonebookPage/PhonebookPage'));
const FavoriteContactsPage = lazy(() =>
  import('pages/FavoriteContactsPage/FavoriteContactsPage')
);
const NotExistingPage = lazy(() =>
  import('pages/NotExistingPage/NotExistingPage')
);

export const UserRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<PhonebookPage />} />
        <Route path="favorite-contacts" element={<FavoriteContactsPage />} />
        <Route path="*" element={<NotExistingPage />} />
      </Routes>
    </Suspense>
  );
};
