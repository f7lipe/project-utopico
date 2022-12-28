import { Button, NewTopicForm } from "./styles"
import { useFormik } from 'formik';
import useTopic from "../../hooks/useTopic"
import PropagateLoader from "react-spinners/PropagateLoader"
import TextField from '@mui/material/TextField'
import * as Yup from 'yup'
import useNetwork from "../../hooks/useNetwork";

const NewTopic = () => {
    const { createTopic, status } = useTopic()
    const {state} = useNetwork()
    const offline = !state.online
    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .min(3, 'Must be 3 characters or more')
                .required('Required')
                .matches(/^(\S+$)/g, 'Must not start with a space'),
        }),
        onSubmit: async (values) => {
            await createTopic(values.title)
        }
    })

    return (

        <NewTopicForm onSubmit={formik.handleSubmit} >
            <TextField
                id="title"
                name="title"
                label="What's next?"
                variant="standard"
                type="text"
                fullWidth
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={status === "creating" || offline}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
            />
            <Button
                visible={formik.values.title.length > 2}
                disabled={status === "creating" || !formik.isValid || offline}
                type="submit">
                {
                    status === "creating" ?
                        <PropagateLoader
                            color="#36d7b7" size={4} />
                        :
                        "Create topic"
                }
            </Button>
        </NewTopicForm>

    )
}

export default NewTopic