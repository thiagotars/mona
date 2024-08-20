import {defineField, defineType} from 'sanity'

export default {
  name: 'extension',
  title: 'Extension',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Name is required'),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().error('Price is required'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Image is required'),
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'color',
              title: 'Color',
              type: 'string',
              validation: (Rule) => Rule.required().error('Color is required'),
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: (Rule) => Rule.required().error('Image is required'),
            },
          ],
        },
      ],
    },
    {
      name: 'unitsInStock',
      title: 'Units in Stock',
      type: 'number',
      validation: (Rule) => Rule.required().error('Units in stock is required'),
    },
  ],
}
