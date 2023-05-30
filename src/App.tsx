import { useState, createContext } from 'react';
import styles from './App.module.css';
import { Card } from './components/Card/Card';
import { SuccessSubmitCard } from './components/SuccessSubmitCard/SuccessSubmitCard';


interface IFormContext{
  setSuccessSubmit: React.Dispatch<React.SetStateAction<boolean>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
}

export const FormContext = createContext<IFormContext | null>(null)

export function App() {

  const [successSubmit, setSuccessSubmit] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")

  return (
    <div className={styles.app}>
      
      <FormContext.Provider value={{setSuccessSubmit, email, setEmail}}>
        {successSubmit ? <SuccessSubmitCard /> : <Card />}
      </FormContext.Provider>

    </div>
  )
}