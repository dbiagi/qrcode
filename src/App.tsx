import styles from './App.module.css'
import  {useTranslation} from 'react-i18next'
import LanguageSelector from './components/i18n/LanguageSelector'

function App() {
    const { t } = useTranslation()

    return (
    <>
        <title>{t('title')}</title>
        <LanguageSelector />

        <h1>{t('title')}</h1>
        <div id="center" className={styles.panel}></div>
    </>
  )
}

export default App
