import {ref, onMounted} from 'vue'

export default function useAuth() {
    const user = ref(null)
    const token = ref(null)

    const login = async (credentials) => {
        try {
            const res = await $larafetch('api/v1/token/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(credentials)
            })

            if (!res.access_token) {
                throw new Error('Failed to login')
            }

            localStorage.setItem('token', res.access_token)

            return res
        } catch (err) {
            console.error(err)
            throw err
        }
    }
    const register = async (credentials) => {
        try {
            const res = await $larafetch('/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(credentials)
            })

            return await login(credentials)
        } catch (err) {
            throw err
        }
    }

    const logout = () => {
        user.value = null
        token.value = null
        localStorage.removeItem('token')
        useRouter().push('/login')
    }

    const checkUser = async () => {
        const token = localStorage.getItem('token')

        if (token) {
            try {
                const res = await $larafetch('/api/v1/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (!res.id) {
                    throw new Error('Failed to $larafetch user')
                }

                user.value = res
            } catch (err) {
                console.error(err)
            }
        }
    }

    onMounted(checkUser)

    return {
        register,
        user,
        token,
        login,
        logout
    }
}
