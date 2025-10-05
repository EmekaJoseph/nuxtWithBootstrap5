import { $instance, $instanceForm } from '../instances'

export default {

    login(data: any) {
        return $instance.post(`auth/login`, JSON.stringify(data))
    },
}