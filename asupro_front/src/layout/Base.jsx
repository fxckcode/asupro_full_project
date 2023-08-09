import './Base.scss';
function Base({children, title}) {
  document.title = title;
  return (
    <div className="contain">
        {children}
    </div>
  )
}

export default Base