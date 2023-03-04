import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from './schemas'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID! || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET! || process.env.NEXT_PUBLIC_SANITY_DATASET!

export const sanityConfigObject = {
  title: "FriendZone",
  projectId,
  dataset,
  useCDN: false,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
}

export default defineConfig(sanityConfigObject)
