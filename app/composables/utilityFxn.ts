import Swal from 'sweetalert2'

export default {
    alertToast: (text: string, icon: 'warning' | 'success' | 'error' | 'info') => {
        Swal.fire({
            toast: true,
            icon: `${icon}`,
            title: `${text}`,
            // text: `${text}`,
            position: 'top-right',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            padding: 10,
            // iconColor: '#2c3e50',
        })
    },

    capsFirstLetter: (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    },
}