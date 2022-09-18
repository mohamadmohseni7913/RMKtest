import Swal from 'sweetalert2';
 const NotifErr=(err)=>{
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err,
        footer: '<a href="">Why do I have this issue?</a>'
    })
} 
export default NotifErr
