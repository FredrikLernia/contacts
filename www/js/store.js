let contacts

try {
 contacts = JSON.parse(localStorage.contacts);
}
catch(e){
 contacts = []
}
 
contacts.save = function(){
  localStorage.contacts = JSON.stringify(this);
}