/* eslint-disable react/react-in-jsx-scope */
import { Text } from './components/atoms';
import { colors } from './styles';

function App() {
  return (
    <div className="App">
      <Text>Holi!</Text>
      <Text color={colors.secondary}>Holi! 222</Text>
    </div>
  );
}

export default App;