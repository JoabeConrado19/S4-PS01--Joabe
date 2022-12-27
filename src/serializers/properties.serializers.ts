import * as yup from 'yup'

const createPropertiesSerializer = yup.object().shape({
    value: yup.number().required(),
    size: yup.number().required(),
    address: yup.object().required().shape({
        district: yup.string().required(),
        zipCode: yup.string().required().length(8),
        number: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required().length(2)
    }),
    categoryId: yup.string()
})

const PropertiesReturnSerializer = yup.object().shape({
    value: yup.number(),
    size: yup.number(),
    address: yup.object().shape({
        district: yup.string(),
        zipCode: yup.string(),
        number: yup.string(),
        city: yup.string(),
        state: yup.string()
    }),
    categoryId: yup.string(),
    id: yup.string(),
    createdAt: yup.string(),
    updatedAt: yup.string()
    
})

const PropertiesUniqueReturnSerializer = yup.object().shape({
    value: yup.number(),
    size: yup.number(),
    address: yup.object().shape({
        district: yup.string(),
        zipCode: yup.string(),
        number: yup.string(),
        city: yup.string(),
        state: yup.string()
    }),
    categoryId: yup.string(),
    category: yup.string(),
    id: yup.string(),
    createdAt: yup.string(),
    updatedAt: yup.string()

})

const listPropertiesReturnedData = yup.array(PropertiesUniqueReturnSerializer)

export { createPropertiesSerializer, PropertiesReturnSerializer, PropertiesUniqueReturnSerializer, listPropertiesReturnedData }