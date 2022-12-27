import * as yup from 'yup'

const createCategorySerializer = yup.object().shape({
    name: yup.string().required()
})

const CategoryReturnSerializer = yup.object().shape({
    name: yup.string()
})

const CategoryUniqueReturnSerializer = yup.object().shape({
    name: yup.string(),
    id: yup.string()

})

const listCategoriesReturnedData = yup.array(CategoryUniqueReturnSerializer)

export { createCategorySerializer, CategoryReturnSerializer, CategoryUniqueReturnSerializer, listCategoriesReturnedData }