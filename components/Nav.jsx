/* global React */
const { useState: useNavState, useEffect: useNavEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = useNavState(false);
  useNavEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '14px 0' : '26px 0',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: scrolled ? 'rgba(253, 248, 255, 0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'all 240ms cubic-bezier(0.2,0.8,0.2,1)',
      borderBottom: scrolled ? '1px solid rgba(201,188,218,0.3)' : 'none',
    }}>
      <a href="#" aria-label="Startup Accountancy — home"
         style={{ display: 'inline-flex', alignItems: 'center' }}>
        <img src="assets/logo.png" alt="Startup Accountancy"
             style={{
               height: scrolled ? 40 : 52, width: 'auto',
               transition: 'height 240ms cubic-bezier(0.2,0.8,0.2,1)',
             }} />
      </a>
    </nav>
  );
}

window.Nav = Nav;
