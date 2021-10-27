import 'antd/dist/antd.css';
import { GlobalStyle } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import TaskManager from './components/TaskManager';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme }}>
        <TaskManager />
      </ThemeProvider>
    </>
  );
};

export default App;