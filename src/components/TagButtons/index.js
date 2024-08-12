import {Btn} from './styledComponents'

const TagButtons = props => {
  const {item, filterList, activeTag} = props
  const {displayText, optionId} = item
  const active = activeTag === optionId
  const onClickButton = () => {
    filterList(optionId)
  }
  return (
    <li>
      <Btn type="button" onClick={onClickButton} actived={active}>
        {displayText}
      </Btn>
    </li>
  )
}

export default TagButtons
