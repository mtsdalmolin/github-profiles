import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Footer } from '.'

export default {
  title: 'Example/Footer',
  component: Footer,
} as Meta<typeof Footer>

export const Basic: Story = (args) => <Footer {...args} />
