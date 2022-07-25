import Swal from 'sweetalert2'

const successAlert = (text) => {
  Swal.fire({
    text,
    icon: 'success',
    showConfirmButton: false,
    timer: 1000
  })
}

const errorAlert = (text) => {
  Swal.fire({
    text,
    icon: 'error',
    showConfirmButton: false,
    timer: 1000
  })
}

const deleteAlert = async (title, callback) => {
  try {
    const result = await Swal.fire({
      title,
      text: '注意，您無法復原此動作！',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: '刪除'
    })
    if (result.isConfirmed) callback()
  } catch (error) {
    errorAlert('刪除失敗！')
  }
}

// 使用 export default 會報錯
export { successAlert, errorAlert, deleteAlert }
