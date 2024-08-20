import {defineField, defineType} from 'sanity'

export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'cases',
      title: 'Cases',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'case'}]}],
    },
    {
      name: 'extensions',
      title: 'Extensions',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'extension'}]}],
    },
    {
      name: 'fillings',
      title: 'Fillings',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'filling'}]}],
    },
  ],
}
