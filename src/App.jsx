// prop = read onlu properties that are shared between components
//  a parent component send data to child component
// <Component key=value/>


// propTypes = a mechanism that ensures that the passes value is of the correct datatype.
// age : PropTypes.number

// defaultProps = defalt value for prop in case they are not passed from the parent component 
// name< "Guest"

import Student from './Student.jsx'

function App() {
  
  return(
    <> 
   <Student name="Bhupesh" age="19" isStudent={true}/>
   <Student name="Art" age="20" isStudent={false}/>
   <Student name="Tess" age="21" isStudent={false}/>
   <Student name="Eleanor" age="15" isStudent={false}/>
   <Student/>
    </>
  )
 
}

export default App
