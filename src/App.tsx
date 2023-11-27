import { Ankr } from './components/ankr/ankr';
import Magl88 from './components/magl88/magl88';
import { Raijin } from './components/raijin/raijin';
import Rn from './components/rn/rn';

export default function App() {
  return (
    <main>
      <p>App</p>
      <Raijin />
      <Magl88 />
      <Rn />
      <Ankr />
      {/* <Footer /> */}
    </main>
  );
}
