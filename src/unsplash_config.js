// import dotenv from 'dotenv'

// dotenv.config()

import {createApi} from 'unsplash-js'

const MY_ACCESS_KEY = 
// process ? process.env.REACT_APP_ACCESS_KEY :
'HW8wUgGekhSttZFui-nbsA-32jvcXatB7-QFBqfi8as'

const unsplash = createApi({
    accessKey: MY_ACCESS_KEY,
})

export default unsplash