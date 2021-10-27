import 'antd/dist/antd.css';
import { GlobalStyle } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme }}>
        <h1>Hello world</h1>
      </ThemeProvider>
    </>
  );
};

export default App;