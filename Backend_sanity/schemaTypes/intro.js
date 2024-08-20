export default {
  name: 'intro',
  title: 'Intro',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Name is required'),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required().error('Text is required'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Image is required'),
    },
  ],
}
