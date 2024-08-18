import Swal from 'sweetalert2';

const seError = (params = "I'm so sorry, please try again") => {
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: params,
    showConfirmButton: false,
    timer: 1500,
  });
};
export default seError;
