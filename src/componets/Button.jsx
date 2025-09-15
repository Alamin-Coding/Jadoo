
const Button = ({TagName="button", btnStyle="default", children, ...props}) => {
    const buttonStyle = ()=> {
        if(btnStyle==="default") {
        return "bg-yellow text-white hover:bg-amber-500 btn"
        }
        if(btnStyle==="secondary") {
        return "bg-red-500 text-white hover:bg-amber-500 btn"
        }
        if(btnStyle==="primary") {
        return "bg-slate-500 text-blue hover:bg-amber-900 btn"
        }
    }
  return (
    <TagName 
    className={buttonStyle()}
    >
      {children}
    </TagName>
  )
}

export default Button
