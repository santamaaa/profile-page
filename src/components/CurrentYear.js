const CurrentYear = () => {
    let date = new Date()
    let year = date.getFullYear()
  
    return <span className="text-xs">{ year }</span>
}
  
export default CurrentYear