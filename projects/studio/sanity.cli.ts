import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'q7cszao0',
    dataset: 'production'
  },
  server: {
    hostname: "localhost",
    port: 3002
  }
})
