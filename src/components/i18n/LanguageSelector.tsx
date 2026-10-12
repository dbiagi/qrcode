import { SegmentedControl, Stack, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES } from '../../i18n'

export default function LanguageSelector() {
  const { t, i18n } = useTranslation()

  return (
    <Stack align="center" gap="xs">
      <Title order={2}>{t('supported_languages')}</Title>
      <SegmentedControl
        aria-label={t('supported_languages')}
        value={i18n.resolvedLanguage}
        onChange={lang => i18n.changeLanguage(lang)}
        data={SUPPORTED_LANGUAGES.map(lang => ({
          value: lang,
          label: t(`language.${lang}`),
        }))}
      />
    </Stack>
  )
}
