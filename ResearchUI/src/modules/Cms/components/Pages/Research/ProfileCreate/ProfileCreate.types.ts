interface Values { [fieldName: string]: any }

export interface IFormData {
    values: Values,
    isSubmitting: boolean,
    initialValues: Values,
}

export interface IProps {
    formRef: any;
    loading: boolean;
    initialValues: Values,
    rules: any,
    isSubmitting: boolean,
    handleChange: (changedValues: any) => void;
    handleSubmit: (event: any) => void;
    handleSubmitFailed: (values: any) => void;
}
