import { AuthTypes } from '../types/index'

export const syncUser = () => ({ type: AuthTypes.SYNC_USER })

export const login = (email, password) => ({ type: AuthTypes.LOGIN, email, password })

export const logout = () => ({ type: AuthTypes.LOGOUT })
