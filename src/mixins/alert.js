/* eslint-disable prettier/prettier */
export default {
  methods: {
    AlertAddForm(index) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Add Form ' + index + ' success',
          toast: true,
          icon: 'success',
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        })
          .then((result) => {
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    AlertSuccess() {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Save Success',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        })
          .then((result) => {
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    AlertEmptyFill() {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'You have empty fill form !',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        })
          .then((result) => {
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
