import { ButtonContainer } from '../../shared/buttons'
import Content from '../Content'
import { FloatingButton } from '../../shared/buttons'
import Header from '../Header'
import Items from '../Items'
import Menu from '../Menu'
import styles from './App.module.scss'

function App() {

  return (
      <>
        <ButtonContainer>
        <div className={styles.app}>
          <Header />
          <Content>
            <Items />
            <FloatingButton secondary>+</FloatingButton>
          </Content>
          <Menu />
        </div>
        </ButtonContainer>
      </>
    )  
}

export default App
