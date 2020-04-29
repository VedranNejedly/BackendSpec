//user rute
UserRouter.post('/users', async (req, res)=>{
    try {
        res.status(201).send({user, token})
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
})
UserRouter.post('/users/login', async (req, res) =>{
    try {
        res.send({user, token})
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
})
UserRouter.get('/users/me', auth, async (req, res) =>{
    res.send(req.user)
})
UserRouter.patch('/users/me', auth, async (req, res) =>{
    if(!isValidOperation){
        return res.status(406).send({error: "Invalid operation"})
    }
    try {
        res.send(req.user)
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
})
UserRouter.delete('/users/me', auth, async (req, res) =>{
    try {
        res.status(201).send(req.user)
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
})


//field rute
FieldRoute.post('/fields', auth, async (req, res) =>{
    try {
        res.status(201).send(field)
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
})
FieldRoute.get('/fields', auth, async (req, res) =>{
       try {
        res.send(req.user.fields)
    } catch (error) {
        res.status(500).send({error: error.message})
    }   
})
FieldRoute.get('/fields/:id', auth, async (req, res) =>{
    try {
        if(!oneField){
            return res.status(404).send({error: "Not found"})
        }
        res.send(oneField)
        } catch (error) {
            res.status(500).send({ error: error.message})
        }
} )
FieldRoute.patch('/fields/:id', auth, async (req, res) =>{
    if(!isValidOperation){
        return res.status(406).send({error: "Invalid operation"})
    }
    try {
        if(!field){
            return res.status(404).send()
        }
        res.send(field)
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
})
FieldRoute.get('/fields/:id/activites', auth, async (req, res) =>{
    try {
        res.send(activites)
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
})
FieldRoute.delete('/fields/:id', auth, async (req, res) =>{
    try {
        if(!field){
            return res.status(404).send()
        }
        res.send(field)
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
})



//activity rute
ActivityRoute.post('/activity', auth, async (req, res) =>{
    try {
        res.status(201).send(activity)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})
ActivityRoute.get('/activity', auth, async (req, res) =>{
    try {
        res.status(201).send({sum, activities: req.user.activities})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})
ActivityRoute.get('/activity/:id', auth, async (req, res) =>{
    try {
        if(!oneActivity){
            return res.status(404).send({error: "Not found"})
        }
        res.send(oneActivity)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})
ActivityRoute.patch('/activity/:id', auth, async (req, res) =>{
    if(!isValidOperation){
        return res.status(406).send({error: "Invalid operation"})
    }
    try {
        if(!activity){
            return res.status(404).send()
        }
        res.send(activity)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})
ActivityRoute.delete('/activity/:id', auth, async (req, res) =>{
    try {
        if(!activity){
            return res.status(404).send()
        }
        res.send(activity)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})


//weather rute
WeatherRoute.get('/weather/today', async (req, res) =>{
    if(!grad) return res.send({error:"Input city"})
    try {
        res.status(201).send(data)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})
WeatherRoute.get('/weather/nextDays', async (req, res) =>{
    if(!grad) return res.send({error:"Input city"})
    try {
        const data = await vrijemeNarednihDana(grad)
        res.status(201).send(data)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})


//news ruta
NewsRoute.get('/news', async (req, res) =>{
    try {
        res.status(201).send(data)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})


//report(pdf) ruta
ReportRoute.get('/report',auth, async (req, res) =>{
    try {
        if(!activities){
            return res.status(404).send()
        }
        pdfDoc.pipe(res)
        pdfDoc.end();
        res.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename=report.pdf'
        });
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})



