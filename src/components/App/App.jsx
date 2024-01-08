import { ButtonContainer } from '../../shared/buttons'
import Content from '../Content'
import { FloatingButton } from '../../shared/buttons'
import Header from '../Header'
import Items from '../Items'
import Menu from '../Menu'
import Settings from '../Settings'
import Stats from '../Stats'
import styles from './App.module.scss'

function App() {

  return (
      <>
        <ButtonContainer>
        <div className={styles.app}>
          <Header />
          <Content>
            <Settings />
            <FloatingButton secondary>+</FloatingButton>
          </Content>
          <Menu />
        </div>
        </ButtonContainer>
      </>
    )  
}

export default App
