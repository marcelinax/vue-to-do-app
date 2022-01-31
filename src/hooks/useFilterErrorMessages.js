export default  function (errors,message)  {
    if(errors.length > 0){
       return errors.filter(error => error === message)[0]
    }

}