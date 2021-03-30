var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var neo4j = require('neo4j-driver');

var app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j','btp'));
var session = driver.session();

app.get("/", (req,res)=>{

    var session = driver.session();
    session.run("Match (n) return n")
        .then(result => {
            flatArray = []
            result.records.forEach(record => {
                //console.log(record)
                flatArray.push({
                    name: record._fields[0].properties.Name,
                    bed: record._fields[0].properties.NoOfBedroom,
                    city: record._fields[0].properties.City,
                    district: record._fields[0].properties.District,
                    yoc: record._fields[0].properties.YearOfContract,
                    price: record._fields[0].properties.Price,
                    FID: record._fields[0].properties.FID,
                    addr: record._fields[0].properties.Address
                });
            });
            //console.log(flatArray);
			res.render('homepage', {
				flats: flatArray
			});
        })
        .catch(function(err) {
			console.log (err);
			session.close();
		});   
})

app.get("/adddata", (req,res) => {
    res.render("adddata")
})

app.get("/login", (req,res) => {
    res.render("login")
})

app.get("/signup", (req,res) => {
    res.render("signup")
})

app.get("/newpsw", (req,res) => {
    res.render("newpsw")
})

app.post('/details/add', function(req,res) {
    var name = req.body.Name;
	var fid = req.body.FID;
	var addr = req.body.Address;
	var city = req.body.City;
	var dist = req.body.District;
	var state = req.body.State;
	const bed = req.body.NoOfBedroom;
	const dwr = req.body.DrawingRoom;
	const dnr = req.body.DiningRoom;
	const lr = req.body.LaundryRoom;
	const kitchen = req.body.Kitchen;
	const abr = req.body.AttachedBathroom;
	const sbr = req.body.SharedBathroom;
	const balcony = req.body.Balcony;
	var floor = req.body.Flooring;
	const mi = req.body.MaxIntakes;
	var furnish = req.body.Furnished;
	const yoc = req.body.YearOfContract;
	const price = req.body.Price;
	const popularity = req.body.Popularity;
	const area = req.body.CarpetArea;
	const age = req.body.AgeOfFlat;
	session
		.run('CREATE (n:Details {Name: $name, FID: $fid, Address: $addr, City: $city, District: $dist, State: $state, NoOfBedroom: $bed, DrawingRoom: $dwr, DiningRoom: $dnr, LaundryRoom: $lr, Kitchen: $kitchen, AttachedBathroom: $abr, SharedBathroom: $sbr, Balcony: $balcony, Flooring: $floor, MaxIntakes: $mi, Furnished: $furnish, YearOfContract: $yoc, Price: $price, Popularity: $popularity, CarpetArea: $area, AgeOfFlat: $age}) RETURN n', {name, fid, addr, city, dist, state, bed, dwr, dnr, lr, kitchen, abr, sbr, balcony, floor, mi, furnish, yoc, price, popularity, area, age})
		
		.then(function(result) {
			res.redirect('/');
			console.log("Flat ID " + fid + " is added to database");
		})
		.catch(function(err) {
			console.log(err);
		});
})

app.get("/search/particular/094", function(req, res) {
	session
		.run('MATCH (n {FID: "094"}) RETURN n')
		
		.then (function(result) {
			flatArray = []
            result.records.forEach(record => {
                //console.log(record)
                flatArray.push({
                	id: record._fields[0].properties.FID,
                    name: record._fields[0].properties.Name,
                    bed: record._fields[0].properties.NoOfBedroom,
                    city: record._fields[0].properties.City,
                    district: record._fields[0].properties.District,
                    state: record._fields[0].properties.State,
                    yoc: record._fields[0].properties.YearOfContract,
                    price: record._fields[0].properties.Price,
                    FID: record._fields[0].properties.FID,
                    addr: record._fields[0].properties.Address,
                    dwr: record._fields[0].properties.DrawingRoom,
                    dnr: record._fields[0].properties.DiningRoom,
                    lr: record._fields[0].properties.LaundryRoom,
                    age: record._fields[0].properties.AgeOfFlat,
                    area: record._fields[0].properties.CarpetArea
                });
                
            });
            //console.log(flatArray);
			res.render('details', {
				flats: flatArray
			});
		})
		.catch(function(err) {
			console.log(err);
		});
});

app.listen(3000, ()=>{
    console.log(`Server running at http://localhost:${3000}/`);
})
