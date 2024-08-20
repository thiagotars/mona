import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '88qhbbe0',
  dataset: 'production',
  apiVersion: '2023-08-19',
  useCdn: true,
})

export default client
