import {defineField, defineType} from 'sanity'

export default {
  name: 'case',
  title: 'Case',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: (Rule) => Rule.required().error('ID is required'),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Name is required'),
    },
    {
      name: 'size',
      title: 'Size',
      type: 'number',
      validation: (Rule) => Rule.required().error('Size is required'),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().error('Price is required'),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      validation: (Rule) => Rule.min(1).error('At least one image is required'),
    },
    {
      name: 'unitsInStock',
      title: 'Units in Stock',
      type: 'number',
      validation: (Rule) => Rule.required().error('Units in stock is required'),
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
  ],
}
