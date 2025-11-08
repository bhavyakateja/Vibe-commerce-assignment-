import app from './app.js'
import connectToDB from './config/DbConnect.js'

const PORT = process.env.PORT

app.listen(PORT, async () => {
    await connectToDB()
    console.log(`Server is live at http://localhost:${PORT}`)
})