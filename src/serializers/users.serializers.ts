import * as yup from 'yup'

const createUserSerializer = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().required()
})

const updateUserSerializer = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    password: yup.string().notRequired()
})

const UserReturnSerializer = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    isAdm: yup.boolean(),
    isActive: yup.boolean(),
    createdAt: yup.string(),
    updatedAt: yup.string(),
    id: yup.string()
})

const UserUniqueReturnSerializer = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    isAdm: yup.boolean(),
    isActive: yup.boolean(),
    createdAt: yup.string(),
    updatedAt: yup.string(),
    id: yup.string()

})

const listUsersReturnedData = yup.array(UserUniqueReturnSerializer)

export { createUserSerializer, UserReturnSerializer, UserUniqueReturnSerializer, listUsersReturnedData, updateUserSerializer }