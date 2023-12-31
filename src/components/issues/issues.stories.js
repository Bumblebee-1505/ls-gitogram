import issues from './issues'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import { optionsIssues } from '../globalProperties'

const methods = {
  onChange: action('onChange')
}

export default {
  title: 'issues',
  components: { issues },
  decorators: [withKnobs]
}

export const defaultViewIssues = () => ({
  components: {
    issues
  },
  props: {
    username: {
      default: text('Username', 'username')
    },
    issue: {
      default: text('Issue', 'transition-group with flex parent causes removed items to fly')
    },
    num: {
      default: number('Number', 2, optionsIssues)
    }
  },
  template: `
    <issues
      @change="onChange"
      :username="username"
      :issue="issue"
      :num="num"
    >

    </issues>
  `,
  methods
})

defaultViewIssues.story = {
  name: 'Стандартный вид'
}
