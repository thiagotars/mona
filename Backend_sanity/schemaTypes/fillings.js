export default {
  name: 'filling',
  title: 'Filling',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
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
              name: 'id',
              title: 'Id',
              type: 'number',
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required().error('Name is required'),
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: (Rule) => Rule.required().error('Image is required'),
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              validation: (Rule) => Rule.required().error('Price is required'),
            },
            {
              name: 'unitsInStock',
              title: 'Units in Stock',
              type: 'number',
              validation: (Rule) => Rule.required().error('Units in stock is required'),
            },
          ],
        },
      ],
    },
  ],
}
