import { Outlet } from 'react-router';

function PageLayout() {
  return (
    <article
      style={{
        maxWidth: '1200px',
        height: '100vh',
        margin: '0 auto'
      }}
    >
      <Outlet />
    </article>
  );
}

export default PageLayout;
