import Swal from 'sweetalert2';

const seError = () => {
  console.log('PES');

  Swal.fire({
    position: 'center',
    icon: 'error',
    title: "I'm so sorry, please try again",
    showConfirmButton: false,
    timer: 1500,
  });
};
export default seError;
