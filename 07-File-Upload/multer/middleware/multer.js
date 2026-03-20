const multer = require('multer')
const path = require('path')
const fs = require('fs')

const _1MB = 1 * 1000 * 1000
const _2MB = 2 * 1000 * 1000
const _750KB = 150000

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        fs.mkdirSync('public/upload', { recursive: true })
        cb(null, 'public/upload')
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)

        const whiteListFormat = ['.png', '.jpg', '.jpeg', '.webp']
        if (whiteListFormat.includes(ext)) {
            const fileName = Date.now() + ext
            cb(null, fileName)
        } else {
            cb(new Error("only .png, .jpg, .jpeg, .webp format allowed"))
        }

        const whiteListMimType = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp']
        if (whiteListMimType.includes(file.mimetype)) {
            const fileName = Date.now() + ext
            cb(null, fileName)
        } else {
            cb(new Error("only .png, .jpg, .jpeg, .webp format allowed"))
        }
    },
})

const uploadFile = multer({
    storage,
    limits: {
        fileSize: _1MB
    }
})

module.exports = { uploadFile }