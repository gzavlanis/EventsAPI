const express = require('express');
const router = express.Router();
const connection = require('../../database');

// show all events
router.get('/', (req, res) => {
	connection.query('SELECT * FROM Events ORDER BY id', (err, result, fields) => {
		if (err) throw err;
		if (result.length) {
			res.send(result);
		} else {
			res.send('There are no events here yet.');
		}
	});
});

// show specific event
router.get('/:id', (req, res) => {
	id = parseInt(req.params.id);
	connection.query(`SELECT * FROM Events WHERE id= "${id}"`, (err, result, fields) => {
		if (err) throw err;
		if (result.length) {
			res.send(result);
		} else {
			res.send('Event not found.');
		}
	});
});

// create a new event
router.post('/', (req, res) => {
	const { title, start, end, description, completed } = req.body;

	if (!title || !start || !end || !description || !completed) {
		return res.status(400).send('You have empty fields! Try again.');
	}

	const sql = `INSERT INTO Events (title, start, end, description, completed) VALUES ('${title}', '${start}', '${end}', '${description}', '${completed}')`;
	connection.query(sql, (err, result, field) => {
		if (err) throw err;
		res.send('Event created.');
	});
});

// update an event
router.put('/:id', (req, res) => {
	id = parseInt(req.params.id);
	const { title, start, end, description, completed } = req.body;

	if (!title || !start || !end || !description || !completed) {
		return res.status(400).send('You have empty fields! Try again.');
	}

	const sql = `UPDATE Events SET title= '${title}', start= '${start}', end= '${end}', description = '${description}', completed = '${completed}' WHERE id= '${id}'`;
	connection.query(sql, (err, result, field) => {
		if (err) throw err;
		res.send('Event updated.');
	});
});

// delete event
router.delete('/:id', (req, res) => {
	id = parseInt(req.params.id);
	const sql = `DELETE FROM Events WHERE id= '${id}'`;
	connection.query(sql, (err, result, field) => {
		if (err) throw err;
		res.send('Event deleted successfully.');
	});
});

module.exports = router;