 import PropTypes from 'prop-types'
 import Button from'./Button'
 
 
 const Header = ({title, onAdd, showAdd}) => {
    
    

     return (
         <header className= "header">
             <h1>{title}</h1>
             <Button color= '' text={showAdd ? 'Close': 'Add'} 
             onClick = {onAdd}/>
               
         </header>
            
             
     )
         

 }

 Header.defaultProps = {
     title: "My Planner",
 }

 Header.propTypes = {
     title: PropTypes.string.isRequired,
 }

 const headingStyle = {
     color: 'pink',
     backgroundColor: 'tan'
 }


 
 export default Header
 