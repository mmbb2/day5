const studentModel = require('./models/student-modal')

module.exports = (app) => {
    app.get('/', async (req, res) => {
        studentModel.find((err, students) => {
            if (err) res.send(err);

            res.json(students);
        });
    });

    app.get('/name/:name', async (req, res) => {
        const {name} = req.params
        const student = await studentModel.findOne({name})
        if(!student){
            res.json({name: 'CastError'});
            return
        }
        res.json(student);
    });

    app.post('/', async (req, res) => {
     const {name, mark, isDonePr, group, photo} = req.body;
    const newStudent = await studentModel.create({name, mark, isDonePr, group, photo})
    res.json(newStudent);
    });

    app.delete('/:id', async (req, res) => {
        const {id} = req.params;
        await studentModel.remove({_id: id})
       res.json('Success');
       });

       
    app.put('/:id', async (req, res) => {
        const {id} = req.params;
        const student =  await studentModel.findById(id)
        for (const [key, value] of Object.entries(req.body)) {
            student[key] = req.body[key]
        }
        student.save();

       res.json(student);
       });
}