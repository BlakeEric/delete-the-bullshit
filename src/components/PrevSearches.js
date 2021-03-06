const PrevSearches = (props) => {

  if (props.data.length < 2) {
    return ''
  }

  return (
    <aside className="prevSearches">
      <h4 className="prevSearches-header">Previous Searches</h4>
      <ul>
        {props.data.map((item, index) => {
          return index > 0 &&
          <li key={`prevSearch-${index}`}>
            <a href="#" onClick={(e) => {
              e.preventDefault
              props.handleResubmit(item)
            }}>{item.replace(/(^\w+:|^)\/\//, '')}</a>
          </li>
        })}
      </ul>
    </aside>
  )

}

export default PrevSearches

PrevSearches.defaultProps = {
  data: []
}
