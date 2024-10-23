const express = require('express');
const cors = require('cors'); // استيراد مكتبة CORS
const app = express();
const port = 3000;

// استخدام CORS
app.use(cors()); // السماح بالطلبات من جميع المصادر
app.use(express.json());

// نقطة النهاية (Endpoint) للإرسال
app.post('/', (req, res) => {
    console.log(req.body); // طباعة البيانات في وحدة التحكم
    res.json({ message: 'تم استلام البيانات بنجاح!', data: req.body });
});

// بدء تشغيل الخادم
app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`);
});
