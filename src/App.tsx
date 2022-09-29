import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import { Board } from './components/Board'
import { Header } from './components/Header'
import GlobalStyle from './styles/global'

function App() {
  return (
    <DndProvider backend={HTML5Backend as any}>
      <Header />
      <Board />

      <GlobalStyle />
    </DndProvider>
  )
}

export default App
