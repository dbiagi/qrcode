import { Grid } from '@mantine/core'

export function QRCodeGenerator() {
  return (
    <Grid justify="space-between">
      <Grid.Col span={{ base: 10, lg: 6, sm: 10 }} className="debug">
        <div></div>
      </Grid.Col>
      <Grid.Col span={{ base: 10, lg: 4, sm: 10 }} className="debug">
        <div></div>
      </Grid.Col>
    </Grid>
  )
}
