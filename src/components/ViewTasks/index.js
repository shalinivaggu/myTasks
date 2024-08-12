import {Li, Tag} from './styledComponents'

const ViewTasks = props => {
  const {task} = props
  const {displayTask, displayTag} = task

  return (
    <Li>
      <p>{displayTask}</p>
      <Tag>{displayTag}</Tag>
    </Li>
  )
}

export default ViewTasks
