import { ThemeProvider } from 'styled-components';
import { PageContainer, VideoBackground } from './App.styles';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <PageContainer>
        <ProductList />
      </PageContainer>
      <VideoBackground
        loop={true}
        muted={true}
        autoPlay={true}
        playsInline={true}
        src="https://firebasestorage.googleapis.com/v0/b/webagent-imuv.appspot.com/o/Background-Santex-site.mp4?alt=media&amp;token=70979fe0-2cc9-4e5d-a1d0-21b88e6c88b6"
      />
    </ThemeProvider>
  );
}

export default App;
