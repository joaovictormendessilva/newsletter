import { useState, createContext } from 'react';
import styles from './App.module.css';
import { Card } from './components/Card/Card';
import { SuccessSubmitCard } from './components/SuccessSubmitCard/SuccessSubmitCard';

type setSuccessSubmit = React.Dispatch<React.SetStateAction<boolean>>

export const FormContext = createContext<setSuccessSubmit | null>(null)

export function App() {

  const [successSubmit, setSuccessSubmit] = useState<boolean>(false)

  return (
    <div className={styles.app}>
      
      <FormContext.Provider value={setSuccessSubmit}>
        {successSubmit ? <SuccessSubmitCard /> : <Card />}
      </FormContext.Provider>

    </div>
  )
}